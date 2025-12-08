import React from "react";
import { useNavigate } from "react-router-dom";
import services from "../assets/service.png";
import locator from "../assets/locator.svg";
import booking2 from "../assets/booking2.svg";
import payment2 from "../assets/payment2.svg";
import notifications2 from "../assets/notifications2.svg";
import availability from "../assets/availability.svg";
import reviews from "../assets/reviews.svg";
import plocator from "../assets/plocator.svg";
import pbooking from "../assets/pbooking.svg";
import ppayment from "../assets/ppayment.svg";
import pnotifications from "../assets/pnotification.svg";
import pcharging from "../assets/pcharging.svg";
import pbusiness from "../assets/pbusiness.svg";

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-[#13612E] text-xl mb-2 tracking-wide">
                What We Do
              </h2>
              <h1 className="text-4xl font-medium text-[#2c2c2c] mb-6">
                Sustainable Charging Solutions for Every Need
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Whether you're an everyday driver or managing an entire fleet,
                EVant makes charging simple, smart, and accessible.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="bg-[#3A7750] text-white px-8 py-3 rounded-md hover:bg-green-700 transition font-semibold"
              >
                Get Started
              </button>
            </div>
            <div>
              <img
                src={services}
                alt="Outdoor EV charging station with solar panels"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-green-600 text-sm font-semibold mb-2 uppercase tracking-wide">
              What we Offer
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800">
              Core Features
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={locator}
                  alt="Station Locator icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Station Locator
              </h4>
              <p className="text-gray-600 text-center">
                Instantly find the nearest EV charging stations, complete with
                real-time availability and distance tracking.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={booking2}
                  alt="Smart Booking System icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Smart Booking System
              </h4>
              <p className="text-gray-600 text-center">
                Reserve a charging slot ahead of time and skip the wait. Your
                spot is always ready when you arrive.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={payment2}
                  alt="Seamless Payment icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Seamless Payment
              </h4>
              <p className="text-gray-600 text-center">
                Enjoy quick, secure, and cashless payments using cards, bank
                transfers, or digital wallets.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={notifications2}
                  alt="Smart Notifications icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Smart Notifications
              </h4>
              <p className="text-gray-600 text-center">
                Get real-time alerts about your charging progress, slot
                availability, and account updates.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={availability}
                  alt="Real-time Availability icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Real-time Availability
              </h4>
              <p className="text-gray-600 text-center">
                Live updates showing which chargers are free or occupied every
                30 seconds.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={reviews}
                  alt="User Reviews & Ratings icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                User Reviews & Ratings
              </h4>
              <p className="text-gray-600 text-center">
                Rate and review charging stations to help the community make
                informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Premium Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={plocator}
                  alt="Station Locator icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Station Locator
              </h4>
              <p className="text-gray-600 text-center">
                Instantly find the nearest EV charging stations, complete with
                real-time availability and distance tracking.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={pbooking}
                  alt="Smart Booking System icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Smart Booking System
              </h4>
              <p className="text-gray-600 text-center">
                Reserve a charging slot ahead of time and skip the wait. Your
                spot is always ready when you arrive.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={ppayment}
                  alt="Seamless Payment icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Seamless Payment
              </h4>
              <p className="text-gray-600 text-center">
                Enjoy quick, secure, and cashless payments using cards, bank
                transfers, or digital wallets.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={pnotifications}
                  alt="Smart Notifications icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Smart Notifications
              </h4>
              <p className="text-gray-600 text-center">
                Get real-time alerts about your charging progress, slot
                availability, and account updates.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={pcharging}
                  alt="Remote start/stop charging icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Remote start/stop charging
              </h4>
              <p className="text-gray-600 text-center">
                Control your charging sessions directly from the app with
                convenience and flexibility.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-10 h-10 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={pbusiness}
                  alt="Business API Integration icon"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Business API Integration
              </h4>
              <p className="text-gray-600 text-center">
                Connect EVANT's ecosystem with your business systems. Manage
                fleets, monitor performance, and automate reporting through
                powerful APIs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
