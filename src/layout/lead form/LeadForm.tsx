import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LeadForm = () => {
const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    solution: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
  e.preventDefault();
  setLoading(true);

  try {
    const payload = {
      ...form,
      source: window.location.pathname, // 🔥 tracking
    };

    await fetch("https://script.google.com/macros/s/AKfycbyzr4kGhVWcNNiRSquxGLPzmj9jLkOHEhCriHnWcoVYejeCv5Ojiiy80YxBTiv1djx6/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload),
    });

    navigate("/thank-you");

  } catch (error) {
    console.error(error);
    alert("Submission failed");
  }

  setLoading(false);
};

  return (
    <section id="lead-form" className="bg-[#f5f6f8] py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2f3e6e] mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            We would love to speak with you.
            <br />
            Feel free to reach out using the below details.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-xl shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            
            <input
              type="text"
              name="firstName"
              placeholder="Your Name*"
              value={form.firstName}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={form.lastName}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={form.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Select */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#2f3e6e] mb-2">
              Choose Solution
            </label>

            <select
              name="solution"
              value={form.solution}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Software</option>
              <option>Arden’s ImpactCAD</option>
              <option>ERP</option>
              <option>RIP</option>
              <option>Top CNC</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit */}
           <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;