import { Link } from "react-router-dom";
import { CheckCircle, BookOpen, FileText, Users, Clock, Briefcase, Award, ArrowRight, ChevronLeft, ChevronRight, Star, Calendar, CircleDot, Play, Monitor } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CounterAnimation from "@/components/CounterAnimation";
import SectionPattern from "@/components/SectionPattern";
import { useState, useEffect, useCallback } from "react";
import heroImg from "@/assets/hero-lab.jpg";

const BROCHURE_URL =
  "https://drive.google.com/file/d/1lAEmu8h1NRSH7uO60kpR7LveYO0DW_xa/view?usp=sharing";

const testimonials = [
  { name: "Priya Sharma", role: "CSV Validation Analyst", company: "Aurobindo Pharma, Hyderabad", quote: "IT GxP Solutions transformed my career. The live project training gave me real-world experience that no textbook could provide. I landed my dream role within 2 months of completing the course.", rating: 5 },
  { name: "Rahul Mehta", role: "QA Specialist", company: "Sun Pharma, Mumbai", quote: "The structured curriculum covering 21 CFR Part 11 and GAMP5 was exactly what I needed. The trainer's industry experience made every session incredibly valuable.", rating: 5 },
  { name: "Anitha Reddy", role: "IT Compliance Lead", company: "Dr. Reddy's, Hyderabad", quote: "From understanding regulations to executing live validation documents — this program covers everything. The interview preparation was the cherry on top.", rating: 5 },
  { name: "Karthik Nair", role: "Validation Engineer", company: "Cipla, Pune", quote: "I was a fresher with no pharma background. The step-by-step approach helped me understand complex regulatory requirements and build a strong foundation in CSV.", rating: 5 },
  { name: "Sneha Iyer", role: "Regulatory Affairs Analyst", company: "Lupin, Bengaluru", quote: "The advanced track with JIRA, HP ALM, and QMS tools gave me an edge over other candidates. Highly recommend for anyone serious about a career in pharma IT.", rating: 5 },
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrentTestimonial((p) => (p + 1) % testimonials.length), []);
  const prev = () => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Pharmaceutical Compliance Training" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 w-full px-4 md:container md:mx-auto md:max-w-7xl">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h1 className="wox-heading-white text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] mb-4 md:mb-6 leading-[1.15]">
                Pharma GxP IT<br />Training & Services.<br />
                <span className="text-primary">Build Your Career.</span>
              </h1>
              <p className="text-white/70 mb-6 md:mb-8 text-sm md:text-lg leading-relaxed max-w-xl pl-5">
                Computer System Validation Training, QMS System Training, Pharma GxP IT Training with Placement Assistance. Plus end-to-end IT &amp; CSV services for pharma clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pl-5">
                <Link to="/courses" className="btn-primary text-xs sm:text-sm px-6 sm:px-10 py-3 sm:py-4 gap-2">
                  Explore Courses <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={BROCHURE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-white text-xs sm:text-sm px-6 sm:px-10 py-3 sm:py-4 gap-2"
                >
                  <Play className="w-4 h-4" /> Download Brochure
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Training Vertical */}
      <section className="wp-section bg-background relative">
        <SectionPattern variant="training" />
        <div className="wp-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <ScrollReveal>
              <div>
                <p className="wox-subheading">Training Programs</p>
                <h2 className="wox-heading mb-6">Pharma GxP IT Training & Placement</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                  Our industry-aligned training programs cover Computer System Validation (CSV), QMS Systems, and Pharma GxP IT — with dedicated placement assistance to launch your career.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: BookOpen, title: "CSV Training (Live Projects)" },
                    { icon: FileText, title: "QMS System Training" },
                    { icon: Users, title: "Pharma GxP IT Training" },
                    { icon: CheckCircle, title: "Placement Assistance" },
                    { icon: Clock, title: "Morning & Evening Batches" },
                    { icon: Briefcase, title: "Interview Preparation" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 border border-border hover:border-primary hover:bg-red-light transition-all group">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-semibold text-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-foreground p-6 md:p-10">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">Basic Training</h3>
                <p className="text-white/70 text-sm mb-6">
                  60-day foundational program covering QMS, Data Integrity, CSV fundamentals, GAMP5, and live testing — everything you need to start a career in pharma IT compliance.
                </p>
                <Link to="/courses" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                  Know More <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="border-t border-white/10 mt-6 pt-6">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">Advanced Training</h3>
                  <p className="text-white/70 text-sm mb-6">
                    Complete track adds cloud validation, JIRA, HP ALM, QMS tools (SAP, Trackwise, Valgenesis), LIMS, SCADA, and dedicated job assistance for serious career advancement.
                  </p>
                  <Link to="/courses" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    Know More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="border-t border-white/10 mt-6 pt-6">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">Veeva Vault Training</h3>
                  <p className="text-white/70 text-sm mb-6">
                    Specialized program covering Veeva Vault QMS & Platform business administration, system configuration, security, lifecycles, and certification guidance.
                  </p>
                  <Link to="/courses" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    Know More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="wp-section bg-gray-light relative">
        <SectionPattern variant="services" />
        <div className="wp-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="wox-subheading">IT Services</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Pharma IT & CSV Services</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                End-to-end IT infrastructure and Computer System Validation services for pharmaceutical manufacturing clients.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Briefcase, title: "Laptop Sales & Service", desc: "Hardware procurement, configuration, and ongoing support for pharma environments." },
              { icon: Users, title: "Networking & Data Center", desc: "Network setup, data center infrastructure, and connectivity solutions for pharma facilities." },
              { icon: Award, title: "Infrastructure Qualification", desc: "IQ/OQ/PQ qualification of IT infrastructure per regulatory requirements." },
              { icon: CheckCircle, title: "CSV for Manufacturing Equipment", desc: "Validation of all pharma manufacturing equipment including PLC, HMI, and SCADA systems." },
              { icon: FileText, title: "QC Systems Validation", desc: "Validation of CDS, Non-CDS applications, instruments, and Labware LIMS systems." },
              { icon: BookOpen, title: "ERP Validation & Implementation", desc: "End-to-end ERP system validation, implementation, and post-project support." },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-background border border-border p-6 h-full hover:border-primary hover:shadow-lg transition-all">
                  <service.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold text-foreground mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="wp-section bg-background relative">
        <SectionPattern variant="courses" />
        <div className="wp-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="wox-subheading">Programs</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Our Training Programs</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Basic Training",
                duration: "60 Days | Mon–Fri 9–10 AM IST",
                badge: "Foundational",
                items: ["QMS System Introduction", "Data Integrity & ALCOA", "CSV & Regulatory Guidelines", "GAMP5 & Validation Docs", "Testing (IQ, OQ, PQ — Live)", "SOP Preparation & Audit Readiness"],
                popular: false,
              },
              {
                title: "Basic + Advanced",
                duration: "60 Days | Sat–Sun 6–7 PM IST",
                badge: "Most Popular",
                items: ["Everything in Basic Training", "Cloud & VM Validation", "JIRA, HP ALM Tools", "SAP, Trackwise, Veeva, Valgenesis", "LIMS, SCADA, PLC Systems", "Job Assistance Included"],
                popular: true,
              },
              {
                title: "Veeva Vault Training",
                duration: "Specialized Track | Live Sessions",
                badge: "Specialized",
                items: ["Veeva Vault QMS & Platform Intro", "Business Admin Level 1 & 2 Setup", "System Admin Level 1 to 5 Management", "Dynamic Access Control & Lifecycles", "Security Models & Workflows", "Migration, Validation & Certification"],
                popular: false,
              },
            ].map((course, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={`bg-background p-5 md:p-8 h-full flex flex-col border ${course.popular ? "border-primary shadow-lg relative" : "border-border"}`}>
                  {course.popular && (
                    <div className="absolute -top-3 right-6 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">
                      ⭐ Most Popular
                    </div>
                  )}
                  <span className={`inline-block self-start text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 mb-4 ${course.popular ? "bg-primary text-primary-foreground" : "bg-gray-light text-foreground"}`}>
                    {course.badge}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{course.duration}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {course.items.map((item, j) => (
                      <li key={j} className="wp-bullet text-sm">
                        <CircleDot className="wp-bullet-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/courses" className={`text-center ${course.popular ? "btn-primary w-full" : "btn-outline w-full"}`}>
                    View Details <ArrowRight className="w-4 h-4 inline ml-1" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="wp-section bg-background relative">
        <SectionPattern variant="testimonials" />
        <div className="wp-container max-w-4xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="wox-subheading">Testimonials</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">What Our Students Say</h2>
            </div>
          </ScrollReveal>
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="border border-border p-5 sm:p-8 md:p-12 text-center min-h-[250px] md:min-h-[300px] flex flex-col items-center justify-center">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm md:text-lg leading-relaxed mb-6 italic max-w-xl">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="w-14 h-14 bg-primary flex items-center justify-center mb-3">
                <span className="font-bold text-primary-foreground text-lg">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </span>
              </div>
              <p className="font-bold text-foreground">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
              <p className="text-xs text-muted-foreground">{testimonials[currentTestimonial].company}</p>
            </div>
            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center hover:bg-red-hover transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center hover:bg-red-hover transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-3 h-3 transition-colors ${i === currentTestimonial ? "bg-primary" : "bg-border"}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Batch Timings Strip */}
      <section className="bg-primary py-4 md:py-5">
        <div className="w-full px-4 md:container md:mx-auto flex flex-col items-center justify-center gap-3 md:gap-4 text-center md:max-w-7xl">
          <p className="text-primary-foreground font-bold flex items-center gap-2 text-xs md:text-sm">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span>Next Batch Starting Soon — Mon–Fri 9 AM | Sat–Sun 6 PM IST</span>
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-5 md:px-6 py-2 md:py-2.5 bg-foreground text-primary-foreground font-bold text-xs tracking-wider hover:bg-dark-bg transition-colors">
            Reserve Your Seat <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
