"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Image from "next/image";

type ServiceId = "afterschool" | "workshops" | "playground" | "arts";

interface ServiceData {
  id: ServiceId;
  color: string;
  gradient: string;
  iconBg: string;
}

const ServiceIcon = ({ id }: { id: ServiceId | string }) => {
  const icons: Record<ServiceId, React.ReactElement> = {
    afterschool: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    workshops: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    playground: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    arts: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  };

  return id in icons ? icons[id as ServiceId] : null;
};

export default function Services() {
  const t = useTranslations();
  const [hoveredService, setHoveredService] = useState<ServiceId | null>(null);
  const [activeModal, setActiveModal] = useState<ServiceId | null>(null);

  const servicesData: ServiceData[] = [
    {
      id: "afterschool",
      color: "primary",
      gradient: "from-primary-100 to-primary-200",
      iconBg: "bg-white",
    },
    {
      id: "workshops",
      color: "secondary",
      gradient: "from-secondary-100 to-secondary-200",
      iconBg: "bg-white",
    },
    {
      id: "playground",
      color: "accent",
      gradient: "from-accent-100 to-accent-200",
      iconBg: "bg-white",
    },
    {
      id: "arts",
      color: "fun",
      gradient: "from-fun-100 to-fun-200",
      iconBg: "bg-white",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const serviceDetails: Record<
    ServiceId,
    { features: string[]; gallery: string[] }
  > = {
    afterschool: {
      features: [
        "Program zilnic 12:00-18:00",
        "Asistență teme și activități educaționale",
        "Învățare prin joc și activități creative",
        "Gustare și masa de prânz incluse",
        "Personal calificat și dedicat",
      ],
      gallery: [
        "/assets/gallery_images/479116385_17862756390343609_8923889151915236205_n.jpg",
        "/assets/gallery_images/479443515_17862756399343609_8134092495979758593_n.jpg",
      ],
    },
    workshops: {
      features: [
        "Ateliere tematice săptămânale",
        "Activități STEAM (știință, tehnologie, inginerie, artă, matematică)",
        "Dezvoltarea creativității și gândirii critice",
        "Materiale incluse în preț",
        "Grupe mici pentru atenție personalizată",
      ],
      gallery: [
        "/assets/gallery_images/476133184_17861794128343609_4465827064279967656_n.jpg",
        "/assets/gallery_images/476136972_17861794137343609_1449579576863002474_n.jpg",
      ],
    },
    playground: {
      features: [
        "Spațiu de joacă interior modern și sigur",
        "Echipamente adaptate vârstei",
        "Supraveghere permanentă",
        "Zone tematice interactive",
        "Activități de socializare în grup",
      ],
      gallery: [
        "/assets/gallery_images/476871100_17861794140343609_8028419097164620055_n.jpg",
        "/assets/gallery_images/476624955_17861794113343609_4561345110442597429_n.jpg",
      ],
    },
    arts: {
      features: [
        "Cursuri de arte vizuale și muzicale",
        "Dezvoltarea talentelor artistice",
        "Profesori cu experiență în pedagogie artistică",
        "Expoziții și prezentări periodice",
        "Dezvoltarea expresivității și încrederii în sine",
      ],
      gallery: [
        "/assets/gallery_images/476138954_17861794101343609_2104704038251843664_n.jpg",
        "/assets/gallery_images/476278957_17861794098343609_4192598485548977119_n.jpg",
      ],
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 z-10"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-accent/5 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("services.title")}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t("services.subtitle") ||
              "Descoperă serviciile noastre dedicate dezvoltării și bunăstării copilului tău"}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="relative"
            >
              <div
                className={`h-full p-8 rounded-xl shadow-md transition-all duration-300 bg-gradient-to-br ${
                  service.gradient
                } border-2 border-b-4 border-${service.color}/30
                  ${
                    hoveredService === service.id
                      ? "shadow-xl scale-105"
                      : "shadow-sm"
                  }`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div
                    className={`w-20 h-20 ${
                      service.iconBg
                    } rounded-full p-4 mb-6 transition-all duration-300 shadow-lg
                      ${
                        hoveredService === service.id
                          ? `ring-4 ring-${service.color}/30`
                          : ""
                      }`}
                  >
                    <div className={`text-${service.color}`}>
                      <ServiceIcon id={service.id} />
                    </div>
                    {hoveredService === service.id && (
                      <div
                        className={`absolute inset-0 rounded-full animate-ping bg-${service.color}-200 opacity-75`}
                      ></div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground transition-colors duration-300">
                    {t(`services.items.${service.id}.title`)}
                  </h3>

                  <p className="text-neutral-600 mb-6">
                    {t(`services.items.${service.id}.description`)}
                  </p>

                  <div className="mt-auto">
                    <button
                      onClick={() => setActiveModal(service.id)}
                      className={`bg-${service.color}-500 hover:bg-${service.color}-600 text-white  font-medium px-5 py-2 rounded-full transition-all duration-300 inline-flex items-center cursor-pointer relative`}
                    >
                      {t("services.learnMore") || "Află mai multe"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ml-1 transition-transform duration-200 
                          ${
                            hoveredService === service.id ? "translate-x-1" : ""
                          }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for service details */}
        <AnimatePresence>
          {activeModal && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModal(null)}
                className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              />

              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-16 md:mt-0">
                  <div className={`bg-${activeModal}-500 p-6 relative`}>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="absolute cursor-pointer top-4 right-4 flex items-center justify-center text-black hover:text-black/80  rounded-full p-1.5"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>

                    <div className="flex items-center">
                      <div
                        className={`w-14 h-14 ${
                          servicesData.find((s) => s.id === activeModal)?.iconBg
                        } rounded-full p-3 mr-4 shadow-lg`}
                      >
                        <div
                          className={`text-${
                            servicesData.find((s) => s.id === activeModal)
                              ?.color
                          }`}
                        >
                          <ServiceIcon id={activeModal} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {t(`services.items.${activeModal}.title`)}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-6">
                        <p className="text-neutral-700">
                          {t(`services.items.${activeModal}.description`)}
                        </p>
                      </div>

                      <h4
                        className={`font-bold mb-3 text-${
                          servicesData.find((s) => s.id === activeModal)?.color
                        }`}
                      >
                        {t("services.features") || "Ce oferim:"}
                      </h4>

                      <ul className="space-y-3 mb-6">
                        {serviceDetails[activeModal].features.map(
                          (feature, index) => (
                            <motion.li
                              key={index}
                              variants={listItemVariants}
                              className="flex items-start"
                            >
                              <div
                                className={`flex-shrink-0 w-5 h-5 mr-2 text-${
                                  servicesData.find((s) => s.id === activeModal)
                                    ?.color
                                }/30 mt-0.5`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <span className="text-neutral-700">
                                {feature}
                              </span>
                            </motion.li>
                          )
                        )}
                      </ul>

                      <div className="mt-8">
                        <a
                          href="#contact"
                          onClick={() => setActiveModal(null)}
                          className={`bg-${activeModal}-500 hover:bg-${activeModal}-600 text-white font-medium px-5 py-2 rounded-full transition-all duration-300 inline-flex items-center`}
                        >
                          {t("services.contactNow") || "Contactează-ne acum"}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4
                        className={`font-bold mb-1 text-${
                          servicesData.find((s) => s.id === activeModal)?.color
                        }`}
                      >
                        {t("services.gallery") || "Galerie"}
                      </h4>

                      {serviceDetails[activeModal].gallery.map(
                        (image, index) => (
                          <div
                            key={index}
                            className="relative h-40 rounded-lg overflow-hidden shadow-md"
                          >
                            <Image
                              src={image}
                              alt={`${t(
                                `services.items.${activeModal}.title`
                              )} - ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center"
          >
            {t("services.contactButton") || "Contactează-ne pentru detalii"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
