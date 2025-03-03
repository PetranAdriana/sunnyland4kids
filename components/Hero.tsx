import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();
  return (
    <header id="home" className="relative h-[75vh] overflow-hidden pt-16">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="/assets/video/WhatsApp Video 2025-03-03 at 15.10.56.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-900/40 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center  px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-neutral-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            {t("hero.subtitle")}
          </p>
          <p className="text-md md:text-xl mb-8 max-w-2xl mx-auto text-neutral-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            {t("hero.description")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-600  rounded-full px-8"
          >
            <a className="text-primary-500" href="#contact">
              {t("hero.button")}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
