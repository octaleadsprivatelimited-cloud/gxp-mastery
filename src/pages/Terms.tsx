import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import ScrollReveal from "@/components/ScrollReveal";
import SectionPattern from "@/components/SectionPattern";
import heroImg from "@/assets/hero-lab.jpg";

const sections = [
  {
    title: "Agreement to terms",
    body: `By accessing or using the website and services of GxP IT Solutions & Consulting LLP ("IT GxP Solutions", "we", "us"), you agree to be bound by these Terms of Use. If you do not agree, please do not use our website or services.`,
  },
  {
    title: "Services",
    body: `We provide pharmaceutical GxP IT training, consulting, and related IT services as described on this website. Course content, schedules, fees, and deliverables may be updated; specific terms for enrollment are confirmed at the time you register or contract with us.`,
  },
  {
    title: "Use of the website",
    body: `You agree to use the website only for lawful purposes. You must not misuse the site, attempt unauthorized access, interfere with security, scrape content without permission, or use the site in any way that could harm us or other users.`,
  },
  {
    title: "Intellectual property",
    body: `All content on this website—including text, graphics, logos, images, and training materials made available through our programs—is owned by us or our licensors and is protected by applicable intellectual property laws. You may not copy, distribute, or create derivative works without our prior written consent, except for personal, non-commercial use as expressly permitted.`,
  },
  {
    title: "User content",
    body: `If you submit information through forms or other channels, you represent that you have the right to provide it and that it is accurate. You grant us permission to use such information to respond to you and deliver our services, in line with our Privacy Policy.`,
  },
  {
    title: "Fees, enrollment, and refunds",
    body: `Training fees, payment schedules, and any refund or cancellation policies are communicated at enrollment. Unless otherwise agreed in writing, failure to pay fees may result in suspension of access to training or services.`,
  },
  {
    title: "Disclaimer",
    body: `The website and its content are provided "as is" without warranties of any kind, to the fullest extent permitted by law. We do not guarantee uninterrupted or error-free operation of the site. Training outcomes and career results depend on individual effort and market conditions; we do not guarantee employment.`,
  },
  {
    title: "Limitation of liability",
    body: `To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of the website or services. Our total liability for any claim relating to the website shall not exceed the amount you paid us for the specific service giving rise to the claim in the twelve months preceding the claim, or if none, one hundred (100) Indian Rupees.`,
  },
  {
    title: "Indemnity",
    body: `You agree to indemnify and hold harmless GxP IT Solutions & Consulting LLP and its representatives from claims, damages, or expenses arising from your violation of these terms or misuse of the website or services.`,
  },
  {
    title: "Governing law",
    body: `These Terms shall be governed by the laws of India, without regard to conflict-of-law principles. Courts located in India shall have exclusive jurisdiction over disputes arising from these terms or your use of the site, subject to applicable mandatory consumer protections.`,
  },
  {
    title: "Changes",
    body: `We may modify these Terms at any time by posting the updated version on this page. Your continued use after changes constitutes acceptance of the revised Terms.`,
  },
  {
    title: "Contact",
    body: `For questions about these Terms, contact us at info@gxpitsolutions.com or +91 96766 58686.`,
  },
];

const Terms = () => (
  <main>
    <HeroBanner title="Terms of Use" breadcrumb="Terms" bgImage={heroImg} />

    <section className="wp-section bg-background relative">
      <SectionPattern variant="mission" />
      <div className="wp-container max-w-3xl relative z-10">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: April 4, 2026
          </p>
        </ScrollReveal>
        <div className="space-y-10">
          {sections.map((s) => (
            <ScrollReveal key={s.title}>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-heading">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{s.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-12 text-sm text-muted-foreground">
            See also our{" "}
            <Link to="/privacy-policy" className="text-primary font-semibold hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Terms;
