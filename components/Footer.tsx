import { Instagram, Globe, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/465465117_9084642378236520_2967575499268519160_n.jpg"
            alt="SunnyLand4Kids Logo"
            className="h-16 w-auto rounded-full shadow-lg"
            width={200}
            height={200}
          />
        </div>
        <p className="mb-6 text-neutral-300">{t("footer.copyright")}</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/sunny_land_kids"
            target="_blank"
            className="text-neutral-300 hover:text-primary"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@sunny_land_kids"
            target="_blank"
            className="text-neutral-300 hover:text-primary"
          >
            <Globe className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61568347480056"
            target="_blank"
            className="text-neutral-300 hover:text-primary"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
