/**
 * Google Tag Manager & Google Analytics 4 Helper Utilities
 * Lotus Semarang - https://lotussemarang.com
 */

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag?: (...args: any[]) => void;
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lotussemarang.com";

/**
 * Push an event to GTM dataLayer and GA4 gtag if available
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
    timestamp: new Date().toISOString(),
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
};

/**
 * Track Page Views (SPA navigation / dynamic route changes)
 */
export const trackPageView = (url: string, pageTitle?: string) => {
  trackEvent("page_view", {
    page_location: url,
    page_path: url,
    page_title: pageTitle || (typeof document !== "undefined" ? document.title : ""),
  });
};

/**
 * Track WhatsApp Conversion / Contact Lead
 */
export const trackWhatsAppLead = (data: {
  service?: string;
  sourceLocation: string; // e.g. "navbar", "hero", "reservasi_wizard", "footer", "service_page"
  bookingDate?: string;
  bookingTime?: string;
  patientName?: string;
}) => {
  trackEvent("generate_lead", {
    event_category: "Conversion",
    event_label: "WhatsApp Booking",
    value: 1,
    currency: "IDR",
    service_name: data.service || "Umum / Konsultasi",
    contact_channel: "WhatsApp",
    source_location: data.sourceLocation,
    booking_date: data.bookingDate,
    booking_time: data.bookingTime,
  });

  // Secondary high-intent conversion event for GTM triggers
  trackEvent("whatsapp_click", {
    service: data.service || "General",
    source: data.sourceLocation,
  });
};

/**
 * Track Service Interaction / Click
 */
export const trackServiceClick = (serviceId: string, serviceTitle: string, source: string) => {
  trackEvent("select_item", {
    item_list_name: "Services List",
    item_id: serviceId,
    item_name: serviceTitle,
    item_category: "Wellness & Health",
    source_location: source,
  });
};

/**
 * Track Booking Wizard Steps
 */
export const trackBookingStep = (stepNumber: number, stepName: string, serviceSelected?: string) => {
  trackEvent("checkout_progress", {
    checkout_step: stepNumber,
    step_name: stepName,
    service_name: serviceSelected || "none",
  });
};

/**
 * Track Direct Contact Actions (Phone, Directions/Google Maps, Instagram)
 */
export const trackDirectContact = (channel: "phone" | "maps" | "instagram" | "email", label?: string) => {
  trackEvent("contact", {
    contact_method: channel,
    contact_label: label || channel,
  });
};

/**
 * Track FAQ Accordion Expand
 */
export const trackFaqToggle = (question: string, isOpen: boolean) => {
  if (isOpen) {
    trackEvent("view_faq", {
      faq_question: question,
    });
  }
};

/**
 * Track Video Reel Interaction
 */
export const trackReelView = (videoId: string, title?: string) => {
  trackEvent("video_start", {
    video_id: videoId,
    video_title: title || "Lotus Reel",
    video_provider: "youtube",
  });
};
