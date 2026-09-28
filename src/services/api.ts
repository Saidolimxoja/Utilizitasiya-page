export interface LeadFormPayload {
  name: string;
  company: string;
  phone: string;
  wasteType?: string;
  volume?: string;
  notes?: string;
  source?: string;
  timestamp?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  isSimulated?: boolean;
}

/**
 * Submits lead data directly to the Google Apps Script Web App Webhook.
 *
 * Note on Google Apps Script Web Apps:
 * When a POST request is made to a Google Apps Script Web App, it returns a 302 redirect.
 * Browsers block cross-origin redirects on JSON preflight requests.
 * By sending the payload as 'text/plain;charset=utf-8' with mode 'no-cors', the browser treats
 * this as a simple request without a CORS preflight options check, ensuring the Google Apps Script
 * receives and processes the payload reliably.
 */
export async function submitLeadForm(
  payload: LeadFormPayload,
): Promise<ApiResponse> {
  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";

  const enrichedPayload: LeadFormPayload = {
    ...payload,
    timestamp: new Date().toISOString(),
    source: payload.source || "Website Lead Form",
  };

  // If no URL is provided or it's the template placeholder, simulate a successful response
  // so the user can test the UI, state changes, confetti, and modals immediately.
  if (!scriptUrl || scriptUrl.includes("YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL")) {
    console.info(
      "ℹ️ [EKO-PARTNER API] VITE_GOOGLE_SCRIPT_URL not configured. Running in Demo Simulation mode.",
      enrichedPayload,
    );
    await new Promise((resolve) => setTimeout(resolve, 900));
    return {
      success: true,
      message:
        "Demo mode: Lead recorded successfully in simulated environment.",
      isSimulated: true,
    };
  }

  try {
    // Mode 'no-cors' with text/plain body allows firing to Google Apps Script without CORS preflight rejection
    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(enrichedPayload),
    });

    return {
      success: true,
      message:
        "Lead submitted successfully to Google Apps Script & Telegram bot.",
    };
  } catch (error) {
    console.error(
      "❌ [EKO-PARTNER API] Error submitting form to Google Apps Script:",
      error,
    );
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown network error",
    };
  }
}
