import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations();

  const servicesData = [
    {
      id: "afterschool",
      icon: "🕒",
    },
    {
      id: "workshops",
      icon: "🎨",
    },
    {
      id: "playground",
      icon: "🎠",
    },
    {
      id: "arts",
      icon: "🎭",
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-heading">
          {t("services.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className="text-center hover-lift border-none shadow-lg"
            >
              <CardHeader>
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-primary-600">
                  {t(`services.items.${service.id}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  {t(`services.items.${service.id}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
