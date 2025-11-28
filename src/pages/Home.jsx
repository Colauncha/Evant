import React from 'react'
import backgroundImg from "../assets/ab.jpg";
import booking from "../assets/booking.svg";
import location from "../assets/location.svg";
import payment from "../assets/payment.svg";
import notifications from "../assets/notifications.svg";
import ratings from "../assets/ratings.svg";
import time from "../assets/time.svg";
import owners from "../assets/owners.svg";
import drivers from "../assets/drivers.svg";
import managers from "../assets/managers.svg";
import seamless from "../assets/seamless.jpg";
import phone from "../assets/phone.jpg";

const Home = () => {

  const timeSlots = [
    { time: "8:00 AM – 9:00 AM", available: false },
    { time: "12:30 AM – 1:30 AM", available: false },
    { time: "9:30 AM – 10:30 AM", available: true },
    { time: "2:00 AM – 3:00 AM", available: true },
    { time: "11:00 AM – 12:00 AM", available: false },
    { time: "3:30 AM – 4:30 AM", available: false },
  ];


  return (
    <div >

      {/* Hero section */}
      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden m-0 p-0">


        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-20 lg:px-24">
          <div className="backdrop-blur-base bg-white/10 border border-white/20 shadow-xl rounded-lg p-8 md:p-12 text-white max-w-4xl">

            <h1 className="text-4xl md:text-5xl font-semibold leading-snug tracking-wide">
              Experience Effortless Charging,
              <br /> Anytime, Anywhere
            </h1>

            <p className="text-xl md:text-2xl leading-[200%] text-gray-200 mt-6">
              Stay powered on every journey. Access real-time station data,
              schedule charges for personal or fleet vehicles, and enjoy a truly
              connected EV charging experience all from one smart platform.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-[#3A7750] hover:bg-[#2f6644] text-white px-10 py-4 rounded-md text-xl font-semibold transition-all">
                Get Started
              </button>

              <button className="bg-white hover:bg-gray-100 text-[#3A7750] px-10 py-4 rounded-md text-xl font-semibold transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Our Services section */}
      <section id="services" className="py-16 px-4">
        <div className="w-full max-w-[1400px] mx-auto">
          <h2 className="text-5xl font-bold text-[#13612E] text-center mb-4">
            Our Services
          </h2>

          <p className="text-[#6B6A6A] text-2xl text-center max-w-4xl mx-auto mb-12">
            Comprehensive EV charging solutions designed to make electric
            vehicle ownership simple, convenient, and accessible for everyone in
            Nigeria.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

            {/* Card */}
            <div className="bg-white p-10 rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_rgba(0,0,0,0.35)] transition-all cursor-pointer">
              <img src={location} className="w-14 h-14 mb-6" />
              <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-6">
                Station Locator
              </h3>
              <p className="text-[#6B6A6A] leading-[185%] text-lg">
                Find nearby stations with GPS map, real-time tracking, distance info,
                and quick navigation. View station details and photos instantly.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-10 rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_rgba(0,0,0,0.35)] transition-all cursor-pointer">
              <img src={time} className="w-14 h-14 mb-6" />
              <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-6">
                Real-time Availability
              </h3>
              <p className="text-[#6B6A6A] leading-[185%] text-lg">
                Get live charger status every 30 seconds with occupancy tracking,
                wait time estimates, and queue management for a smoother charging
                experience.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-10 rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_rgba(0,0,0,0.35)] transition-all cursor-pointer">
              <img src={booking} className="w-14 h-14 mb-6" />
              <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-6">
                Smart Booking System
              </h3>
              <p className="text-[#6B6A6A] leading-[185%] text-lg">
                Reserve charging slots in advance with flexible scheduling, instant
                confirmation, and QR code access for quick check-in.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-10 rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_rgba(0,0,0,0.35)] transition-all cursor-pointer">
              <img src={payment} className="w-14 h-14 mb-6" />
              <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-6">
                Seamless Payment
              </h3>
              <p className="text-[#6B6A6A] leading-[185%] text-lg">
                Pay securely with cards, bank transfer, USSD, or mobile wallets. Get
                instant confirmations and track your payment history easily.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-10 rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_rgba(0,0,0,0.35)] transition-all cursor-pointer">
              <img src={ratings} className="w-14 h-14 mb-6" />
              <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-6">
                User Reviews & Ratings
              </h3>
              <p className="text-[#6B6A6A] leading-[185%] text-lg">
                Make smarter charging choices with community ratings, reviews, and
                photos. Rely on real user feedback to find the best stations faster.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-10 rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_rgba(0,0,0,0.35)] transition-all cursor-pointer">
              <img src={notifications} className="w-14 h-14 mb-6" />
              <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-6">
                Smart Notifications
              </h3>
              <p className="text-[#6B6A6A] leading-[185%] text-lg">
                Get intelligent alerts for bookings, session updates, payments, and more.
                Stay informed with real-time confirmations, completion notices, and status updates.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Built for everyuser section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-[#13612E] text-center mb-4">
            Built For Every EV User
          </h2>
          <p className="text-[#6B6A6A] text-2xl text-center max-w-6xl mx-auto mb-32">
            Are you a vehicle owner, a ride hailing driver, or a fleet manager?
            We have exactly what you need, and more!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4 max-w-6xl mx-auto">

            <div className="relative bg-gray-100 p-6 rounded-lg text-center">
              <img src={owners} alt="" className="w-20 h-20 mx-auto" />
              <h3 className="text-2xl font-bold text-[#0E4121] mt-6 mb-4">
                Individual EV Owners
              </h3>
              <p className="text-black text-lg">
                Perfect for individual EV owners who want fast, reliable
                charging for daily commutes or long trips. Quickly find
                stations, reserve slots, track history, and get cost
                insights — all in one place.
              </p>

              {/* Vertical Line Right */}
              <div className="hidden md:block absolute top-1/2 right-[-12px] -translate-y-1/2 w-[2px] h-3/5 bg-gray-300 rounded-full"></div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-gray-100 p-6 rounded-lg text-center">
              <img src={drivers} alt="" className="w-20 h-20 mx-auto" />
              <h3 className="text-2xl font-bold text-[#0E4121] mb-6 mt-4">
                Ride-Hailing Drivers
              </h3>
              <p className="text-black text-lg">
                Ideal for professional EV drivers who need fast, reliable
                charging to stay on the road. Minimize downtime, enjoy
                priority booking, make quick payments, and optimize
                your routes with ease.
              </p>

              {/* Vertical Line Right */}
              <div className="hidden md:block absolute top-1/2 right-[-12px] -translate-y-1/2 w-[2px] h-3/5 bg-gray-300 rounded-full"></div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-gray-100 p-6 rounded-lg text-center">
              <img src={managers} alt="" className="w-20 h-20 mx-auto" />
              <h3 className="text-2xl font-bold text-[#0E4121] mt-6 mb-4">
                Fleet Managers
              </h3>
              <p className="text-black text-lg">
                Perfect for companies managing EV fleets that need
                efficient, cost-effective charging. Bulk book slots,
                track fleet analytics, manage costs, and coordinate
                drivers seamlessly.
              </p>
            </div>

          </div>


        </div>
      </section>


      {/* Seamless Station section */}
      <section className="py-50 px-4 overflow-hidden">
        <hr className="border-gray-300 border-t-2 mb-10" />

        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">

       
            <div>
              <h2 className="text-5xl font-bold text-green-800 mb-6">
                Seamless Station Discovery
              </h2>

              <p className="text-gray-700 text-xl leading-relaxed mb-16">
                Tap into the future of EV charging with Evant’s <span className="font-semibold">Find Station</span>
                gives you real-time station data, smart routing, and a frictionless charging experience
                right at your fingertips. Easily <span className="font-semibold">book charging slots</span> for unit
                and/or fleet vehicles and stay powered without the wait.
              </p>

              <button className="
          border border-gray-300 
          text-gray-700 text-lg
          px-10 py-3 rounded
          hover:bg-gray-100 transition
        ">
                Learn More
              </button>
            </div>

           
            <div className="relative flex justify-center">

           
              <div
                className="w-full max-w-[540px] h-[520px] bg-cover bg-center"
                style={{ backgroundImage: `url(${seamless})` }}
              ></div>

           
              <div className="
          absolute top-10 right-0 lg:right-[-40px] 
          bg-gray-50 w-full max-w-[350px] p-6
        ">
                <div className="bg-green-700 text-white px-4 py-2 mb-4 font-semibold text-center">
                  Book a charging slot
                </div>

                <div className="space-y-5">
                  <div className="flex items-center">
                    <label className="w-32 text-gray-800 font-medium text-sm mb-1">Vehicle data</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded bg-white text-gray-800 border border-gray-300"
                      placeholder="Enter vehicle info"
                    />
                  </div>

                  <div className="flex items-center">
                    <label className="w-32 text-gray-800 font-medium text-sm mb-1">Charger type</label>
                    <select className="w-full px-3 py-2 rounded bg-white text-gray-800 border border-gray-300">
                      <option>Choose charger type</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-800 font-medium text-sm mb-2">
                      Select for charging time
                      <br />
                      <span className="text-gray-800 text-[10px]">
                        Available time slots are shown in green. Unavailable slots are grayed out.
                      </span>
                    </label>

                    <div className="grid grid-cols-2 gap-4 text-[12px]">
                      {timeSlots.map((slot, index) => (
                        <label
                          key={index}
                          className={`flex items-center gap-2 ${slot.available ? "text-green-700 font-semibold" : "text-gray-500"}`}
                        >
                          <input
                            type="checkbox"
                            checked={!slot.available}
                            disabled={!slot.available}
                            readOnly
                          />
                          {slot.time}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-800 font-medium text-sm mb-1">Note</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 text-gray-800"
                      rows="3"
                      placeholder="Add Meeting Note"
                    ></textarea>
                  </div>

                  <button className="w-full bg-green-700 text-white py-3 hover:bg-green-800 transition font-semibold">
                    Book Slot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


     
   <section className="w-full bg-[#104D34] py-12 md:py-20 mt-20 mb-50">
  <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center 
                  gap-0 md:gap-0 px-0 md:px-0">

 
    <div className="w-full md:w-[45%] flex justify-center md:justify-center">
     <img
  src={phone}
  alt="Evant app on phone"
  className="
    w-[300px] md:w-[380px] lg:w-[380px]
    rounded-[30px]
    drop-shadow-2xl
    transition-all duration-500 ease-out
    hover:scale-[1.02] 
    hover:-translate-y-1
    hover:rotate-[2deg]
    hover:skew-y-1
  "
/>
    </div>


    <div className="w-full md:w-[64%] text-white text-center 
                    space-y-4 md:space-y-6 mx-auto">

      <h2 className="text-[24px] md:text-[40px] lg:text-[44px] 
                     font-bold leading-relaxed max-w-[700px] mx-auto">
        Ready To Experience The Future Of  
        <br className="hidden md:block" />
        EV Charging In Nigeria?
      </h2>

      <p className="text-[32px] md:text-[28px] leading-relaxed opacity-90 
                    max-w-[850px] mx-auto">
        Join thousands of EV drivers who are already using Evant to make their 
        charging experience seamless and reliable.
      </p>

      <div className="flex flex-col sm:flex-row justify-center 
                      items-center gap-4 pt-2 mt-20 mx-auto">

        <button className="
          w-[260px] py-3 border border-white 
          rounded-lg text-xl text-white bg-[#3A7750] font-medium
          hover:bg-white hover:text-[#fff]
          transition-all cursor-pointer
        ">
          Download App
        </button>

        <button className="
          w-[260px] py-3 bg-white border border-white
          rounded-lg text-[#104D34] text-xl font-medium
          hover:bg-[#3A7750] transition-all cursor-pointer
        ">
          Partner with us
        </button>

      </div>

    </div>

  </div>
</section>

    </div>
  )
}

export default Home