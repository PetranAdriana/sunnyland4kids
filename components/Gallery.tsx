"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
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
import { motion } from "framer-motion";

// Gallery media - photos and videos
const galleryImages = [
  "/assets/465674827_122105043614611582_4119506859458123450_n.jpg",
  "/assets/472928199_122117392886611582_8283023779667986590_n.jpg",
  "/assets/473231126_122117392880611582_1888791232836949518_n.jpg",
  "/assets/473246221_122117392892611582_4663519613611725507_n.jpg",
  "/assets/474258806_17859735348343609_4165339850390133993_n.jpg",
];

const galleryVideos = [
  "/assets/video/WhatsApp Video 2025-03-03 at 12.43.48.mp4",
  "/assets/video/WhatsApp Video 2025-03-03 at 12.43.49.mp4",
  "/assets/video/WhatsApp Video 2025-03-03 at 12.43.50.mp4",
  "/assets/video/WhatsApp Video 2025-03-03 at 12.44.48.mp4",
  "/assets/video/WhatsApp Video 2025-03-03 at 12.45.01.mp4",
  "/assets/video/WhatsApp Video 2025-03-03 at 12.45.25.mp4",
  "/assets/video/WhatsApp Video 2025-03-03 at 15.10.56.mp4",
];

export default function Gallery() {
  const t = useTranslations();
  const [photoApi, setPhotoApi] = useState<CarouselApi | null>(null);
  const [videoApi, setVideoApi] = useState<CarouselApi | null>(null);
  const [photoCurrent, setPhotoCurrent] = useState(0);
  const [photoCount, setPhotoCount] = useState(0);
  const [videoCurrent, setVideoCurrent] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Effect for photo carousel
  useEffect(() => {
    if (!photoApi) return;
    setPhotoCount(photoApi.scrollSnapList().length);
    setPhotoCurrent(photoApi.selectedScrollSnap() + 1);
    photoApi.on("select", () =>
      setPhotoCurrent(photoApi.selectedScrollSnap() + 1)
    );
  }, [photoApi]);

  // Effect for video carousel
  useEffect(() => {
    if (!videoApi) return;
    setVideoCount(videoApi.scrollSnapList().length);
    setVideoCurrent(videoApi.selectedScrollSnap() + 1);
    videoApi.on("select", () =>
      setVideoCurrent(videoApi.selectedScrollSnap() + 1)
    );
  }, [videoApi]);

  // Open lightbox with selected media
  const openLightbox = (media: string) => {
    setSelectedMedia(media);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedMedia(null);
    setIsLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-background to-neutral-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("gallery.title")}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t("gallery.subtitle") ||
              "Privește momentele speciale din viața Sunny Land Kids"}
          </p>
        </motion.div>

        {/* Tabs for Photos and Videos */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-neutral-100 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "photos"
                  ? "bg-primary text-white shadow-md"
                  : "text-neutral-600 hover:text-primary"
              }`}
            >
              {t("gallery.photosTab") || "Fotografii"}
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "videos"
                  ? "bg-primary text-white shadow-md"
                  : "text-neutral-600 hover:text-primary"
              }`}
            >
              {t("gallery.videosTab") || "Videoclipuri"}
            </button>
          </div>
        </div>

        {/* Photos Tab Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={activeTab === "photos" ? "visible" : "hidden"}
          className={`${activeTab === "photos" ? "block" : "hidden"}`}
        >
          <div className="max-w-6xl mx-auto">
            <Carousel
              setApi={setPhotoApi}
              className="w-full"
              opts={{ loop: true, align: "center" }}
              plugins={[Autoplay({ delay: 4000 })]}
            >
              <CarouselContent>
                {galleryImages.map((src, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 pl-4"
                  >
                    <motion.div variants={itemVariants} className="p-1">
                      <Card
                        className="overflow-hidden rounded-xl border-none shadow-lg group cursor-pointer"
                        onClick={() => openLightbox(src)}
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            className="object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <span className="text-white font-medium px-3 py-1 bg-primary/70 rounded-full text-sm">
                              {t("gallery.viewLarger") || "Vezi mai mare"}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-primary-50 text-primary hover:text-primary-600 border-none shadow-md" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-primary-50 text-primary hover:text-primary-600 border-none shadow-md" />
            </Carousel>
            <div className="flex justify-center items-center mt-4 text-sm text-neutral-500">
              <span>
                {photoCurrent} / {photoCount}
              </span>
            </div>
          </div>

          {/* Photos Grid View */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-neutral-800">
              {t("gallery.allPhotos") || "Toate fotografiile"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={`grid-${index}`}
                  variants={itemVariants}
                  className="aspect-square relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
                  onClick={() => openLightbox(src)}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Videos Tab Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={activeTab === "videos" ? "visible" : "hidden"}
          className={`${activeTab === "videos" ? "block" : "hidden"}`}
        >
          <div className="max-w-6xl mx-auto">
            <Carousel
              setApi={setVideoApi}
              className="w-full"
              opts={{ loop: true, align: "center" }}
            >
              <CarouselContent>
                {galleryVideos.map((src, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-2/3 pl-4"
                  >
                    <motion.div variants={itemVariants} className="p-1">
                      <Card className="overflow-hidden rounded-xl border-none shadow-lg group">
                        <div className="relative aspect-video overflow-hidden">
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={src}
                            muted
                            loop
                            playsInline
                            onClick={() => openLightbox(src)}
                            onMouseEnter={() =>
                              videoRefs.current[index]?.play()
                            }
                            onMouseLeave={() =>
                              videoRefs.current[index]?.pause()
                            }
                            className="w-full h-full object-cover cursor-pointer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium px-4 py-2 bg-primary/70 rounded-full flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 mr-1"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                              {t("gallery.playVideo") || "Redă video"}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-primary-50 text-primary hover:text-primary-600 border-none shadow-md" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-primary-50 text-primary hover:text-primary-600 border-none shadow-md" />
            </Carousel>
            <div className="flex justify-center items-center mt-4 text-sm text-neutral-500">
              <span>
                {videoCurrent} / {videoCount}
              </span>
            </div>
          </div>

          {/* Videos Grid View */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-neutral-800">
              {t("gallery.allVideos") || "Toate videoclipurile"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryVideos.map((src, index) => (
                <motion.div
                  key={`grid-video-${index}`}
                  variants={itemVariants}
                  className="aspect-video relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
                >
                  <video
                    src={src}
                    muted
                    loop
                    playsInline
                    onClick={() => openLightbox(src)}
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-primary/80 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 ml-1"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative max-w-screen-lg max-h-screen h-full w-full flex items-center justify-center p-4">
            {selectedMedia.endsWith(".mp4") ||
            selectedMedia.endsWith(".mov") ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                className="max-h-full max-w-full"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <div className="relative aspect-auto max-h-full">
                <Image
                  src={selectedMedia}
                  alt="Enlarged media"
                  fill
                  className="object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
            <button
              className="absolute top-4 right-4 text-white hover:text-primary bg-black/50 rounded-full p-2"
              onClick={closeLightbox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
