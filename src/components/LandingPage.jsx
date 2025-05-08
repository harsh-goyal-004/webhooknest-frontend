import React, { useRef } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

function LandingPage() {
  const headingRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const headingInView = useInView(headingRef, { once: true });
  const step1InView = useInView(step1Ref, { once: true });
  const step2InView = useInView(step2Ref, { once: true });
  const step3InView = useInView(step3Ref, { once: true });

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue-50">
        <div className="inter-font h-full w-full ">
          {/* Logo and Name */}
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            className="flex w-full justify-center items-center bg-gray-200"
          >
            <img
              src="/logo.png"
              alt="WebhookNest Logo"
              loading="lazy"
              className="w-[55px] md:w-[100px]"
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide nunito">
              WebhookNest
            </h1>
          </motion.div>

          {/* Heading & CTA */}
          <motion.div
            ref={headingRef}
            initial={{ x: -200, opacity: 0 }}
            animate={headingInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            className="mt-10 w-full flex justify-center items-center flex-col"
          >
            <h1 className="text-xl text-center md:text-4xl font-medium border-2 p-2 md:p-4 rounded-lg bg-slate-900 text-white">
              Create a Temporary Endpoint to View HTTP Requests in Real Time
            </h1>
            <span className="text-base text-center md:text-xl my-10 text-gray-600 tracking-tight">
              WebhookNest gives you a URL that will collect requests made to it
              and let you inspect them in a human-friendly way.
            </span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-purple-500 text-lg md:text-xl p-2 md:p-4 rounded md:rounded-lg text-white font-medium"
              onClick={() => navigate("/home")}
            >
              Generate your webhook URL
            </motion.button>
          </motion.div>

          {/* How It Works */}
          <div className="px-4 md:px-12 flex flex-col gap-24 py-12 w-full">
            {/* Step 1 */}
            <motion.div
              ref={step1Ref}
              initial={{ x: -200, opacity: 0 }}
              animate={step1InView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0"
            >
              <div className="sansation w-full text-center md:w-2/6">
                <h1 className="text-lg md:text-3xl text-blue-800 font-bold">
                  Step 1 : Copy Your Webhook URL
                </h1>
                <p className="text-blue-700 mt-3">
                  Copy the{" "}
                  <strong className="bg-purple-500 text-white text-sm p-1 rounded">
                    COPY
                  </strong>{" "}
                  button to save your endpoint.
                </p>
              </div>
              <div className="px-2 md:w-3/6">
                <img src="/step1.png" alt="Step 1" loading="lazy" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              ref={step2Ref}
              initial={{ x: 500, opacity: 0 }}
              animate={step2InView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0"
            >
              <div className="sansation md:w-2/6 text-center md:order-2">
                <h1 className="text-lg md:text-3xl text-blue-800 font-bold">
                  Step 2 : Send a Request
                </h1>
                <p className="text-blue-700 mt-3">
                  Use Postman, cURL, or any third-party service (like GitHub,
                  Stripe, etc.) to send HTTP requests to your URL.
                </p>
              </div>
              <div className="px-2 md:w-3/6">
                <img src="/step2.png" alt="Step 2" loading="lazy" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              ref={step3Ref}
              initial={{ x: -200, opacity: 0 }}
              animate={step3InView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0"
            >
              <div className="sansation md:w-2/6 text-center">
                <h1 className="text-xl md:text-3xl text-blue-800 font-bold">
                  Step 3 : View the Request
                </h1>
                <p className="text-blue-700 mt-3">
                  Instantly view the request data - headers, body - right on the
                  webpage, no backend needed.
                </p>
              </div>
              <div className="px-2 md:w-3/6">
                <img src="/step3.png" alt="Step 3" loading="lazy" />
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
