import { Link } from "react-router-dom";
import { Linkedin, Youtube, MessageCircle, MapPin, Phone, Mail, ChevronRight, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { toast } from "sonner";
import footerBg from "@/assets/footer-bg.jpg";

const CollapsibleSection = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  /** When true, section starts expanded on small screens (links visible without tapping). */
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <h4
        className="font-heading font-bold text-base mb-0 sm:mb-5 relative sm:pb-3 flex items-center justify-between cursor-pointer sm:cursor-default"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 sm:hidden transition-transform ${open ? "rotate-180" : ""}`} />
        <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-primary hidden sm:block" />
      </h4>
      <div
        className={`overflow-hidden transition-all sm:max-h-none sm:mt-0 ${
          open ? "max-h-[2000px] mt-3" : "max-h-0 sm:max-h-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "Basic", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone is required";
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
        toast.success("We'll contact you within 24 hours!");
        setForm({ name: "", email: "", phone: "", course: "Basic", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  const footerQuickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Courses", to: "/courses" },
    { label: "Curriculum", to: "/curriculum" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "FAQ", to: "/faq" },
    { label: "Sitemap", href: "/sitemap.xml" },
    { label: "Contact Us", to: "/contact" },
  ] as const;

  const inputCls = "w-full px-3 py-2.5 text-sm bg-white/10 border border-white/15 text-primary-foreground placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors";

  return (
    <footer className="relative text-primary-foreground">
      <div className="absolute inset-0">
        <img src={footerBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
        <div className="absolute inset-0 bg-dark-bg/90" />
      </div>
      <div className="relative z-10 w-full mx-auto px-4 py-10 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="mb-5 overflow-visible pr-8 sm:pr-10">
              <img
                src={logo}
                alt="GxP IT Solutions"
                className="h-20 w-auto origin-left scale-[1.22] brightness-0 invert"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-white/50 mb-5 leading-relaxed">
              Pharma GxP IT Training &amp; Placement Assistance. IT Services, CSV, and infrastructure solutions for pharmaceutical clients.
            </p>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>India (Online Training)</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>info@gxpitsolutions.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>+91 96766 58686</span>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919676658686", target: "_blank", rel: "noopener noreferrer" },
              ].map(({ icon: Icon, label, href, ...rest }) => (
                <a key={label} href={href} aria-label={label} {...rest} className="w-9 h-9 bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links — expanded by default on mobile so all links (incl. Sitemap) are visible */}
          <CollapsibleSection title="Quick Links" defaultOpen>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((l) => (
                <li key={"href" in l ? l.href : l.to}>
                  {"href" in l ? (
                    <a
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-white/55 hover:text-primary transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" />
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} className="flex items-center gap-2 text-sm text-white/55 hover:text-primary transition-colors">
                      <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" />
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          {/* Expertise — collapsible on mobile */}
          <CollapsibleSection title="Our Expertise">
            <ul className="space-y-2.5">
              {[
                "Computer System Validation",
                "Data Integrity",
                "GxP Compliance",
                "21 CFR Part 11",
                "EU Annex 11",
                "GAMP5 Framework",
                "LIMS & SCADA",
                "Cloud Validation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/55">
                  <ChevronRight className="w-3 h-3 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          {/* Quick Enquiry */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 relative pb-3">
              Quick Enquiry
              <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-primary" />
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className={inputCls} aria-label="Full Name" />
                {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
              </div>
              <div>
                <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className={inputCls} aria-label="Email" />
                {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className={inputCls} aria-label="Phone" />
                {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
              </div>
              <select value={form.course} onChange={(e) => setForm({...form, course: e.target.value})} className={inputCls} aria-label="Course Interest">
                <option value="Basic">Basic Training</option>
                <option value="Advanced">Advanced Training</option>
                <option value="Both">Both</option>
              </select>
              <textarea placeholder="Message" rows={2} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className={`${inputCls} resize-none`} aria-label="Message" />
              <button type="submit" className="w-full btn-primary">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="w-full mx-auto px-4 py-4 flex flex-col items-center text-xs text-white/40 gap-2 max-w-7xl md:flex-row md:justify-between md:relative">
          <span>© 2025 IT GxP Solutions. All Rights Reserved.</span>
          <span className="md:absolute md:left-1/2 md:-translate-x-1/2">
            Developed by{" "}
            <a href="https://www.octaleads.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
              Octaleads Pvt Ltd.
            </a>
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <a href="/sitemap.xml" className="hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
