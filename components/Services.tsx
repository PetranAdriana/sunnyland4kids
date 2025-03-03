"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";

// Define a type for the valid service IDs
type ServiceId = "afterschool" | "workshops" | "playground" | "arts";

const ServiceIcon = ({ id }: { id: ServiceId | string }) => {
  const icons: Record<ServiceId, JSX.Element> = {
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
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
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
        <path d="M2 12.5V12a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.5"></path>
        <path d="M2 12.5h20"></path>
        <path d="M6 20a2 2 0 0 1-2-2v-6"></path>
        <path d="M18 20a2 2 0 0 0 2-2v-6"></path>
        <path d="M12 10v10"></path>
        <path d="M12 10a4 4 0 0 1-4-4V3"></path>
        <path d="M12 10a4 4 0 0 0 4-4V3"></path>
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
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
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
        <path d="M8 2v4"></path>
        <path d="M3 7h18"></path>
        <path d="M19 2v4"></path>
        <rect x="4" y="7" width="16" height="12" rx="2"></rect>
        <path d="m9 13 2 2 4-4"></path>
      </svg>
    ),
  };

  return id in icons ? icons[id as ServiceId] : null;
};

export default function Services() {
  const t = useTranslations();
  const [hoveredService, setHoveredService] = useState<ServiceId | null>(null);

  const servicesData = [
    {
      id: "afterschool",
      color: "primary",
      gradient: "from-primary/10 to-primary/20",
      iconBg: "bg-primary-100",
    },
    {
      id: "workshops",
      color: "secondary",
      gradient: "from-secondary/10 to-secondary/20",
      iconBg: "bg-secondary-100",
    },
    {
      id: "playground",
      color: "accent",
      gradient: "from-accent/10 to-accent/20",
      iconBg: "bg-accent-100",
    },
    {
      id: "arts",
      color: "fun",
      gradient: "from-fun/10 to-fun/20",
      iconBg: "bg-fun-100",
    },
  ];

  // Animation variants
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

  return (
    <section
      id="services"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
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
                className={`h-full rounded-xl overflow-hidden shadow-md transition-all duration-300 
                ${
                  hoveredService === service.id
                    ? "shadow-xl scale-105"
                    : "shadow-sm"
                }`}
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    service.gradient
                  } 
                  ${
                    hoveredService === service.id ? "opacity-100" : "opacity-80"
                  } transition-opacity duration-300`}
                ></div>

                <div className="relative p-8 flex flex-col items-center text-center h-full">
                  {/* Icon container with pulse animation on hover */}
                  <div
                    className={`w-20 h-20 ${
                      service.iconBg
                    } rounded-full p-4 mb-6 transition-all duration-300
                    ${
                      hoveredService === service.id
                        ? `ring-4 ring-${service.color}/30`
                        : ""
                    }`}
                  >
                    <div className={`text-${service.color}`}>
                      <ServiceIcon id={service.id} />
                    </div>

                    {/* Pulse animation when hovered */}
                    {hoveredService === service.id && (
                      <div
                        className={`absolute inset-0 rounded-full animate-ping bg-${service.color}/20 opacity-75`}
                      ></div>
                    )}
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-300
                    ${
                      hoveredService === service.id
                        ? `text-${service.color}-700`
                        : "text-foreground"
                    }`}
                  >
                    {t(`services.items.${service.id}.title`)}
                  </h3>

                  <p className="text-neutral-700 mb-6">
                    {t(`services.items.${service.id}.description`)}
                  </p>

                  {/* Learn more button */}
                  <div className="mt-auto">
                    <span
                      className={`inline-flex items-center text-sm font-medium text-${service.color} cursor-pointer hover:underline`}
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
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-16"
        >
          <button className="bg-primary hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center">
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
          </button>
        </motion.div>
      </div>
    </section>
  );
}
