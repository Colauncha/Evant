import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef(null);

  // Enhanced scroll detection with throttle
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleGetStartedClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate("/login");
      setIsAnimating(false);
    }, 300);
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/service" },
    { name: "Contact", to: "/contact" },
  ];

  const linkBase =
    "relative pb-1 text-[17px] font-medium transition-all duration-300 hover:text-green-700";

  const activeClass =
    "text-green-700 font-semibold";

  const hoverUnderline =
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-600 hover:after:w-full after:transition-all after:duration-300 after:ease-out";

  const activeUnderline =
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-green-600";

  return (
    <nav
      ref={menuRef}
      className={`w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-500 ease-out ${scrolled
          ? "shadow-lg py-2 border-b border-gray-100"
          : "shadow-sm py-4 border-b border-transparent"
        }`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 md:px-20 lg:px-24">

        {/* ===== logo part ===== */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="relative">
            <img
              src={logo}
              alt="Evant logo"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-700/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          </div>

          <span
            className="text-green-800 font-bold text-2xl tracking-tight group-hover:text-green-700 transition-colors duration-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Evant
          </span>
        </div>


        <div className="hidden lg:flex items-center gap-16 xl:gap-24">

          {/* Main nav links part */}
          <ul className="flex items-center gap-10 xl:gap-14 text-gray-800">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative ${linkBase} ${isActive ? activeUnderline : hoverUnderline} ${isActive ? activeClass : "text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA part */}
          <div className="flex items-center gap-12">
            <NavLink
              to="/investors"
              className={({ isActive }) =>
                `relative ${linkBase} ${isActive ? activeUnderline : hoverUnderline} ${isActive ? activeClass : "text-gray-700"
                }`
              }
            >
              Investors
            </NavLink>

            <button
              onClick={handleGetStartedClick}
              disabled={isAnimating}
              className="relative bg-gradient-to-r from-green-700 to-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-green-600 hover:to-green-500 hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isAnimating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Get Started"
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* ===== Mobile Menu/respnsoveness===== */}
        <button
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-100 rounded-lg group cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen
                ? "rotate-45 translate-y-0"
                : "-translate-y-2"
              }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
              }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen
                ? "-rotate-45 translate-y-0"
                : "translate-y-2"
              }`}
          />
        </button>
      </div>

      {/* ===== Dropdown Menu 4 mobile view ===== */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${menuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
          }`}
      >
        <div className="px-6 pt-6 pb-8">
          <ul className="flex flex-col gap-4">
            {[...navItems, { name: "Investors", to: "/investors" }].map((item, index) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block py-4 px-4 rounded-xl text-lg font-medium transition-all duration-300 border-l-4 ${isActive
                      ? "text-green-700 bg-green-50 border-green-600 shadow-sm"
                      : "text-gray-700 bg-transparent border-transparent hover:bg-gray-50 hover:border-gray-300 hover:translate-x-1"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleGetStartedClick();
                }}
                disabled={isAnimating}
                className="w-full bg-gradient-to-r from-green-700 to-green-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-green-600 hover:to-green-500 hover:shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isAnimating ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Loading...
                  </div>
                ) : (
                  "Get Started"
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;