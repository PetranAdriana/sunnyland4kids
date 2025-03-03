import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t("about.title")}
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 text-neutral-700">
            {t("about.description1")}
          </p>
          <p className="text-lg text-neutral-700">{t("about.description2")}</p>
        </div>
      </div>
    </section>
  );
}
