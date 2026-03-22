import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6f8] px-4">
      
      <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 text-center max-w-md w-full">
        
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-green-600 text-2xl">✓</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-[#2f3e6e] mb-3">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your request has been submitted successfully.  
          Our team will get in touch with you shortly.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          Go to Home
        </button>

      </div>

    </div>
  );
};

export default ThankYou;