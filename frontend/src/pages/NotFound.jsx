import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] font-['Poppins','Inter',ui-sans-serif,system-ui] px-4">
      <div className="text-center animate-fade-in-up">
        {/* Big 404 Text */}
        <h1 className="text-[6rem] md:text-[8rem] font-bold text-[#F97316] leading-none">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#111827] mt-4">
          Oops! Page not found
        </h2>
        <p className="text-[#6B7280] max-w-md mx-auto mt-2 mb-6">
          The page you’re looking for doesn’t exist or has been moved. Let’s get
          you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#f97316cc] hover:to-[#10b981cc] text-white flex items-center gap-2 px-6 py-3 text-lg"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Button>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white flex items-center gap-2 px-6 py-3 text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
