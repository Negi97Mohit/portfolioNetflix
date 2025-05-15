
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="text-center max-w-lg">
        <div className="text-netflix text-5xl font-bold mb-2">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Lost your way?</h1>
        <p className="text-gray-400 mb-8">
          Sorry, we can't find the page you're looking for. You'll find lots to explore on the home page.
        </p>
        <Link to="/" className="netflix-button inline-block">
          Back to Home
        </Link>
        <p className="text-gray-600 mt-6">
          Error Code: NSES-404
        </p>
      </div>
    </div>
  );
};

export default NotFound;

