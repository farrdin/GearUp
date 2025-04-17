import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/all-product" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Dashbaord", href: "/dashboard" },
];

const Navbar = () => {
  return (
    <header className="w-full shadow-sm bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Medi-Sphere
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-gray-700" />
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-lg text-gray-700 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/login">
                  <Button variant="outline" className="mt-4 w-fit">
                    Login
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
