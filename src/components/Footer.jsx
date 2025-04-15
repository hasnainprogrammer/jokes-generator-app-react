import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#0c8599] text-[#99e9f2] text-center py-2 mt-8">
      &copy; Copyright {new Date().getFullYear()} | Developed by Hasnain
    </div>
  );
}

export default Footer;
