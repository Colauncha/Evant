import React from "react";
import charger from "../assets/EV-charging-station.png";
import woman from "../assets/woman-charging.png";
import innovation from "../assets/innovation.svg";
import sustainability from "../assets/sustainability.svg";
import accessibility from "../assets/accessibility.svg";
import excellence from "../assets/excellence.svg";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={charger}
                alt="Electric car being charged"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-[#13612E] text-xl mb-2 tracking-wide">
                About Us
              </h2>
              <h1 className="text-4xl font-medium text-[#2c2c2c] mb-6">
                Powering the Future, One Charge at a Time
              </h1>
              <p className="text-[#6b6a6a] text-xl mb-6">
                Evant is at the forefront of Nigeria's electric vehicle
                revolution. We're pioneering the EV charging infrastructure that
                connects drivers with reliable, accessible charging stations
                across the country. Our platform makes it easy to find, book,
                and pay for EV charging, empowering a sustainable transportation
                future.
              </p>
              <button className="bg-[#3A7750] text-white px-8 py-3 rounded-md hover:bg-green-700 transition font-semibold">
                Find Station
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#13612E] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#2c2c2c] mb-2">
                1,000+
              </div>
              <div className="text-[#2c2c2c] text-sm font-medium">
                App Downloads
              </div>
              <div className="text-sm text-[#6b6a6a] mt-1 font-medium">
                First 6 months
              </div>
            </div>

            <div className="bg-white border border-[#13612E] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#2c2c2c] mb-2">70%</div>
              <div className="text-[#2c2c2c] text-sm font-medium">
                Book Completion
              </div>
              <div className="text-sm text-[#6b6a6a] mt-1 font-medium">
                Success rate target
              </div>
            </div>

            <div className="bg-white border border-[#13612E] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#2c2c2c] mb-2">80%</div>
              <div className="text-[#2c2c2c] text-sm font-medium">
                User Satisfaction
              </div>
              <div className="text-sm text-[#6b6a6a] mt-1 font-medium">
                Rating target
              </div>
            </div>

            <div className="bg-white border border-[#13612E] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#2c2c2c] mb-2">10+</div>
              <div className="text-[#2c2c2c] text-sm font-medium">
                Active Stations
              </div>
              <div className="text-sm text-[#6b6a6a] mt-1 font-medium">
                First Year target
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-[#13612E] text-xl mb-2 tracking-wide">
                Our Story
              </h2>
              <h3 className="text-4xl font-medium text-[#2c2c2c] mb-6">
                Driving Change, One Innovation at a Time
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                EVANT was born from a simple observation: Nigeria’s electric
                vehicle adoption was being hindered by the lack of accessible
                and reliable charging infrastructure. While EV technology was
                advancing rapidly, the charging experience remained fragmented
                and inconvenient. Founded by Akano Olusola, EVANT bridges this
                gap by creating a unified platform that connects EV owners with
                charging stations, making the entire process seamless from
                discovery to payment.
              </p>
            </div>
            <div>
              <img
                src={woman}
                alt="Person using smartphone to charge EV"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl text-[#2c2c2c] mb-6">Our Mission</h2>
          <p className="text-[#6b6a6a] text-xl mb-12">
            EVANT exists to bridge the gap between Nigeria's electric vehicle
            potential and reality. We provide EV owners, fleet operators, and
            charging station providers with a unified platform that makes
            finding, booking, and paying for charging services as simple as
            using a smartphone app. Our mission is to eliminate range anxiety,
            reduce charging friction, and accelerate Nigeria's transition to
            sustainable transportation.We are shaping a cleaner, smarter future
            guided by our core values.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#99b1a1] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={innovation}
                  alt="Innovation icon"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#2c2c2c] mb-2">
                Innovation
              </h3>
              <p className="text-[#6b6a6a] text-sm">
                Leveraging cutting-edge technology to revolutionize EV charging
                in Nigeria.
              </p>
            </div>

            <div className="bg-white border border-[#99b1a1] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={sustainability}
                  alt="Sustainability icon"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#2c2c2c] mb-2">
                Sustainability
              </h3>
              <p className="text-[#6b6a6a] text-sm">
                Driving Nigeria's transition to clean energy and sustainable
                transportation.
              </p>
            </div>

            <div className="bg-white border border-[#99b1a1] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={accessibility}
                  alt="Accessibility icon"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#2c2c2c] mb-2">
                Accessibility
              </h3>
              <p className="text-[#6b6a6a] text-sm">
                Making EV charging accessible to everyone, everywhere in
                Nigeria.
              </p>
            </div>

            <div className="bg-white border border-[#99b1a1] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={excellence}
                  alt="Excellence icon"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#2c2c2c] mb-2">
                Excellence
              </h3>
              <p className="text-[#6b6a6a] text-sm">
                Delivering exceptional user experience and reliable service at
                every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                {/* <span className="text-gray-500">Founder Photo Placeholder</span> */}
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Meet Our Founder
              </h2>
              <h3 className="text-2xl font-semibold text-[#2c2c2c] mb-4">
                Mr Oluwasola Akano
              </h3>
              <p className="text-[#6b6a6a] text-xl">
                A visionary entrepreneur passionate about sustainable technology
                and clean energy solutions. Mr Akano recognized the need for
                accessible EV charging infrastructure in Nigeria and created
                EVANT to democratize electric vehicle adoption across the
                country.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-[#13612E] text-xl mb-2 tracking-wide">
                Support
              </h2>
              <h3 className="text-4xl font-medium text-[#2c2c2c] mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-[#6b6a6a] text-xl">
                Discover the full range of features and services we offer and
                how to use it
              </p>
            </div>
            <div>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-800">
                      How do I book a charging session?
                    </h4>
                    <span className="text-2xl text-gray-500">+</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-800">
                      What payment methods are accepted?
                    </h4>
                    <span className="text-2xl text-gray-500">+</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Is there a fleet management option?
                    </h4>
                    <span className="text-2xl text-gray-500">+</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-800">
                      How can I become a station partner?
                    </h4>
                    <span className="text-2xl text-gray-500">+</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-gray-600 mb-4">Got more Questions?</p>
                <button className="bg-[#3A7750] text-white px-8 py-3 rounded-md hover:bg-green-700 transition font-semibold">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
