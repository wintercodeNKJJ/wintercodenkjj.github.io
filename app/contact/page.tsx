"use client";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import ContactForm from "../../components/ContactForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuspenceContactForm() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject") || "";
  return <ContactForm initialSubject={subject} />;
}

export default function Contact() {
  // const searchParams = useSearchParams();
  // const subject = searchParams.get("subject") || "";
  return (
    <main className="min-h-screen pt-20 bg-secondary">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center mb-12"
          >
            Feel free to reach out to me for any inquiries or collaboration
            opportunities.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-3xl text-blue-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p>Douala, Littoral, Cameroon</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-3xl text-blue-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p>653395861</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-3xl text-blue-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <a
                      href="mailto:kenfackjordanjunior@gmail.com"
                      className="hover:underline"
                    >
                      kenfackjordanjunior@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="text-3xl text-blue-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/nguezet-kenfack-jordan-junior"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Nguezet Kenfack Jordan Junior
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <Suspense>
                <SuspenceContactForm />
              </Suspense>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full h-96 rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.19447036576!2d10.04935!3d5.44774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105fdf2a1c4d0d5f%3A0x7e0f8d9a0b1e7d5a!2sDschang%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
