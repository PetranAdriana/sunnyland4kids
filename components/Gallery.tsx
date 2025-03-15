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
  "/assets/gallery_images/465465117_9084642378236520_2967575499268519160_n.jpg",
  "/assets/gallery_images/465674827_122105043614611582_4119506859458123450_n.jpg",
  "/assets/gallery_images/472928199_122117392886611582_8283023779667986590_n.jpg",
  "/assets/gallery_images/473231126_122117392880611582_1888791232836949518_n.jpg",
  "/assets/gallery_images/473246221_122117392892611582_4663519613611725507_n.jpg",
  "/assets/gallery_images/474258806_17859735348343609_4165339850390133993_n.jpg",
  "/assets/gallery_images/475310721_17860456689343609_5689285685553263614_n.jpg",
  "/assets/gallery_images/475338232_17860456719343609_164047947656228980_n.jpg",
  "/assets/gallery_images/475349623_17860456731343609_2626904769015999078_n.jpg",
  "/assets/gallery_images/475349737_17860456701343609_2585982399493044230_n.jpg",
  "/assets/gallery_images/475375081_17860827816343609_6171196045621281371_n.jpg",
  "/assets/gallery_images/475378830_17860456710343609_5917543500389740275_n.jpg",
  "/assets/gallery_images/476073674_17861723160343609_2408291457065398851_n.jpg",
  "/assets/gallery_images/476089852_17861794158343609_4171365716574815555_n.jpg",
  "/assets/gallery_images/476112970_17861794110343609_4073303990865712575_n.jpg",
  "/assets/gallery_images/476133184_17861794128343609_4465827064279967656_n.jpg",
  "/assets/gallery_images/476136972_17861794137343609_1449579576863002474_n.jpg",
  "/assets/gallery_images/476138954_17861794101343609_2104704038251843664_n.jpg",
  "/assets/gallery_images/476169933_17861723190343609_4446869785137398221_n.jpg",
  "/assets/gallery_images/476278957_17861794098343609_4192598485548977119_n.jpg",
  "/assets/gallery_images/476304567_17861723211343609_1446562424709163327_n.jpg",
  "/assets/gallery_images/476367629_17861723232343609_7502488997888428644_n.jpg",
  "/assets/gallery_images/476376679_17861794155343609_6071608387528025440_n.jpg",
  "/assets/gallery_images/476387671_17861723199343609_4910905261990583774_n.jpg",
  "/assets/gallery_images/476446204_17861723247343609_3990812935646258653_n.jpg",
  "/assets/gallery_images/476532579_17861723223343609_3592586981180640364_n.jpg",
  "/assets/gallery_images/476624955_17861794113343609_4561345110442597429_n.jpg",
  "/assets/gallery_images/476871100_17861794140343609_8028419097164620055_n.jpg",
  "/assets/gallery_images/477748564_17862756432343609_2862445442508847562_n.jpg",
  "/assets/gallery_images/478382261_17862756414343609_8415258780020496038_n.jpg",
  "/assets/gallery_images/479116385_17862756390343609_8923889151915236205_n.jpg",
  "/assets/gallery_images/479443515_17862756399343609_8134092495979758593_n.jpg",
  "/assets/gallery_images/479510761_17862756423343609_1975017117153549070_n.jpg",
  "/assets/gallery_images/479558106_17862756456343609_2979747388371033987_n.jpg",
  "/assets/gallery_images/479716903_17863111311343609_8670171279034342692_n.jpg",
  "/assets/gallery_images/479917977_17863111335343609_5898484962393255161_n.jpg",
  "/assets/gallery_images/479925200_17862756447343609_77964919212995463_n.jpg",
  "/assets/gallery_images/479928039_17863111320343609_2521376055855715111_n.jpg",
  "/assets/gallery_images/480236447_17863111284343609_1586240577643283826_n.jpg",
  "/assets/gallery_images/480285492_17863111350343609_6208507712739644468_n.jpg",
  "/assets/gallery_images/WhatsApp Image 2025-03-03 at 15.10..jpeg",
  "/assets/gallery_images/WhatsApp Image 2025-03-03 at 15.10.44.jpeg",
  "/assets/gallery_images/WhatsApp Image 2025-03-03 at 15.10.50.jpeg",
  "/assets/gallery_images/483835736_17866210662343609_9131514109998053256_n.jpg",
  "/assets/gallery_images/483555092_17866210695343609_3961850938934148629_n.jpg",
  "/assets/gallery_images/483692366_17866210764343609_5033197705257768692_n.jpg",
  "/assets/gallery_images/483922207_17866210755343609_1249223678029186472_n.jpg"
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
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const lightboxVideoRef = useRef<HTMLVideoElement | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, galleryVideos.length);
    while (videoRefs.current.length < galleryVideos.length) {
      videoRefs.current.push(null);
    }
  }, []);

  useEffect(() => {
    if (!photoApi) return;
    setPhotoCount(photoApi.scrollSnapList().length);
    setPhotoCurrent(photoApi.selectedScrollSnap() + 1);
    photoApi.on("select", () =>
      setPhotoCurrent(photoApi.selectedScrollSnap() + 1)
    );
  }, [photoApi]);

  useEffect(() => {
    if (!videoApi) return;
    setVideoCount(videoApi.scrollSnapList().length);
    setVideoCurrent(videoApi.selectedScrollSnap() + 1);
    videoApi.on("select", () =>
      setVideoCurrent(videoApi.selectedScrollSnap() + 1)
    );
  }, [videoApi]);

  const openLightbox = (media: string) => {
    // Pause the previously playing video if it exists
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.pause();
    }

    setSelectedMedia(media);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";

    // Play the new video after a slight delay to ensure DOM is updated
    setTimeout(() => {
      if (lightboxVideoRef.current && media.endsWith(".mp4")) {
        lightboxVideoRef.current.play().catch((error) => {
          console.error("Video playback failed:", error);
        });
      }
    }, 100);
  };

  const closeLightbox = () => {
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.pause();
    }
    setSelectedMedia(null);
    setIsLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

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
      className="py-24 bg-gradient-to-b from-background to-neutral-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 z-10"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-accent/5 rounded-full"></div>

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
            <h3
              className="text-2xl font-bold text-center mb-8 text-neutral-800 cursor-pointer hover:text-primary transition-colors flex justify-center items-center"
              onClick={() => setShowAllPhotos(!showAllPhotos)}
            >
              {t("gallery.allPhotos") || "Toate fotografiile"}
              <span className="ml-2 text-md">{showAllPhotos ? "▲" : "▼"}</span>
            </h3>

            {showAllPhotos && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((src, index) => (
                  <motion.div
                    key={`grid-${index}`}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
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
            )}
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
                            ref={(el) => {
                              videoRefs.current[index] = el;
                            }}
                            src={src}
                            muted
                            loop
                            playsInline
                            onClick={(e) => e.stopPropagation()}
                            className="w-full h-full object-cover cursor-pointer"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                            onClick={() => openLightbox(src)}
                          >
                            <span className="text-white font-medium px-4 py-2 bg-primary/70 rounded-full flex items-center cursor-pointer">
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
            <h3
              className="text-2xl font-bold text-center mb-8 text-neutral-800 cursor-pointer hover:text-primary transition-colors flex justify-center items-center"
              onClick={() => setShowAllVideos(!showAllVideos)}
            >
              {t("gallery.allVideos") || "Toate videoclipurile"}
              <span className="ml-2 text-md">{showAllVideos ? "▲" : "▼"}</span>
            </h3>

            {showAllVideos && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryVideos.map((src, index) => (
                  <motion.div
                    key={`grid-video-${index}`}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="aspect-video relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
                  >
                    <video
                      src={src}
                      muted
                      loop
                      playsInline
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      onClick={() => openLightbox(src)}
                    >
                      <div className="h-14 w-14 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer">
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
            )}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-screen-lg h-auto max-h-[90vh] p-4">
            {selectedMedia.endsWith(".mp4") ||
            selectedMedia.endsWith(".mov") ? (
              <video
                ref={lightboxVideoRef}
                src={selectedMedia}
                controls
                autoPlay
                muted
                className="max-h-full max-w-full w-full h-auto mx-auto"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <Image
                src={selectedMedia}
                alt="Enlarged media"
                width={1200}
                height={800}
                sizes="100vw"
                className="max-h-full max-w-full w-full h-auto mx-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
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
