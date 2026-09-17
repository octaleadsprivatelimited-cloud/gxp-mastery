import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

interface HeroBannerProps {
  title: string;
  breadcrumb?: string;
  bgImage?: string;
}

const HeroBanner = ({ title, breadcrumb, bgImage }: HeroBannerProps) => (
  <section
    className="relative overflow-hidden"
    style={{
      backgroundImage: bgImage
        ? `linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.45)), url(${bgImage})`
        : `linear-gradient(135deg, hsl(350,100%,45%) 0%, hsl(350,80%,30%) 100%)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="relative z-10 container mx-auto px-4 py-20 md:py-28 max-w-7xl">
      <ScrollReveal>
        <h1 className="wox-heading-white text-3xl md:text-5xl mb-4">
          {title}
        </h1>
        {breadcrumb && (
          <div className="flex items-center gap-2 text-sm text-primary-foreground/70 pl-5">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-primary-foreground/40">›</span>
            <span className="text-primary-foreground">{breadcrumb}</span>
          </div>
        )}
      </ScrollReveal>
    </div>
  </section>
);

export default HeroBanner;
