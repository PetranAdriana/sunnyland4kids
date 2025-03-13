"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";

// Define the activity type options
type ActivityType = "painting" | "reading" | "theater" | "cinema";

const ActivityIcon = ({
  type,
  color,
}: {
  type: ActivityType | string;
  color: string;
}) => {
  const iconMap = {
    painting: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12"
      >
        <circle cx="12" cy="12" r="9"></circle>

        <circle cx="8" cy="8" r="2"></circle>
        <circle cx="16" cy="8" r="2"></circle>
        <circle cx="16" cy="16" r="2"></circle>
        <circle cx="8" cy="16" r="2"></circle>

        <path d="M19.5 4.5L15 9"></path>
        <path d="M22 2l-1.5 1.5"></path>
      </svg>
    ),
    reading: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    theater: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12"
      >
        <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4"></path>
        <path d="M4 4c0-1.5 1.1-3 4-3 3 0 3 1 5 1 2 0 2-1 5-1 2.9 0 4 1.5 4 3"></path>

        <circle cx="9" cy="12" r="3"></circle>
        <circle cx="15" cy="12" r="3"></circle>

        <path d="M8 10v1"></path>
        <path d="M10 10v1"></path>
        <path d="M7.5 14a3.5 3.5 0 0 0 3 0"></path>
        <path d="M14 10v1"></path>
        <path d="M16 10v1"></path>
        <path d="M16.5 14a3.5 3.5 0 0 1-3 0"></path>
      </svg>
    ),
    cinema: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12"
      >
        <rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"></rect>
        <path d="M7 2v20"></path>
        <path d="M17 2v20"></path>
        <path d="M2 12h20"></path>
        <path d="M2 7h5"></path>
        <path d="M2 17h5"></path>
        <path d="M17 17h5"></path>
        <path d="M17 7h5"></path>
      </svg>
    ),
  };

  return (
    <div className={`text-${color}`}>
      {iconMap[type as keyof typeof iconMap] || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      )}
    </div>
  );
};

export default function Activities() {
  const t = useTranslations();
  const [activeActivity, setActiveActivity] = useState<string | null>(null);

  const activitiesData = [
    {
      id: "painting",
      color: "from-primary-100 to-primary-200",
      baseColor: "primary",
      borderColor: "border-primary",
      hoverBg: "hover:bg-primary-50",
    },
    {
      id: "reading",
      color: "from-secondary-100 to-secondary-200",
      baseColor: "secondary",
      borderColor: "border-secondary",
      hoverBg: "hover:bg-secondary-50",
    },
    {
      id: "theater",
      color: "from-accent-100 to-accent-200",
      baseColor: "accent",
      borderColor: "border-accent",
      hoverBg: "hover:bg-accent-50",
    },
    {
      id: "cinema",
      color: "from-fun-100 to-fun-200",
      baseColor: "fun",
      borderColor: "border-fun",
      hoverBg: "hover:bg-fun-50",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="activities"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-accent/5 rounded-full"></div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          {t("activities.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-neutral-600 max-w-2xl mx-auto mb-12"
        >
          {t("activities.subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activitiesData.map((activity, index) => (
            <motion.div
              key={activity.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className={`rounded-xl overflow-hidden cursor-pointer ${
                activeActivity === activity.id ? "ring-4 ring-primary/30" : ""
              }`}
              onClick={() =>
                setActiveActivity(
                  activity.id === activeActivity ? null : activity.id
                )
              }
            >
              <div
                className={`h-full p-6 bg-gradient-to-br ${activity.color} border-2 border-b-4 ${activity.borderColor} rounded-xl flex flex-col items-center text-center transition-all duration-300 ${activity.hoverBg}`}
              >
                <div className="mb-4 p-3 bg-white/80 rounded-full">
                  <ActivityIcon type={activity.id} color={activity.baseColor} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {t(`activities.items.${activity.id}.title`)}
                </h3>

                <p className="text-sm text-neutral-600 mb-4 flex-grow">
                  {t(`activities.items.${activity.id}.description`)
                    .split(" ")
                    .slice(0, 10)
                    .join(" ")}
                  {t(`activities.items.${activity.id}.description`).split(" ")
                    .length > 10
                    ? "..."
                    : ""}
                </p>

                <span className="inline-flex items-center text-sm font-medium text-primary">
                  {activeActivity === activity.id
                    ? t("activities.readLess")
                    : t("activities.readMore")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      activeActivity === activity.id ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {activeActivity && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-xl mb-8 border-l-4 border-primary"
          >
            <div className="flex items-start">
              <div className="p-4 bg-primary-50 rounded-full mr-6">
                <ActivityIcon
                  type={activeActivity}
                  color={
                    activitiesData.find((a) => a.id === activeActivity)
                      ?.baseColor || "primary"
                  }
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {t(`activities.items.${activeActivity}.title`)}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {t(`activities.items.${activeActivity}.description`)}
                </p>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">
                    {t("activities.benefits")}
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t(`activities.items.${activeActivity}.benefit1`)}</li>
                    <li>{t(`activities.items.${activeActivity}.benefit2`)}</li>
                    <li>{t(`activities.items.${activeActivity}.benefit3`)}</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          {/* <button className="mt-8 bg-primary hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
            {t("activities.viewAllButton")}
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
