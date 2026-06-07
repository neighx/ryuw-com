import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-28 lg:pt-40 lg:pb-40 px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-6">
          Contact
        </h1>
        <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-3">
          Music Production · Sound Design · DJ Booking · Other
        </p>
        <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-lg">
          For production requests, sound design, DJ bookings, and all other inquiries, please fill out the form below.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-xl">
        <ContactForm />
      </div>
    </div>
  );
}
