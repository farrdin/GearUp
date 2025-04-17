import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 border-t">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-blue-600">Medi-Sphere</h2>
          <p className="text-sm text-gray-600 mt-2">
            Your trusted online pharmacy for fast, safe, and reliable medicine
            delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-2">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/medicines">All Medicines</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-2">Contact</h3>
          <p className="text-sm text-gray-600">Email: support@medisphere.com</p>
          <p className="text-sm text-gray-600">Phone: +880 1234-567890</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t mt-4">
        © {new Date().getFullYear()} Medi-Sphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
