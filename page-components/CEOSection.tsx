"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
// import { X } from "lucide-react";
import { useState } from "react";

const CEOSection = () => {
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Text Content */}
              <div className="order-2 md:order-1">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  The Perfect Hiring Story
                </motion.h2>

                <motion.div
                  className="space-y-4 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p>
                    Need help finding top Talent with Hire22.ai? Want to discuss
                    the future of Leadership Hiring?
                  </p>
                  <p>
                    I'm Joby, a Startup Enthusiast with{" "}
                    <span className="font-semibold">15 years</span> in HR Tech.
                    I founded{" "}
                    <span className="font-semibold">Freshersworld.com</span>, a
                    niche job portal that served{" "}
                    <span className="font-semibold">30,000+ companies</span>,
                    with 15 million user signups and an app with 1.5 million
                    downloads.
                  </p>
                  <p>
                    Let's discuss your hiring challenges! I'm confident
                    Hire22.ai can be a valuable tool in finding the perfect fit
                    for your team.
                  </p>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                      onClick={() => setShowQRModal(true)}
                    >
                      CONNECT NOW
                    </Button>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900">Joby Joseph</h3>
                    <p className="text-gray-600">Founder & CEO, Hire22.ai</p>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="joby-us.webp"
                    alt="CEO of Hire22.ai"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      <Dialog open={showQRModal} onOpenChange={setShowQRModal}>
        <DialogContent className="max-w-md bg-emerald-500 p-0 border-none">
          <div className="bg-white rounded-lg m-2">
            <DialogHeader className="text-center pt-6 px-6">
              <DialogTitle className="text-xl font-semibold">
                <div className="flex justify-between items-center">
                  <img
                    src="hire22-logo.svg"
                    alt="Hire22.ai Logo"
                    className="w-20"
                  />
                  {/* <DialogClose className="text-gray-400 hover:text-gray-500">
                    <X className="h-4 w-4" />
                  </DialogClose> */}
                </div>
              </DialogTitle>
              <p className="text-lg font-medium mt-4">
                Scan to connect with Joby on WhatsApp and learn more about
                Hire22.ai!
              </p>
            </DialogHeader>
            <div className="p-6 flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="connect_joby.jpg"
                  alt="WhatsApp QR Code"
                  className="w-64 h-64"
                />
              </div>
              <p className="mt-4 text-center text-gray-600">
                Scan this QR to start a WhatsApp chat with Joby Joseph.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CEOSection;
