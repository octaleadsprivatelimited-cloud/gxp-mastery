import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import ScrollReveal from "@/components/ScrollReveal";
import SectionPattern from "@/components/SectionPattern";
import heroImg from "@/assets/hero-lab.jpg";

const sections = [
  {
    title: "Introduction",
    body: `GxP IT Solutions & Consulting LLP ("we", "us", or "our") operates this website and related training and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. By using our site, you agree to the practices described here.`,
  },
  {
    title: "Information we collect",
    body: `We may collect information you provide directly, such as your name, email address, phone number, course interests, and messages submitted through contact or enrollment forms. We may also collect technical data automatically, including IP address, browser type, device information, and pages visited, to improve site performance and security.`,
  },
  {
    title: "How we use your information",
    body: `We use the information we collect to respond to enquiries, process enrollment requests, deliver training and related services, send administrative communications, improve our website and offerings, comply with legal obligations, and protect our rights and the security of our users.`,
  },
  {
    title: "Cookies and similar technologies",
    body: `Our website may use cookies or similar technologies to remember preferences, analyze traffic, and enhance your experience. You can control cookies through your browser settings; disabling cookies may limit certain features of the site.`,
  },
  {
    title: "Sharing and disclosure",
    body: `We do not sell your personal information. We may share data with trusted service providers who assist us in operating the website, hosting, analytics, or form processing (for example, form submission providers), subject to appropriate safeguards. We may also disclose information if required by law or to protect the safety and rights of our organization and users.`,
  },
  {
    title: "Data retention and security",
    body: `We retain personal information only as long as necessary for the purposes described in this policy or as required by law. We implement reasonable technical and organizational measures to protect your data; however, no method of transmission over the internet is completely secure.`,
  },
  {
    title: "Your choices",
    body: `You may request access to, correction of, or deletion of your personal information where applicable, or object to certain processing, by contacting us using the details below. You may unsubscribe from marketing communications at any time using the instructions in those messages.`,
  },
  {
    title: "Third-party links",
    body: `Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies before providing any information.`,
  },
  {
    title: "Changes to this policy",
    body: `We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated "Last updated" date. Continued use of the site after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact us",
    body: `For questions about this Privacy Policy or your personal data, contact us at info@gxpitsolutions.com or +91 96766 58686.`,
  },
];

const PrivacyPolicy = () => (
  <main>
    <HeroBanner title="Privacy Policy" breadcrumb="Privacy Policy" bgImage={heroImg} />

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
            <Link to="/terms" className="text-primary font-semibold hover:underline">
              Terms of Use
            </Link>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default PrivacyPolicy;
