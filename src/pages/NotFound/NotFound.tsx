import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f6f8] px-4 text-center">
      
      {/* Big 404 */}
      <h1 className="text-6xl md:text-8xl font-bold text-[#2f3e6e] mb-4">
        404
      </h1>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved.
        Let’s get you back on track.
      </p>

      {/* Actions */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          Go Home
        </button>

        <button
          onClick={() => navigate(-1)}
          className="border border-gray-300 hover:bg-gray-100 px-6 py-2 rounded-md transition"
        >
          Go Back
        </button>
      </div>

    </div>
  );
};

export default NotFound;