import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import ScrollReveal from "@/components/ScrollReveal";
import CounterAnimation from "@/components/CounterAnimation";
import SectionPattern from "@/components/SectionPattern";
import heroImg from "@/assets/hero-lab.jpg";

const testimonials = [
  {
    name: "Priya Sharma", role: "CSV Validation Analyst", company: "Aurobindo Pharma", location: "Hyderabad",
    quote: "IT GxP Solutions completely transformed my career trajectory. The live project training on IQ, OQ, and PQ gave me real-world experience that set me apart in interviews. Within two months of completing the course, I secured my dream role as a CSV Validation Analyst.",
    before: "Junior IT Associate", after: "CSV Validation Analyst at Aurobindo Pharma", rating: 5,
  },
  {
    name: "Rahul Mehta", role: "QA Specialist", company: "Sun Pharma", location: "Mumbai",
    quote: "The structured curriculum covering 21 CFR Part 11 and GAMP5 was exactly what I needed to transition into pharma quality assurance. The trainer's 10+ years of industry experience made every session invaluable.",
    before: "Software Tester", after: "QA Specialist at Sun Pharma", rating: 5,
  },
  {
    name: "Anitha Reddy", role: "IT Compliance Lead", company: "Dr. Reddy's", location: "Hyderabad",
    quote: "From understanding regulations to executing live validation documents — this program covers everything. The interview preparation module was the cherry on top. The mock interviews prepared me for exactly the questions I was asked.",
    before: "IT Support Engineer", after: "IT Compliance Lead at Dr. Reddy's", rating: 5,
  },
  {
    name: "Karthik Nair", role: "Validation Engineer", company: "Cipla", location: "Pune",
    quote: "I was a complete fresher with no pharmaceutical background. The step-by-step approach helped me understand complex regulatory requirements. The SOP preparation and data migration projects gave me hands-on skills that employers value highly.",
    before: "Fresh Graduate (B.Tech CS)", after: "Validation Engineer at Cipla", rating: 5,
  },
  {
    name: "Sneha Iyer", role: "Regulatory Affairs Analyst", company: "Lupin", location: "Bengaluru",
    quote: "The advanced track covering JIRA, HP ALM, and QMS tools like Veeva and Valgenesis gave me a significant edge over other candidates. The practical exposure to LIMS and SCADA validation was exceptional.",
    before: "QC Lab Technician", after: "Regulatory Affairs Analyst at Lupin", rating: 5,
  },
  {
    name: "Mohammed Arif", role: "Systems Analyst", company: "Hetero Drugs", location: "Hyderabad",
    quote: "The comprehensive curriculum covering cloud validation, Excel sheet validation, and security profile configuration prepared me for the modern pharma IT landscape. The placement assistance was genuine — they helped me until I got placed.",
    before: "Desktop Support Engineer", after: "Systems Analyst at Hetero Drugs", rating: 5,
  },
];

const TestimonialsPage = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const t = testimonials[current];

  return (
    <main>
      <HeroBanner title="Student Success Stories" breadcrumb="Testimonials" bgImage={heroImg} />

      <section className="wp-section bg-background relative">
        <SectionPattern variant="testimonials" />
        <div className="wp-container max-w-4xl relative z-10">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="border border-border p-8 md:p-12 min-h-[440px] flex flex-col items-center justify-center text-center">
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-8 italic max-w-2xl">
                "{t.quote}"
              </p>
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-3">
                <span className="font-bold text-primary-foreground text-xl">{t.name.charAt(0)}</span>
              </div>
              <p className="font-bold text-foreground text-lg">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role} — {t.company}, {t.location}</p>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm">
                <span className="px-4 py-2 bg-gray-light text-foreground font-medium">{t.before}</span>
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="px-4 py-2 bg-red-light text-primary font-bold">{t.after}</span>
              </div>
            </div>

            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center hover:bg-red-hover transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center hover:bg-red-hover transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex justify-center gap-2.5 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 transition-colors ${i === current ? "bg-primary" : "bg-border"}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground py-14 relative">
        <SectionPattern variant="stats" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center">
              <div>
                <span className="text-5xl font-extrabold text-primary">95%</span>
                <p className="text-white/60 text-sm mt-2 font-medium">secured roles within 3 months</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/20" />
              <div>
                <span className="text-5xl font-extrabold text-primary">
                  <CounterAnimation end={500} suffix="+" />
                </span>
                <p className="text-white/60 text-sm mt-2 font-medium">Professionals trained</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/20" />
              <div>
                <span className="text-5xl font-extrabold text-primary">
                  <CounterAnimation end={10} suffix="+" />
                </span>
                <p className="text-white/60 text-sm mt-2 font-medium">Years of experience</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
