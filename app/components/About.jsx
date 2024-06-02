import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section>
        {/* Links starts */}
      <div className="flex items-center justify-start space-x-6 px-6 py-4 font-medium text-sm">
        <Link href="/" className="text-[#ff764d]">
          About
        </Link>
        <Link href="/">Jobs</Link>
        <Link href="/">Apprenticeships</Link>
      </div>
      {/* Links ends */}

      {/* Image */}
      <div className=""
      
      >
        <h1>Alberto</h1>
      </div>
    </section>
  );
};

export default About;
