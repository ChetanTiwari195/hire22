"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const TrustedBySection = () => {

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12">
            Trusted by Leading Companies
          </h3>
          <Marquee>
            <img
              src={"airbnb-logo.webp"}
              alt="airbnb-logo"
              className="h-12 mx-4"
            />
            <img src={"cisco-logo.webp"} alt="Cisco" className="h-12 mx-4" />
            <img
              src={"coolova-logo.webp"}
              alt="coolova"
              className="h-12 mx-4"
            />
            <img src={"gojek-logo.webp"} alt="gojek" className="h-12 mx-4" />
            <img src={"oracle-logo.webp"} alt="oracle" className="h-12 mx-4" />
            <img src={"vmware-logo.webp"} alt="vmware" className="h-12 mx-4" />
            <img
              src={"wipro-logo1.webp"}
              alt="wipro"
              className="h-12 mx-4"
            />
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;