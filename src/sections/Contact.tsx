import type React from "react";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-verde mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message and I'll
            get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <FaEnvelope className="text-verde mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:tatamilesimusica@gmail.com"
                    className="text-gray-600 hover:text-indigo-600 transition duration-300"
                  >
                    tatamilesimusica@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-verde mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">Ingolstadt, Deutschland</p>
                </div>
              </div>

              {/* <div className="flex items-start">
        <span className="text-indigo-600 mr-4 mt-1">📞</span>
        <div>
          <h4 className="font-semibold">Management & Booking</h4>
          <p className="text-gray-600">+34 123 456 789</p>
        </div>
      </div> */}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <a
                  href="https://instagram.com/tatamilesi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-indigo-600 hover:text-white transition duration-300 flex items-center"
                >
                  <AiFillInstagram className="text-verdeoscuro size-6" />
                </a>
                <span className="ml-2">@tatamilesi</span>
              </div>

              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/tatamilesimusica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-indigo-600 hover:text-white transition duration-300 flex items-center"
                >
                  <FaFacebookSquare className="text-verdeoscuro size-6" />
                </a>
                <span className="ml-2">@tatamilesimusica</span>
              </div>

              <div className="flex items-center">
                <a
                  href="https://www.youtube.com/@tatamilesi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-indigo-600 hover:text-white transition duration-300 flex items-center"
                >
                  <FaYoutube className="text-verdeoscuro size-6" />
                </a>
                <span className="ml-2">@tatamilesi</span>
              </div>
            </div>
          </div>

          {/* <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="press">Press & Media</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="mr-2">📤</span>
                    Send Message
                  </>
                )}
              </button>

              {submitStatus && (
                <div
                  className={`mt-4 p-3 rounded-md ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
