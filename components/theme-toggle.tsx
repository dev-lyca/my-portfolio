"use client";

import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Switch
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      aria-label="Toggle theme"
      thumbIconChecked={<Moon className="h-3 w-3 text-primary-foreground" />}
      thumbIconUnchecked={<Sun className="h-3 w-3 text-foreground" />}
    />
  );
}
