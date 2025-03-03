import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const newLocale = locale === "en" ? "ro" : "en";

  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-full px-3 py-1 bg-transparent text-white hover:bg-white/20 border-white"
    >
      <Link href="/" locale={newLocale}>
        {newLocale.toUpperCase()}
      </Link>
    </Button>
  );
}
