"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/assets/gallery_images/465465117_9084642378236520_2967575499268519160_n.jpg"
            alt="SunnyLand4Kids Logo"
            className="h-12 w-auto mr-3"
            width={48}
            height={48}
          />
          <div className="text-2xl font-bold text-primary">
            {t("app.title")}
          </div>
        </div>
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a href="#home" className="text-neutral-700 hover:text-primary">
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a href="#about" className="text-neutral-700 hover:text-primary">
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a href="#services" className="text-neutral-700 hover:text-primary">
              {t("navbar.services")}
            </a>
          </li>
          <li>
            <a
              href="#activities"
              className="text-neutral-700 hover:text-primary"
            >
              {t("navbar.activities")}
            </a>
          </li>
          <li>
            <a href="#gallery" className="text-neutral-700 hover:text-primary">
              {t("navbar.gallery")}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-neutral-700 hover:text-primary">
              {t("navbar.contact")}
            </a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="text-primary hover:text-primary-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute w-full py-4 animate-accordion-down">
          <ul className="flex flex-col space-y-4 px-4">
            <li>
              <a
                href="#home"
                className="text-neutral-700 hover:text-primary"
                onClick={closeMenu}
              >
                {t("navbar.home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-neutral-700 hover:text-primary"
                onClick={closeMenu}
              >
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-neutral-700 hover:text-primary"
                onClick={closeMenu}
              >
                {t("navbar.services")}
              </a>
            </li>
            <li>
              <a
                href="#activities"
                className="text-neutral-700 hover:text-primary"
                onClick={closeMenu}
              >
                {t("navbar.activities")}
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="text-neutral-700 hover:text-primary"
                onClick={closeMenu}
              >
                {t("navbar.gallery")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-neutral-700 hover:text-primary"
                onClick={closeMenu}
              >
                {t("navbar.contact")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
