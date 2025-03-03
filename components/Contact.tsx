"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  Instagram,
  CheckCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(false);
      }, 5000);
    }, 1500);

    // Actual form submission would go here
    // try {
    //   const response = await fetch("https://formspree.io/f/your-form-id", {
    //     method: "POST",
    //     body: JSON.stringify(formData),
    //     headers: { "Content-Type": "application/json" }
    //   });
    //   if (response.ok) {
    //     setIsSubmitting(false);
    //     setIsSubmitted(true);
    //     setFormData({ name: "", email: "", message: "" });
    //     setTimeout(() => setIsSubmitted(false), 5000);
    //   } else {
    //     setIsSubmitting(false);
    //     // Handle error
    //   }
    // } catch (error) {
    //   setIsSubmitting(false);
    //   // Handle error
    // }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-neutral-50 to-background overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-30 translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t("contact.subtitle") ||
              "Suntem aici pentru a răspunde întrebărilor tale. Contactează-ne și îți vom răspunde cât mai curând posibil."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 bg-white rounded-2xl overflow-hidden shadow-xl">
          {/* Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-gradient-to-b from-primary-500 to-primary-700 text-white p-8 lg:p-12"
          >
            <div className="h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-8 text-white">
                {t("contact.info.title")}
              </h3>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6 text-white/90 mb-10"
              >
                <motion.li variants={itemVariants} className="flex">
                  <div className="bg-white/10 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Locație</h4>
                    <p>{t("contact.info.address")}</p>
                  </div>
                </motion.li>

                <motion.li variants={itemVariants} className="flex">
                  <div className="bg-white/10 rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefon</h4>
                    <a
                      href="tel:0723506199"
                      className="hover:text-white transition-colors"
                    >
                      {t("contact.info.phone")}
                    </a>
                  </div>
                </motion.li>

                <motion.li variants={itemVariants} className="flex">
                  <div className="bg-white/10 rounded-full p-3 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                      href="mailto:Sunnylandkids24@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      {t("contact.info.email")}
                    </a>
                  </div>
                </motion.li>

                <motion.li variants={itemVariants} className="flex">
                  <div className="bg-white/10 rounded-full p-3 mr-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Zone deservite
                    </h4>
                    <p>{t("contact.info.areas")}</p>
                  </div>
                </motion.li>
              </motion.ul>

              <div className="mt-auto">
                <h4 className="text-xl font-bold mb-4 text-white">
                  {t("contact.social.title")}
                </h4>
                <div className="flex space-x-3">
                  <a
                    href="https://www.tiktok.com/@sunny_land_kids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 transition-colors rounded-full p-3 text-white"
                    aria-label="TikTok"
                  >
                    <Image
                      src="/assets/tik-tok.png"
                      alt="TikTok"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/sunny_land_kids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 transition-colors rounded-full p-3 text-white"
                    aria-label="Instagram"
                  >
                    <Image
                      src="/assets/instagram.png"
                      alt="instagram"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61568347480056"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 transition-colors rounded-full p-3 text-white"
                    aria-label="facebook"
                  >
                    <Image
                      src="/assets/facebook.png"
                      alt="facebook"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 p-8 lg:p-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-neutral-800">
              {t("contact.form.title")}
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-100 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  {t("contact.form.successTitle") || "Mesaj trimis cu succes!"}
                </h4>
                <p className="text-green-600">
                  {t("contact.form.successMessage") ||
                    "Îți mulțumim pentru mesaj. Te vom contacta în curând."}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-neutral-700"
                    >
                      {t("contact.form.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-neutral-200 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-neutral-700"
                    >
                      {t("contact.form.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-neutral-200 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-neutral-700"
                  >
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="border-neutral-200 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary-600 text-white font-medium rounded-full px-8 py-3 transition-all duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {t("contact.form.sending") || "Se trimite..."}
                    </>
                  ) : (
                    <>
                      {t("contact.form.submit")}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-neutral-100">
              <div className="text-center">
                <h4 className="font-semibold text-neutral-700 mb-2">
                  {t("contact.schedule.title") || "Program de funcționare"}
                </h4>
                <div className="grid grid-cols-2 max-w-sm mx-auto gap-4 text-sm">
                  <div className="text-neutral-600">
                    {t("contact.schedule.weekdays") || "Luni - Vineri"}:
                    <span className="block font-semibold text-neutral-800">
                      08:00 - 18:00
                    </span>
                  </div>
                  <div className="text-neutral-600">
                    {t("contact.schedule.weekend") || "Sâmbătă"}:
                    <span className="block font-semibold text-neutral-800">
                      09:00 - 14:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden">
            <iframe
              title="Sunny Land Kids Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.505514181281!2d26.156345076890793!3d44.48295419731962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8c3b4a4cd05%3A0xdc7e79f6f334a58e!2sAlexandru%20Ioan%20Cuza%20St%201%2C%20Voluntari%20077190!5e0!3m2!1sen!2sro!4v1709567775979!5m2!1sen!2sro"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
