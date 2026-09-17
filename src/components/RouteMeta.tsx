import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { absoluteUrl, getSeoForPath, SITE_PAGES_SEO } from "@/config/siteSeo";

const RouteMeta = () => {
  const { pathname } = useLocation();
  const seo = getSeoForPath(pathname);
  const canonical = absoluteUrl(pathname);
  const ogImage = absoluteUrl(seo.ogImagePath);
  const isKnownRoute = SITE_PAGES_SEO.some((p) => p.path === pathname);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "IT GxP Solutions & Consulting LLP",
    "url": "https://gxpitsolutions.com",
    "logo": "https://gxpitsolutions.com/og-logo.png",
    "image": "https://gxpitsolutions.com/og-home.jpg",
    "description": "Pharma GxP IT training, Computer System Validation (CSV), QMS, and compliance consulting programs.",
    "telephone": "+91 96766 58686",
    "email": "info@gxpitsolutions.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "India"
    },
    "sameAs": [
      "https://wa.me/919676658686"
    ]
  };

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="keywords" content={seo.metaKeywords} />
      <link rel="canonical" href={canonical} />
      {isKnownRoute ? (
        <meta name="robots" content="index, follow" />
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IT GxP Solutions" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default RouteMeta;
