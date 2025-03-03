import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations();
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t("contact.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              {t("contact.info.title")}
            </h3>
            <ul className="space-y-4 text-neutral-700">
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-primary" />
                <span>{t("contact.info.address")}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-primary" />
                <a href="tel:0723506199" className="hover:text-primary-600">
                  {t("contact.info.phone")}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-primary" />
                <a
                  href="mailto:Sunnylandkids24@gmail.com"
                  className="hover:text-primary-600"
                >
                  {t("contact.info.email")}
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="w-6 h-6 mr-3 text-primary" />
                <span>{t("contact.info.areas")}</span>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-primary">
                {t("contact.social.title")}
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.tiktok.com/@sunny_land_kids"
                  target="_blank"
                  className="text-primary hover:text-primary-600"
                >
                  {t("contact.social.tiktok")}
                </a>
                <a
                  href="https://www.instagram.com/sunny_land_kids"
                  target="_blank"
                  className="text-primary hover:text-primary-600"
                >
                  {t("contact.social.instagram")}
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              {t("contact.form.title")}
            </h3>
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-neutral-700">
                  {t("contact.form.name")}
                </label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-neutral-700">
                  {t("contact.form.email")}
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-neutral-700"
                >
                  {t("contact.form.message")}
                </label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary-600 w-full"
              >
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
