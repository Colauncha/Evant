import React from "react";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import contact from "../assets/contact.svg";
import operation from "../assets/operation.svg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Let's Power the Future Together
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Have a question, partnership idea, or feedback? We'd love to hear
              from you. Reach out and our team will respond faster than a full
              charge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Get in Touch with Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1">
                    <img
                      src={location}
                      alt="Location icon"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1">
                    <img
                      src={contact}
                      alt="Contact icon"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Contact</h3>
                    <p className="text-gray-600">+234 (0) 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1">
                    <img
                      src={email}
                      alt="Email icon"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@evant.ng</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1">
                    <img
                      src={operation}
                      alt="Hours icon"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Hours of operation
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50 resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3A7750] text-white px-6 py-3 rounded-md hover:bg-green-700 transition font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
