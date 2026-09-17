import { Shield, BookOpen, FileText, Users, ClipboardCheck, Server, Database, Monitor, Cloud, Award, Target, Eye, CircleDot, Laptop, Settings, CheckCircle } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import ScrollReveal from "@/components/ScrollReveal";
import SectionPattern from "@/components/SectionPattern";
import aboutImg from "@/assets/about-training.jpg";
import heroImg from "@/assets/hero-lab.jpg";

const gxpServices = [
  { icon: ClipboardCheck, label: "Computer System Validation (CSV)" },
  { icon: FileText, label: "GxP Compliance & Documentation" },
  { icon: Shield, label: "21 CFR Part 11 Compliance" },
  { icon: CheckCircle, label: "Audit Readiness & Quality Systems" },
  { icon: Monitor, label: "HMI/PLC Validation Support" },
];

const itServices = [
  { icon: Laptop, label: "Laptop & IT Hardware Sales and Service" },
  { icon: Cloud, label: "Microsoft 365 Setup & Administration" },
  { icon: Database, label: "Data Center Setup & Infrastructure Support" },
  { icon: Server, label: "System & Network Administration" },
  { icon: Settings, label: "IT Support for Small and Medium Businesses" },
];

const whyChooseUs = [
  "Practical, real-time approach",
  "Dual expertise: IT + GxP compliance",
  "Affordable and scalable solutions",
  "Client-focused service delivery",
];

const About = () => (
  <main>
    <HeroBanner title="About GxP IT Solutions & Consulting LLP" breadcrumb="About Us" bgImage={heroImg} />

    {/* About Intro */}
    <section className="wp-section bg-background relative">
      <SectionPattern variant="mission" />
      <div className="wp-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <ScrollReveal>
            <p className="wox-subheading">Who We Are</p>
            <h2 className="wox-heading mb-4 md:mb-6 text-xl md:text-2xl lg:text-4xl">IT & Compliance Consultancy</h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-3 md:mb-4">
              GxP IT Solutions & Consulting LLP is a growing IT and compliance consultancy delivering end-to-end solutions in Computer System Validation (CSV), Automation, and IT Infrastructure services for regulated and non-regulated industries.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              We specialize in providing practical, real-time solutions that bridge the gap between technology and compliance, helping organizations achieve operational efficiency and regulatory readiness.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="overflow-hidden">
              <img src={aboutImg} alt="GxP Training Session" className="w-full h-auto" loading="lazy" width={800} height={600} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Core Services */}
    <section className="wp-section bg-gray-light relative">
      <SectionPattern variant="services" />
      <div className="wp-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <p className="wox-subheading">What We Do</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Our Core Services</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* GxP Services */}
          <ScrollReveal>
            <div className="bg-background border border-border p-5 md:p-8 h-full">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                GxP & Validation Services
              </h3>
              <ul className="space-y-3">
                {gxpServices.map((s, i) => (
                  <li key={i} className="wp-bullet text-sm">
                    <s.icon className="wp-bullet-icon" />
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          {/* IT Services */}
          <ScrollReveal delay={0.1}>
            <div className="bg-background border border-border p-5 md:p-8 h-full">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-2">
                <Server className="w-5 h-5 text-primary flex-shrink-0" />
                IT Solutions & Services
              </h3>
              <ul className="space-y-3">
                {itServices.map((s, i) => (
                  <li key={i} className="wp-bullet text-sm">
                    <s.icon className="wp-bullet-icon" />
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Training */}
    <section className="wp-section bg-background relative">
      <SectionPattern variant="training" />
      <div className="wp-container text-center max-w-4xl relative z-10">
        <ScrollReveal>
          <p className="wox-subheading">Training Programs</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">Industry-Ready Training</h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">
            We provide hands-on, real-time training in CSV and validation, designed to make professionals industry-ready with practical exposure to real projects.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="wp-section bg-gray-light relative">
      <SectionPattern variant="expertise" />
      <div className="wp-container relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-background border border-border p-5 md:p-8 text-center h-full">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                To deliver reliable IT and compliance solutions while empowering professionals with practical knowledge and industry-relevant skills.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-background border border-border p-5 md:p-8 text-center h-full">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                To become a trusted name in both IT services and GxP consulting, delivering quality, innovation, and value to our clients.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="wp-section bg-background relative">
      <SectionPattern variant="methodology" />
      <div className="wp-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <p className="wox-subheading">Our Advantage</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Why Choose Us</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center bg-gray-light border border-border p-5 md:p-6 h-full">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
