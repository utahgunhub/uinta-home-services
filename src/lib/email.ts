import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_4s5lsdc";
const EMAILJS_PUBLIC_KEY = "LHhhab8fiZXeSNaGT";
const EMAILJS_TEMPLATE_ID = "template_58rhz0s";

type QuoteRequestPayload = {
  formType: "Residential Contact" | "Commercial Quote";
  name: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
  company?: string;
  frequency?: string;
  hearAboutUs?: string;
};

export const sendQuoteRequest = async (payload: QuoteRequestPayload) => {
  const services = payload.services.length
    ? payload.services.join(", ")
    : "None selected";

  const templateParams = {
    to_email: "taylordwilliams11@gmail.com",
    subject: `${payload.formType} Submission`,
    form_type: payload.formType,
    inquiry_type: payload.formType,
    source_page: payload.formType,
    from_name: payload.name,
    name: payload.name,
    reply_to: payload.email,
    from_email: payload.email,
    email: payload.email,
    phone: payload.phone,
    company: payload.company || "N/A",
    frequency: payload.frequency || "N/A",
    hear_about_us: payload.hearAboutUs || "N/A",
    hearAboutUs: payload.hearAboutUs || "N/A",
    services,
    services_list: services,
    message: payload.message || "No additional project details provided.",
    details: payload.message || "No additional project details provided.",
    submitted_at: new Date().toLocaleString(),
  };

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    {
      publicKey: EMAILJS_PUBLIC_KEY,
    }
  );
};
