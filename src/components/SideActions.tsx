import { GraduationCap, MessageCircle, Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const SideActions = () => (
  <div className="side-actions hidden md:flex">
    <Link to="/contact" className="side-action-btn bg-primary hover:bg-red-hover" title="Apply Now">
      <GraduationCap className="w-5 h-5 mb-0.5" />
      <span>Apply</span>
    </Link>
    <a href="https://wa.me/919676658686" target="_blank" rel="noopener noreferrer" className="side-action-btn bg-green-600 hover:bg-green-700" title="WhatsApp">
      <MessageCircle className="w-5 h-5 mb-0.5" />
      <span>Chat</span>
    </a>
    <a href="tel:+919676658686" className="side-action-btn bg-blue-600 hover:bg-blue-700" title="Call Us">
      <Phone className="w-5 h-5 mb-0.5" />
      <span>Call</span>
    </a>
    <Link to="/contact" className="side-action-btn bg-amber-600 hover:bg-amber-700" title="Enquire">
      <FileText className="w-5 h-5 mb-0.5" />
      <span>Enquire</span>
    </Link>
  </div>
);

export default SideActions;
