import { Download } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import ScrollReveal from "@/components/ScrollReveal";
import SectionPattern from "@/components/SectionPattern";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/hero-lab.jpg";

const basicModules = [
  { title: "QMS System Introduction", desc: "Comprehensive introduction to Quality Management Systems including GMP, GDP, GCP, and GxP fundamentals. Understand the regulatory landscape." },
  { title: "Backup and Restoration + BCP", desc: "Learn backup strategies, disaster recovery planning, and Business Continuity Planning (BCP) for computerized systems in regulated environments." },
  { title: "Data Integrity & ALCOA Principles", desc: "Deep dive into data integrity concepts, ALCOA+ principles, and FDA expectations for electronic records in pharmaceutical manufacturing." },
  { title: "Introduction to CSV", desc: "Fundamentals of Computer System Validation — purpose, scope, regulatory requirements, and the validation lifecycle." },
  { title: "Regulatory Guidelines", desc: "Detailed study of 21 CFR Part 11 (Electronic Records), EU Annex 11 (Computerised Systems), and their practical application." },
  { title: "GAMP5 & Validation Documentation", desc: "GAMP5 framework, software categories, V-model, and preparation of key validation documents (URS, FS, DS, Traceability Matrix)." },
  { title: "Software Development Life Cycles", desc: "SDLC models relevant to pharmaceutical software — Waterfall, Agile, V-Model — and their mapping to validation activities." },
  { title: "Testing of Computerized Systems (Live)", desc: "Hands-on execution of Validation Plan, Risk Assessment, IQ, OQ, PQ, and Validation Summary Report on live systems." },
  { title: "Periodic Review & System Retirement", desc: "Live project on periodic review processes, change control assessment, and system decommissioning procedures." },
  { title: "Data Migration (Live Execution)", desc: "Plan and execute data migration between systems following regulatory requirements, including verification and validation steps." },
  { title: "SOP Preparation & Lifecycle", desc: "Create, review, and manage Standard Operating Procedures — SOP lifecycle, version control, and training documentation." },
  { title: "Audit Readiness & Warning Letters", desc: "Prepare for regulatory audits, understand common FDA warning letter findings, and learn corrective action strategies." },
];

const advancedModules = [
  { title: "Virtual Machine & Cloud Validation", desc: "Validation approaches for virtual machines, cloud infrastructure (IaaS, PaaS, SaaS), and Windows Server environments." },
  { title: "JIRA for Task Management", desc: "Using JIRA for user story creation, sprint planning, task tracking, and documentation in validation projects." },
  { title: "Excel Sheet Validation", desc: "Validate complex Excel spreadsheets with formulas — risk assessment, testing approaches, and documentation." },
  { title: "HP ALM Tool", desc: "Hands-on with HP Application Lifecycle Management — test case design, execution, defect tracking, and case studies." },
  { title: "QMS Tools (SAP, Trackwise, Veeva, Valgenesis)", desc: "Overview and validation approaches for major QMS platforms used across the pharmaceutical industry." },
  { title: "QC Systems (CDMS, LIMS)", desc: "Validation of Clinical Data Management Systems, Non-CDMS, and Laboratory Information Management Systems (Labware LIMS)." },
  { title: "Manufacturing Applications (PLC, HMI, SCADA)", desc: "Validation of manufacturing automation systems — PLCs, HMI interfaces, and SCADA systems in GMP environments." },
  { title: "IT Systems & Security Configuration", desc: "Digital application validation, security profile configuration, access controls, and audit trail management." },
];

const veevaModules = [
  { title: "Veeva Vault Fundamentals", desc: "Introduction to Veeva Vault Platform, Veeva Vault Quality Features and Architecture, Vault Navigation and User Interface, Document Management Overview, and Quality Process Management Concepts." },
  { title: "Veeva Platform Business Administrator – Level 1", desc: "Creating Crosslinks Between Vaults, User and Group Management, Managing Data Objects and Picklists, Template Configuration and Management, and Business Administration Best Practices." },
  { title: "Veeva Platform Business Administrator – Level 2", desc: "Creating Report Types, Building Custom Reports, Dashboard Configuration, Analytics and Data Visualization, and Reporting Best Practices." },
  { title: "System Administration – Level 1", desc: "User Account Management, Security Settings and Access Control, Authentication and User Permissions, and System Administration Fundamentals." },
  { title: "System Administration – Level 2", desc: "Document Type Administration, Field Configuration and Management, Metadata Management, and Document Lifecycle Fundamentals." },
  { title: "System Administration – Level 3", desc: "Vault Object Configuration, Object Maintenance and Administration, and Object Relationships and Data Management." },
  { title: "System Administration – Level 4", desc: "Lifecycle Troubleshooting, Lifecycle Configuration Maintenance, and Workflow Monitoring and Optimization." },
  { title: "System Administration – Level 5", desc: "Dynamic Access Control (DAC), Security Troubleshooting, Permission Management, and Access Control Best Practices." },
  { title: "Advanced Concepts – Level 1", desc: "Lifecycle Design and Configuration, Workflow Design, Dynamic Access Control Concepts, and Advanced Security Models." },
  { title: "Advanced Concepts – Level 2", desc: "Document Lifecycle Configuration, Dynamic Access Control for Documents, Review and Approval Workflow Setup, and Document Governance Strategies." },
  { title: "Advanced Concepts – Level 3", desc: "Vault Object Configuration, Object Lifecycle Management, Object Security Configuration, and Advanced Object Administration." },
  { title: "Advanced Concepts – Level 4", desc: "Object Workflow Configuration, Data Migration Strategies, Migration Tools and Best Practices, and Deployment and Validation Concepts." },
];

const timeline = [
  { week: "Week 1–2", label: "Foundations & QMS" },
  { week: "Week 3–4", label: "Regulatory Framework" },
  { week: "Week 5–6", label: "Validation Docs" },
  { week: "Week 7–8", label: "Live Testing" },
  { week: "Week 9–10", label: "Advanced Systems" },
  { week: "Week 11–12", label: "Interview Prep" },
];

const Curriculum = () => (
  <main>
    <HeroBanner title="Full Course Curriculum" breadcrumb="Curriculum" bgImage={heroImg} />

    <section className="wp-section bg-background relative">
      <SectionPattern variant="courses" />
      <div className="wp-container max-w-4xl relative z-10">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-8 h-12 bg-gray-light rounded-none">
            <TabsTrigger value="basic" className="font-bold text-xs sm:text-sm tracking-wide rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Basic Track</TabsTrigger>
            <TabsTrigger value="advanced" className="font-bold text-xs sm:text-sm tracking-wide rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Advanced Track</TabsTrigger>
            <TabsTrigger value="veeva" className="font-bold text-xs sm:text-sm tracking-wide rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Veeva Vault Track</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Accordion type="single" collapsible className="space-y-3">
              {basicModules.map((m, i) => (
                <AccordionItem key={i} value={`basic-${i}`} className="border border-border px-5 bg-background">
                  <AccordionTrigger className="text-foreground font-bold text-left hover:no-underline py-4">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm">{m.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-11 pb-4 text-sm leading-relaxed">{m.desc}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="advanced">
            <p className="text-muted-foreground text-sm mb-6 italic">Includes all Basic Track modules, plus the following advanced modules:</p>
            <Accordion type="single" collapsible className="space-y-3">
              {advancedModules.map((m, i) => (
                <AccordionItem key={i} value={`adv-${i}`} className="border border-border px-5 bg-background">
                  <AccordionTrigger className="text-foreground font-bold text-left hover:no-underline py-4">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm">{m.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-11 pb-4 text-sm leading-relaxed">{m.desc}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="veeva">
            <p className="text-muted-foreground text-sm mb-6 italic">Specialized Veeva Vault Quality Management (QMS) & Platform training modules:</p>
            <Accordion type="single" collapsible className="space-y-3">
              {veevaModules.map((m, i) => (
                <AccordionItem key={i} value={`veeva-${i}`} className="border border-border px-5 bg-background">
                  <AccordionTrigger className="text-foreground font-bold text-left hover:no-underline py-4">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm">{m.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-11 pb-4 text-sm leading-relaxed">{m.desc}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>

        <ScrollReveal>
          <div className="text-center mt-12">
            <button className="btn-primary gap-2 text-sm">
              <Download className="w-5 h-5" /> Download Full Curriculum PDF
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Timeline */}
    <section className="wp-section bg-gray-light relative">
      <SectionPattern variant="timeline" />
      <div className="wp-container max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="wox-subheading">Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your 60-Day Learning Journey</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {timeline.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-primary text-primary-foreground flex items-center justify-center font-bold text-base">
                  {i + 1}
                </div>
                <p className="font-bold text-foreground text-sm">{t.week}</p>
                <p className="text-muted-foreground text-xs mt-1">{t.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Curriculum;
