import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => (
  <div className="bg-foreground text-primary-foreground text-xs py-2 hidden md:block">
    <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
      <div className="flex items-center gap-5">
        <a href="tel:+919676658686" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone className="w-3 h-3" />
          <span>+91 96766 58686</span>
        </a>
        <a href="mailto:info@gxpitsolutions.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Mail className="w-3 h-3" />
          <span>info@gxpitsolutions.com</span>
        </a>
        <span className="flex items-center gap-1.5 text-primary-foreground/60">
          <MapPin className="w-3 h-3" />
          India (Online Training)
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-primary-foreground/60">Mon–Fri: 9–10 AM IST | Sat–Sun: 6–7 PM IST</span>
        <Link to="/contact" className="bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider hover:bg-red-hover transition-colors">
          Apply Now
        </Link>
      </div>
    </div>
  </div>
);

export default TopBar;
