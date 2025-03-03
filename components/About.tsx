"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const values = [
    {
      id: "creativity",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>
      ),
      color: "text-primary",
      bgColor: "bg-primary-50",
    },
    {
      id: "safety",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M14.5 3.5c0 3.59-2 8.5-7 8.5s-7-4.91-7-8.5a7 7 0 0 1 14 0Z"></path>
          <path d="M21 3.5A11 11 0 0 0 11 11c1.87 1.93 5 2 7 .5l3 3"></path>
        </svg>
      ),
      color: "text-secondary",
      bgColor: "bg-secondary-50",
    },
    {
      id: "learning",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
      ),
      color: "text-accent",
      bgColor: "bg-accent-50",
    },
    {
      id: "joy",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" x2="9.01" y1="9" y2="9"></line>
          <line x1="15" x2="15.01" y1="9" y2="9"></line>
        </svg>
      ),
      color: "text-fun",
      bgColor: "bg-fun-50",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
            {t("about.title")}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/assets/476138954_17861794101343609_2104704038251843664_n.jpg"
                  alt="Happy children playing"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x400?text=Happy+Children+Playing";
                  }}
                />
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/assets/477748564_17862756432343609_2862445442508847562_n.jpg"
                  alt="Learning activities"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/200x200?text=Learning+Activities";
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-primary rounded-full opacity-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">
                {t("about.subtitle") || "Un loc special pentru cei mici"}
              </h3>

              <div className="prose prose-lg">
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  {t("about.description1")}
                </p>

                <p className="text-neutral-700 leading-relaxed">
                  {t("about.description2")}
                </p>
              </div>

              <div className="mt-8 flex items-center">
                <img
                  src="/assets/466000442_10230381366450785_6598734449168249828_n.jpg"
                  alt="Founder"
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary mr-4"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/56x56?text=F";
                  }}
                />
                <div>
                  <p className="font-bold text-neutral-800">
                    {t("about.founderName") || "Monica-Emilia Toma"}
                  </p>
                  <p className="text-neutral-500 text-sm">
                    {t("about.founderTitle") || "Fondator & Director"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-neutral-800">
            {t("about.valuesTitle") || "Valorile Noastre"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-100"
              >
                <div
                  className={`${value.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 ${value.color}`}
                >
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-neutral-800">
                  {t(`about.values.${value.id}.title`) ||
                    {
                      creativity: "Creativitate",
                      safety: "Siguranță",
                      learning: "Învățare",
                      joy: "Bucurie",
                    }[value.id]}
                </h4>
                <p className="text-neutral-600">
                  {t(`about.values.${value.id}.description`) ||
                    {
                      creativity:
                        "Încurajăm exprimarea liberă și gândirea creativă prin joc și activități artistice.",
                      safety:
                        "Oferim un mediu sigur și protejat, unde copiii se pot dezvolta fără griji.",
                      learning:
                        "Promovăm învățarea prin descoperire și adaptăm metodele la nevoile fiecărui copil.",
                      joy: "Credem că bucuria și distracția sunt esențiale pentru o dezvoltare armonioasă.",
                    }[value.id]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
