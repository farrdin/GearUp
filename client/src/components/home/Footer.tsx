import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] border-t mt-12">
      <div className="w-[80%] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo & Branding */}
        <div className="flex flex-col gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="GearUp Logo" className="h-10" />
            <span className="text-2xl text-[#525252] font-bold tracking-tight">
              <span className="text-secondary">G</span>ear
              <span className="text-secondary">U</span>p
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm">
            Discover your perfect ride. Explore top-quality bicycles,
            accessories, and more with GearUp.
          </p>
        </div>

        {/* Social Media (Moved to the Right) */}
        <div className="flex flex-col gap-3 items-end">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-sm text-muted-foreground bg-[#f9f9f9]">
        © {new Date().getFullYear()} GearUp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
