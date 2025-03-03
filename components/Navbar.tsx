"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Toggle between 'en' and 'ro'
  const newLocale = locale === "en" ? "ro" : "en";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/assets/465465117_9084642378236520_2967575499268519160_n.jpg"
            alt="SunnyLand4Kids Logo"
            className="h-12 w-auto mr-3"
            width={48}
            height={48}
          />
          <div className="text-2xl font-bold text-primary">
            {t("app.title")}
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-primary transition-colors">
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary transition-colors">
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-primary transition-colors"
            >
              {t("navbar.services")}
            </a>
          </li>
          <li>
            <a
              href="#activities"
              className="hover:text-primary transition-colors"
            >
              {t("navbar.activities")}
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-primary transition-colors">
              {t("navbar.gallery")}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t("navbar.contact")}
            </a>
          </li>
          <li>
            <Link
              href="/"
              locale={newLocale}
              className="px-3 py-1 bg-primary text-white rounded-full hover:bg-primary-600 transition-colors"
            >
              {newLocale.toUpperCase()}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/"
            locale={newLocale}
            className="px-2 py-1 bg-primary text-white rounded-full hover:bg-primary-600 transition-colors text-sm"
          >
            {newLocale.toUpperCase()}
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="p-1 text-primary hover:text-primary-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute w-full py-4 animate-accordion-down">
          <ul className="flex flex-col space-y-4 px-4">
            <li>
              <a
                href="#home"
                className="block hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {t("navbar.home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {t("navbar.services")}
              </a>
            </li>
            <li>
              <a
                href="#activities"
                className="block hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {t("navbar.activities")}
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="block hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {t("navbar.gallery")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-primary transition-colors"
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
