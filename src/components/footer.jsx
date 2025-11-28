import logo from "../assets/logo2.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/insta.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
  <footer className="bg-[#258B59] text-white pt-32 pb-48 px-28">
  <div className="max-w-screen-2xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-24 gap-y-32">

      {/* LEFT — Logo + Address */}
      <div className="lg:col-span-4">
        <div className="flex items-center gap-4 mb-8">
          <img src={logo} alt="Evant logo" className="w-20 h-20" />
          <span className="text-5xl font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Evant</span>
        </div>
        <p className="text-white/90 text-base leading-relaxed mb-12">
          48. Otunba Afuwape Street,<br />
          Opebi, Ikeja,<br />
          Lagos, Nigeria.
        </p>
      </div>

      {/* MIDDLE — Links */}
      <div className="lg:col-span-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

          {/* BASICS */}
          <div>
            <h4 className="font-normal text-base mb-4 text-white">BASICS</h4>
            <ul className="space-y-4 text-base">
              <li><a href="/" className="text-white/80 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-white/80 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* PARTNERS */}
          <div>
            <h4 className="font-normal text-base mb-4 text-white">PARTNERS</h4>
            <ul className="space-y-4 text-base">
              <li><a href="#" className="text-white/80 hover:text-white">NNPC</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">RGV Oil</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Oando Oil and Gas</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-normal text-base mb-4 text-white">RESOURCES</h4>
            <ul className="space-y-4 text-base">
              <li><a href="#" className="text-white/80 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* RIGHT — Social Icons */}
      <div className="lg:col-span-2 flex flex-col items-center justify-center mt-12 lg:mt-0">
        <h4 className="font-normal text-base text-white mb-6">FOLLOW US</h4>
        <div className="flex gap-6">
          <a href="#" className="cursor-pointer hover:opacity-80 transition-opacity">
            <img src={facebook} alt="Facebook" className="w-12 h-12 object-contain" />
          </a>
          <a href="#" className="cursor-pointer hover:opacity-80 transition-opacity">
            <img src={instagram} alt="Instagram" className="w-12 h-12 object-contain" />
          </a>
          <a href="#" className="cursor-pointer hover:opacity-80 transition-opacity">
            <img src={twitter} alt="Twitter" className="w-12 h-12 object-contain" />
          </a>
        </div>
      </div>

    </div>
  </div>
</footer>

  );
}

export default Footer;
