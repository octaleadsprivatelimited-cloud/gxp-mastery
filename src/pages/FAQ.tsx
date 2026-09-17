import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import ScrollReveal from "@/components/ScrollReveal";
import SectionPattern from "@/components/SectionPattern";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/hero-lab.jpg";

const faqs = [
  { q: "Who is this course designed for?", a: "This course is designed for IT professionals, QA engineers, freshers, and anyone looking to build a career in pharmaceutical Computer System Validation (CSV) and GxP compliance. It's ideal for software testers, IT support engineers, and quality professionals wanting to transition into pharma IT." },
  { q: "Do I need a pharma background to join?", a: "No, a pharmaceutical background is not mandatory. Our course is structured to take you from the basics of pharmaceutical regulations to advanced validation concepts. Many of our successful students came from general IT backgrounds with no prior pharma experience." },
  { q: "What is the difference between Basic and Advanced tracks?", a: "The Basic track (60 days) covers foundational GxP concepts, regulatory guidelines, validation documentation, and live testing. The Advanced track includes everything in Basic plus cloud validation, JIRA, HP ALM, QMS tools (SAP, Trackwise, Valgenesis), LIMS, SCADA, and dedicated job assistance." },
  { q: "Do you offer specialized Veeva Vault QMS and Platform training?", a: "Yes! We offer a specialized, instructor-led Veeva Vault training track that covers Veeva Vault Fundamentals, Platform Business Administration (Levels 1 & 2), System Administration (Levels 1 to 5), and Advanced Security, Workflows, Lifecycles, and Certification guidance." },
  { q: "Are sessions recorded?", a: "While our primary focus is on live interactive sessions, key sessions and demonstrations are recorded for reference. All students receive comprehensive notes, PPTs, and study materials that cover everything discussed in the sessions." },
  { q: "Will I get notes and PPTs?", a: "Yes! All enrolled students receive complete study materials including detailed notes, presentation slides, regulatory document templates, sample validation documents, and reference guides that you can use throughout your career." },
  { q: "What is the fee structure?", a: "Our fee structure is customized based on the candidate's experience level and skill set. We believe in providing value-based pricing. Please contact us for a personalized quote — we offer flexible payment options to make the training accessible." },
  { q: "Is there job placement support?", a: "Yes! Basic track students receive resume preparation, Naukri profile optimization, and LinkedIn enhancement. Advanced track students additionally receive dedicated interview preparation, mock interviews, and active job placement assistance until they secure a role." },
  { q: "What are the batch timings?", a: "We offer two daily batches: Morning Batch — Monday to Friday, 9:00 AM to 10:00 AM IST (Basic Track), and Evening Batch — Saturday to Sunday, 6:00 PM to 7:00 PM IST (Advanced Track). Each session is 1 hour long." },
  { q: "What regulatory guidelines are covered?", a: "We cover all major pharmaceutical regulatory guidelines including 21 CFR Part 11 (FDA - Electronic Records), EU Annex 11 (EMA - Computerised Systems), GAMP5 (ISPE - Risk-Based Approach), WHO guidelines, and ICH guidelines relevant to computerized systems." },
  { q: "What live projects will I work on?", a: "Students work on real-world validation projects including IQ/OQ/PQ execution, Validation Plan and Summary Report preparation, Risk Assessment, Data Migration, Periodic Review, System Retirement, and SOP authoring — all using industry-standard templates." },
  { q: "Is there a certificate on completion?", a: "Yes, upon successful completion of the training program, students receive a course completion certificate from IT GxP Solutions that they can add to their resume and LinkedIn profile." },
  { q: "How do I enroll?", a: "Enrolling is simple! Visit our Contact page and fill out the enrollment form, or reach out to us via email, phone, or WhatsApp. Our team will contact you within 24 hours to discuss the best track for your career goals and finalize your enrollment." },
];

const FAQ = () => (
  <main>
    <HeroBanner title="Frequently Asked Questions" breadcrumb="FAQ" bgImage={heroImg} />

    <section className="wp-section bg-background relative">
      <SectionPattern variant="faq" />
      <div className="wp-container max-w-3xl relative z-10">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border px-6 bg-background">
              <AccordionTrigger className="text-foreground font-bold text-left py-5 hover:no-underline text-sm hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <ScrollReveal>
          <div className="mt-14 bg-foreground p-10 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-3">Still have questions?</h3>
            <p className="text-white/60 mb-6">We're here to help. Reach out to us directly.</p>
            <Link to="/contact" className="btn-primary gap-2 text-sm">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default FAQ;
