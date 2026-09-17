import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Linkedin, Youtube, MessageCircle } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import ScrollReveal from "@/components/ScrollReveal";
import SectionPattern from "@/components/SectionPattern";
import { toast } from "sonner";
import heroImg from "@/assets/hero-lab.jpg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", experience: "Fresher",
    course: "Basic", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.phone.trim() || form.phone.trim().length < 7) e.phone = "Valid phone number is required";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setErrors({});
    try {
      const res = await fetch("https://formspree.io/f/mvzvbdbp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success("Thank you! We'll contact you within 24 hours.");
        setForm({ name: "", email: "", phone: "", experience: "Fresher", course: "Basic", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const inputCls = "w-full px-4 py-3 text-sm bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

  return (
    <main>
      <HeroBanner title="Get In Touch / Enroll Now" breadcrumb="Contact" bgImage={heroImg} />

      <section className="wp-section bg-background relative">
        <SectionPattern variant="contact" />
        <div className="wp-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <p className="wox-subheading">Reach Out</p>
                <h2 className="wox-heading mb-8 text-2xl">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  {[
                    { icon: MapPin, title: "Location", text: "India (Online Training — Global Students Welcome)" },
                    { icon: Mail, title: "Email", text: "info@gxpitsolutions.com" },
                    { icon: Phone, title: "Phone / WhatsApp", text: "+91 96766 58686" },
                    { icon: Clock, title: "Batch Timings", text: "Mon–Fri: 9:00–10:00 AM IST\nSat–Sun: 6:00–7:00 PM IST" },
                  ].map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-light flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">{title}</p>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-light h-52 flex items-center justify-center mb-6 border border-border">
                  <p className="text-muted-foreground text-sm">Google Map — Coming Soon</p>
                </div>

                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Youtube, label: "YouTube", href: "#" },
                    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919676658686", target: "_blank", rel: "noopener noreferrer" },
                  ].map(({ icon: Icon, label, href, ...rest }) => (
                    <a key={label} href={href} aria-label={label} {...rest} className="w-11 h-11 bg-foreground text-primary-foreground hover:bg-primary transition-colors flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Enrollment Form */}
            <ScrollReveal delay={0.15}>
              <div className="border border-border p-8 bg-background">
                <p className="wox-subheading">Enroll</p>
                <h2 className="wox-heading text-2xl mb-8">Enrollment Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name *" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputCls} aria-label="Full Name" />
                    {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls} aria-label="Email Address" />
                    {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number *" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls} aria-label="Phone Number" />
                    {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
                  </div>
                  <select value={form.experience} onChange={(e) => update("experience", e.target.value)} className={inputCls} aria-label="Years of Experience">
                    <option value="Fresher">Fresher</option>
                    <option value="1-3">1–3 Years</option>
                    <option value="3-5">3–5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                  <select value={form.course} onChange={(e) => update("course", e.target.value)} className={inputCls} aria-label="Course Interest">
                    <option value="Basic">Basic Training</option>
                    <option value="Advanced">Advanced Training</option>
                    <option value="Both">Both</option>
                  </select>
                  <textarea placeholder="Message / Questions" rows={3} value={form.message} onChange={(e) => update("message", e.target.value)} className={`${inputCls} resize-none`} aria-label="Message" />
                  <button type="submit" className="btn-primary w-full text-sm py-3.5">
                    Submit Enrollment Request
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
