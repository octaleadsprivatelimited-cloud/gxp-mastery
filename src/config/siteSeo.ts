/** Canonical site origin for meta tags, sitemap, and absolute URLs. */
export const SITE_ORIGIN = "https://gxpitsolutions.com";

export type SitePageSeo = {
  path: string;
  label: string;
  title: string;
  metaDescription: string;
  metaKeywords: string;
  /** Path under SITE_ORIGIN, e.g. /og-home.jpg */
  ogImagePath: string;
};

const notFoundSeo: SitePageSeo = {
  path: "__404__",
  label: "Page not found",
  title: "Page Not Found | IT GxP Solutions",
  metaDescription:
    "The page you requested could not be found. Return to IT GxP Solutions for pharma GxP IT training, CSV courses, and consulting.",
  metaKeywords: "IT GxP Solutions, 404, GxP training, CSV training India",
  ogImagePath: "/og-logo.png",
};

export const SITE_PAGES_SEO: SitePageSeo[] = [
  {
    path: "/",
    label: "Home",
    title: "IT GxP Solutions — Computer System Validation & GxP Compliance Training",
    metaDescription:
      "Pharma GxP IT training and CSV programs with live projects, 21 CFR Part 11 & GAMP5 coverage, and placement support. Online batches across India.",
    metaKeywords:
      "GxP training, CSV training, computer system validation, pharmaceutical IT, 21 CFR Part 11, GAMP5, pharma compliance training India, IT GxP Solutions, online GxP course",
    ogImagePath: "/og-home.jpg",
  },
  {
    path: "/about",
    label: "About Us",
    title: "About Us | IT GxP Solutions & Consulting LLP",
    metaDescription:
      "Learn about GxP IT Solutions & Consulting LLP: CSV, automation, IT infrastructure, and compliance services for regulated industries.",
    metaKeywords:
      "GxP IT Solutions, about CSV consultancy, pharma validation company India, IT compliance consulting, GxP consulting LLP",
    ogImagePath: "/og-about.jpg",
  },
  {
    path: "/courses",
    label: "Courses",
    title: "Training Courses | Basic & Advanced GxP IT Programs",
    metaDescription:
      "Compare Basic and Advanced pharma GxP IT training: CSV fundamentals, QMS, live projects, JIRA, HP ALM, cloud validation, and job assistance.",
    metaKeywords:
      "GxP courses, CSV course India, pharma IT training program, basic advanced GxP training, QMS training course, validation engineer course",
    ogImagePath: "/og-default.jpg",
  },
  {
    path: "/curriculum",
    label: "Curriculum",
    title: "Curriculum | GxP IT & CSV Training Syllabus",
    metaDescription:
      "Full training curriculum: data integrity, IQ OQ PQ, risk assessment, Part 11, Annex 11, GAMP5 categories, and hands-on validation documentation.",
    metaKeywords:
      "CSV curriculum, GxP syllabus, validation training modules, GAMP5 training content, 21 CFR Part 11 course outline, pharma IT curriculum",
    ogImagePath: "/og-default.jpg",
  },
  {
    path: "/testimonials",
    label: "Testimonials",
    title: "Student Testimonials | IT GxP Solutions",
    metaDescription:
      "Read testimonials from pharma professionals who completed our GxP IT and CSV training at companies across India.",
    metaKeywords:
      "GxP training reviews, CSV course testimonials, pharma IT training feedback, IT GxP Solutions students",
    ogImagePath: "/og-default.jpg",
  },
  {
    path: "/faq",
    label: "FAQ",
    title: "FAQ | GxP IT & CSV Training Questions",
    metaDescription:
      "Frequently asked questions about GxP IT training: who should join, Basic vs Advanced, batches, fees, placement, certificates, and how to enroll.",
    metaKeywords:
      "GxP training FAQ, CSV course questions, pharma IT training India FAQ, enrollment GxP course, batch timings CSV",
    ogImagePath: "/og-default.jpg",
  },
  {
    path: "/contact",
    label: "Contact Us",
    title: "Contact & Enroll | IT GxP Solutions",
    metaDescription:
      "Contact IT GxP Solutions for training enrollment or IT/CSV services. Reach us by phone, email, or the enquiry form — we respond within 24 hours.",
    metaKeywords:
      "contact GxP training, enroll CSV course India, IT GxP Solutions phone, pharma training enquiry, GxP consulting contact",
    ogImagePath: "/og-default.jpg",
  },
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
    title: "Privacy Policy | IT GxP Solutions",
    metaDescription:
      "Privacy Policy for IT GxP Solutions: data collection, cookies, retention, your rights, and how to contact us about personal data.",
    metaKeywords:
      "IT GxP Solutions privacy policy, data protection training website, GxP site privacy",
    ogImagePath: "/og-logo.png",
  },
  {
    path: "/terms",
    label: "Terms of Use",
    title: "Terms of Use | IT GxP Solutions",
    metaDescription:
      "Terms of Use for IT GxP Solutions: acceptable use, intellectual property, fees, liability, governing law, and contact information.",
    metaKeywords:
      "IT GxP Solutions terms, website terms of use, GxP training terms India",
    ogImagePath: "/og-logo.png",
  },
];

export function getSeoForPath(pathname: string): SitePageSeo {
  const hit = SITE_PAGES_SEO.find((p) => p.path === pathname);
  return hit ?? { ...notFoundSeo, path: pathname };
}

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p}`;
}
