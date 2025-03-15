import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { GlobeIcon } from "@radix-ui/react-icons";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const newLocale = locale === "ro" ? "en" : "ro";

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2 rounded-full px-3 py-1 bg-transparent text-primary border-primary hover:bg-primary-50 hover:text-primary-600"
      asChild
    >
      <Link href="/" locale={newLocale}>
        <GlobeIcon className="w-4 h-4" />
        <span>{newLocale.toUpperCase()}</span>
      </Link>
    </Button>
  );
}
