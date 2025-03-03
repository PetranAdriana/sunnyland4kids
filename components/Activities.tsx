import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function Activities() {
  const t = useTranslations();
  const activitiesData = [
    { id: "painting" },
    { id: "reading" },
    { id: "theater" },
    { id: "cinema" },
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t("activities.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activitiesData.map((activity) => (
            <Card
              key={activity.id}
              className="border-none shadow-md bg-gradient-to-br from-white to-neutral-50 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-xl text-secondary">
                  {t(`activities.items.${activity.id}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  {t(`activities.items.${activity.id}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
