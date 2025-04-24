import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-blue-50 text-center px-6">
      <div className="max-w-md space-y-6">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Oops! Page not found
        </h2>
        <p className="text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link to="/">
          <Button className="px-6 py-3 text-base rounded-xl shadow-md">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
