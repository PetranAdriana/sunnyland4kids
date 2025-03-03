"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const galleryImages = [
  "/assets/465674827_122105043614611582_4119506859458123450_n.jpg",
  "/assets/472928199_122117392886611582_8283023779667986590_n.jpg",
  "/assets/473231126_122117392880611582_1888791232836949518_n.jpg",
  "/assets/473246221_122117392892611582_4663519613611725507_n.jpg",
  "/assets/474258806_17859735348343609_4165339850390133993_n.jpg",
];

export default function Gallery() {
  const t = useTranslations();
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 gradient-heading">
          {t("gallery.title")}
        </h2>

        <p className="text-center text-neutral-600 mb-8 max-w-2xl mx-auto">
          {/* Add any gallery description or subtitle here */}
        </p>

        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
              align: "center",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {galleryImages.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden rounded-xl border-0 shadow-lg">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={src}
                          alt={`Gallery Image ${index + 1}`}
                          fill
                          className="object-cover transition-all duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-primary hover:text-primary-600 border-none" />
            <CarouselNext className="right-2 bg-white/80 hover:bg-white text-primary hover:text-primary-600 border-none" />
          </Carousel>

          <div className="flex justify-center items-center mt-4 text-sm text-neutral-500">
            <span>
              {current} / {count}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
