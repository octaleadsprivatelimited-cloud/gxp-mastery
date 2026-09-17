import { CheckCircle, ArrowRight, CircleDot } from "lucide-react";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import ScrollReveal from "@/components/ScrollReveal";
import SectionPattern from "@/components/SectionPattern";
import heroImg from "@/assets/hero-lab.jpg";

const basicModules = [
  "QMS System Introduction (GMP, GDP, GCP, GxP)",
  "Backup and Restoration + BCP",
  "Data Integrity & ALCOA Principles",
  "Introduction to CSV",
  "Regulatory Guidelines (21CFR Part 11, EU-Annex 11, GAMP5)",
  "GAMP5 & Validation Documentation",
  "Software Development Life Cycles",
  "Testing of Computerized Systems (VP, RA, IQ, OQ, PQ, VSR — Live)",
  "Periodic Review & System Retirement (Live Project)",
  "Data Migration (Live Execution)",
  "SOP Preparation & Lifecycle",
  "Audit Readiness & Warning Letters",
];

const advancedModules = [
  "Validation of Virtual Machines, Cloud & Windows Servers",
  "JIRA for Task Management & User Stories",
  "Excel Sheet Validation with Formulas",
  "HP ALM Tool — Case Studies & Uploads",
  "QMS Tools: SAP, Trackwise, Veeva, Valgenesis",
  "QC Systems: CDMS, Non-CDMS, Labware LIMS",
  "Manufacturing Applications: PLCs, HMI, SCADA",
  "IT Systems: Digital Applications & Security Profile Configuration",
];

const basicBonuses = ["Resume Preparation", "Naukri Profile Enhancement", "LinkedIn Profile Building", "All Notes & PPTs Provided"];

const veevaModules = [
  "Veeva Vault Fundamentals & Quality Architecture",
  "Business Administrator Level 1 & 2 (Picklists, Crosslinks, Reports)",
  "System Administration Level 1 to 5 (Users, Security, Lifecycles)",
  "Dynamic Access Control (DAC) & Object Relationships",
  "Advanced Lifecycle & Workflow Configuration",
  "Object Workflow Setup & Migration/Deployment Strategies",
  "Real-Time Project Scenarios & Validation Concepts",
  "Veeva Certification & Interview Preparation Support",
];

const veevaBonuses = [
  "Veeva Certification Guidance",
  "Real-Time Project Scenarios",
  "Interview Preparation Support",
  "Course Materials & Recordings Provided",
];

const Courses = () => (
  <main>
    <HeroBanner title="Our Training Programs" breadcrumb="Courses" bgImage={heroImg} />

    <section className="wp-section bg-background relative">
      <SectionPattern variant="courses" />
      <div className="wp-container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic */}
          <ScrollReveal>
            <div className="border border-border p-8 h-full flex flex-col bg-background">
              <span className="inline-block self-start text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 bg-gray-light text-foreground mb-4">
                Foundational Track
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-2">Basic Training</h3>
              <p className="text-sm text-muted-foreground mb-6">60 Days | 1 Hour/Day | Mon–Fri 9:00–10:00 AM IST</p>

              <h4 className="font-bold text-foreground text-xs uppercase tracking-[0.2em] mb-4">Curriculum</h4>
              <ul className="space-y-2.5 mb-6 flex-1">
                {basicModules.map((m, i) => (
                  <li key={i} className="wp-bullet text-sm">
                    <CircleDot className="wp-bullet-icon" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-bold text-foreground text-xs uppercase tracking-[0.2em] mb-4">Bonuses Included</h4>
              <ul className="space-y-2 mb-8">
                {basicBonuses.map((b, i) => (
                  <li key={i} className="wp-bullet text-sm text-muted-foreground">
                    <CheckCircle className="wp-bullet-icon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn-outline w-full text-center">
                Enquire About Basic Track <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Advanced */}
          <ScrollReveal delay={0.15}>
            <div className="border-2 border-primary p-8 h-full flex flex-col bg-background relative">
              <div className="absolute -top-3 right-6 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-[0.2em]">
                ⭐ Most Popular
              </div>
              <span className="inline-block self-start text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 bg-red-light text-primary mb-4">
                Complete Track
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-2">Basic + Advanced Training</h3>
              <p className="text-sm text-muted-foreground mb-6">60 Days | 1 Hour/Day | Sat–Sun 6:00–7:00 PM IST</p>

              <h4 className="font-bold text-foreground text-xs uppercase tracking-[0.2em] mb-4">Everything in Basic, Plus</h4>
              <ul className="space-y-2.5 mb-6 flex-1">
                {advancedModules.map((m, i) => (
                  <li key={i} className="wp-bullet text-sm">
                    <CircleDot className="wp-bullet-icon" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-bold text-foreground text-xs uppercase tracking-[0.2em] mb-4">All Bonuses + Extra</h4>
              <ul className="space-y-2 mb-8">
                {["Everything in Basic Bonuses", "Interview Preparation", "Dedicated Job Assistance"].map((b, i) => (
                  <li key={i} className="wp-bullet text-sm text-muted-foreground">
                    <CheckCircle className="wp-bullet-icon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn-primary w-full text-center">
                Enquire About Advanced Track <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Veeva Vault QMS & Platform */}
          <ScrollReveal delay={0.3}>
            <div className="border border-border p-8 h-full flex flex-col bg-background">
              <span className="inline-block self-start text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 bg-red-light text-primary mb-4">
                Specialized Track
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-2">Veeva Vault Training</h3>
              <p className="text-sm text-muted-foreground mb-6">QMS & Platform | Instructor-Led Live Online Sessions</p>

              <h4 className="font-bold text-foreground text-xs uppercase tracking-[0.2em] mb-4">Curriculum</h4>
              <ul className="space-y-2.5 mb-6 flex-1">
                {veevaModules.map((m, i) => (
                  <li key={i} className="wp-bullet text-sm">
                    <CircleDot className="wp-bullet-icon" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-bold text-foreground text-xs uppercase tracking-[0.2em] mb-4">Bonuses Included</h4>
              <ul className="space-y-2 mb-8">
                {veevaBonuses.map((b, i) => (
                  <li key={i} className="wp-bullet text-sm text-muted-foreground">
                    <CheckCircle className="wp-bullet-icon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn-outline w-full text-center">
                Enquire About Veeva Track <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="text-center text-muted-foreground text-sm mt-10 max-w-xl mx-auto italic">
            Fee structure is customized based on candidate experience and skill set. Contact us to discuss.
          </p>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Courses;
