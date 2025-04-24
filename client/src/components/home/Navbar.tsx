import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, LogOut, LayoutDashboard } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bicycles", href: "/bicycle" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with real auth state

  return (
    <header className="w-full sticky top-0 z-50 border-b bg-[#f9f9f9] shadow-md backdrop-blur-md">
      <div className="w-[80%] mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="GearUp Logo" className="h-9" />
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-secondary">G</span>ear
            <span className="text-secondary">U</span>p
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-base font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {!isLoggedIn ? (
            <Link to="/login">
              <Button variant="default">Login</Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9 cursor-pointer ring-2 ring-secondary">
                  <AvatarImage src="/profile.jpg" alt="Profile" />
                  <AvatarFallback>GU</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44 mt-2">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="flex items-center gap-2"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-muted-foreground" />
            </SheetTrigger>
            <SheetContent side="left" className="p-6">
              <div className="flex flex-col gap-5 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-lg font-medium ${
                      location.pathname === link.href
                        ? "text-secondary"
                        : "text-muted-foreground hover:text-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {!isLoggedIn ? (
                  <Link to="/login">
                    <Button variant="default" className="w-full mt-4">
                      Login
                    </Button>
                  </Link>
                ) : (
                  <div className="mt-4 space-y-2">
                    <Link to="/dashboard">
                      <Button variant="default" className="w-full">
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
