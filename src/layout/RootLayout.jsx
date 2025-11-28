import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* the children for all the sections */}
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
