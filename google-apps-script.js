/**
 * =========================================================================
 * EKO-PARTNER UZBEKISTAN — GOOGLE APPS SCRIPT WEBHOOK & TELEGRAM BOT DISPATCHER
 * =========================================================================
 * 
 * ARCHITECTURE:
 * 1. Receives incoming lead form submissions (POST) from the SPA frontend.
 * 2. Automatically appends lead data into the active Google Sheet.
 * 3. Sends instant, beautifully formatted alerts to your Telegram chat/group via Telegram Bot API.
 * 4. Zero backend server required (100% serverless, free, reliable).
 */

// CONFIGURATION: Replace these with your credentials
// (Or set them in Project Settings -> Script Properties for higher security)
var CONFIG = {
  TELEGRAM_BOT_TOKEN: "YOUR_TELEGRAM_BOT_TOKEN", // Example: 123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ
  TELEGRAM_CHAT_ID: "YOUR_TELEGRAM_CHAT_ID",     // Example: -1001234567890 (group) or 12345678 (user)
  SHEET_NAME: "Leads",                           // Name of tab in Google Sheet
  TIMEZONE: "Asia/Tashkent",                     // Tashkent local time
  DATE_FORMAT: "dd.MM.yyyy, HH:mm:ss"            // Format: День.Месяц.Год, Время (e.g. 28.09.2026, 10:55:56)
};

/**
 * Handle HTTP POST requests from the website lead form or calculator quiz
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for concurrent requests
  try {
    lock.waitLock(10000);
  } catch (err) {
    return createJsonResponse({ success: false, error: "Server busy. Try again later." });
  }

  try {
    var data = {};

    // Parse incoming payload (supports JSON text payload and URL-encoded forms)
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        // Fallback to URL encoded parameters if not pure JSON
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var now = new Date();
    var formattedDate = Utilities.formatDate(now, CONFIG.TIMEZONE, CONFIG.DATE_FORMAT);

    var name = (data.name || "Ko'rsatilmadi").toString().trim();
    var company = (data.company || "Ko'rsatilmadi").toString().trim();
    var phone = (data.phone || "Ko'rsatilmadi").toString().trim();
    var wasteType = (data.wasteType || "Umumiy so'rov").toString().trim();
    var volume = (data.volume || "Aniqlanmagan").toString().trim();
    var notes = (data.notes || "Izoh yo'q").toString().trim();
    var source = (data.source || "Website Lead Form").toString().trim();

    // 1. Record data in Google Sheet
    recordToGoogleSheet([
      formattedDate,
      name,
      company,
      phone,
      wasteType,
      volume,
      notes,
      source
    ]);

    // 2. Dispatch alert to Telegram
    sendTelegramNotification({
      date: formattedDate,
      name: name,
      company: company,
      phone: phone,
      wasteType: wasteType,
      volume: volume,
      notes: notes,
      source: source
    });

    return createJsonResponse({
      success: true,
      message: "Lead recorded and Telegram alert sent successfully."
    });

  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    return createJsonResponse({
      success: false,
      error: error.toString()
    });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Handle HTTP GET requests (useful for browser health-checks)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "active",
      service: "EKO-PARTNER Serverless Lead Dispatcher",
      timestamp: Utilities.formatDate(new Date(), CONFIG.TIMEZONE, CONFIG.DATE_FORMAT)
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Appends row to the active spreadsheet and initializes header row if needed
 */
function recordToGoogleSheet(rowData) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  }

  // If new sheet or empty, create styled headers
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Sana va Vaqt",
      "Mas'ul Shaxs",
      "Kompaniya / Korxona",
      "Telefon Raqami",
      "Chiqindi Toifasi",
      "Hajm / Miqdor",
      "Qo'shimcha Izohlar",
      "Arizaning Manbasi"
    ];
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#4D6A28");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  sheet.appendRow(rowData);
}

/**
 * Sends a rich Telegram HTML message via Telegram Bot API
 */
function sendTelegramNotification(lead) {
  var botToken = getSetting("TELEGRAM_BOT_TOKEN");
  var chatId = getSetting("TELEGRAM_CHAT_ID");

  if (!botToken || botToken === "YOUR_TELEGRAM_BOT_TOKEN") {
    Logger.log("Telegram Bot Token is not configured. Skipping Telegram dispatch.");
    return;
  }
  if (!chatId || chatId === "YOUR_TELEGRAM_CHAT_ID") {
    Logger.log("Telegram Chat ID is not configured. Skipping Telegram dispatch.");
    return;
  }

  // Construct Telegram message in HTML
  var message = "🌿 <b>YANGI ARIZA — EKO-PARTNER UZBEKISTAN</b> 🌿\n\n" +
    "📅 <b>Sana:</b> <code>" + escapeHtml(lead.date) + "</code>\n" +
    "🏢 <b>Kompaniya:</b> <b>" + escapeHtml(lead.company) + "</b>\n" +
    "👤 <b>Mas'ul shaxs:</b> " + escapeHtml(lead.name) + "\n" +
    "📞 <b>Telefon:</b> <a href=\"tel:" + escapeHtml(lead.phone) + "\">" + escapeHtml(lead.phone) + "</a>\n" +
    "☣️ <b>Chiqindi toifasi:</b> " + escapeHtml(lead.wasteType) + "\n" +
    "⚖️ <b>Hajmi:</b> <b>" + escapeHtml(lead.volume) + "</b>\n" +
    "📝 <b>Izoh:</b> " + escapeHtml(lead.notes) + "\n\n" +
    "🌐 <b>Manba:</b> <i>" + escapeHtml(lead.source) + "</i>\n" +
    "━━━━━━━━━━━━━━━━━━\n" +
    "⚡️ <i>Iltimos, mijoz bilan 15 daqiqa ichida bog'laning!</i>";

  var url = "https://api.telegram.org/bot" + botToken + "/sendMessage";
  var payload = {
    chat_id: chatId,
    text: message,
    parse_mode: "HTML",
    disable_web_page_preview: true
  };

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    Logger.log("Telegram response: " + response.getContentText());
  } catch (err) {
    Logger.log("Failed to send Telegram message: " + err.toString());
  }
}

/**
 * Helper to get setting from ScriptProperties or fallback to CONFIG
 */
function getSetting(key) {
  var prop = PropertiesService.getScriptProperties().getProperty(key);
  if (prop) return prop;
  return CONFIG[key];
}

/**
 * Escapes HTML characters for Telegram HTML format
 */
function escapeHtml(text) {
  if (!text) return "";
  return text
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Helper to return JSON Response with CORS headers
 */
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this function in the Google Apps Script Editor to test your Telegram connection!
 */
function testTelegramAlert() {
  sendTelegramNotification({
    date: Utilities.formatDate(new Date(), CONFIG.TIMEZONE, CONFIG.DATE_FORMAT),
    name: "Alisher Usmonov (Test)",
    company: "UzAuto Motors AJ (Test)",
    phone: "+998 90 123 45 67",
    wasteType: "Sanoat shlamlari va filtrlari (Test)",
    volume: "5 tonna",
    notes: "Didox orqali shartnoma loyihasi yuborilsin",
    source: "Apps Script Test Console"
  });
}
