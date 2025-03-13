"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

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
          {/* Shield with child silhouette */}
          <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"></path>
          {/* Simple child figure inside shield */}
          <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
          <path d="M12 12v3"></path>
          <path d="M10 15h4"></path>
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
                <Image
                  src="/assets/gallery_images/465465117_9084642378236520_2967575499268519160_n.jpg"
                  alt="Happy children playing"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
                />
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/assets/gallery_images/465674827_122105043614611582_4119506859458123450_n.jpg"
                  alt="Learning activities"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
                />
              </div>

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
                <Image
                  src="/assets/466000442_10230381366450785_6598734449168249828_n.jpg"
                  alt="Founder"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary mr-4"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2UyZThmMCIvPjwvc3ZnPg=="
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:mt-32 py-20"
        >
          <h3 className="text-4xl md:text-5xl  font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("about.valuesTitle") || "Valorile Noastre"}
          </h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-neutral-600 max-w-2xl mx-auto mb-12"
          >
            {t("about.valuesSubtitle")}
          </motion.p>

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
