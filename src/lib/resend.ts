import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY as string;

export const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export const EMAIL_TEMPLATES = {
  CONTACT_TO_CAPTAIN: "contact-notification",
  CONTACT_AUTO_REPLY: "contact-auto-reply",
} as const;

export const FROM_EMAIL =
  (process.env.RESEND_FROM_EMAIL as string) || "hello@gabeyreglobal.ca";
export const TO_EMAIL =
  (process.env.RESEND_TO_EMAIL as string) || "greg@gabeyreglobal.ca";
