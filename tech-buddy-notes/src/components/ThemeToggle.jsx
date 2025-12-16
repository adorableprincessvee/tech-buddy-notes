"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // adjust path if needed
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);

    // Add/remove Tailwind's `dark` class on <html>
    if (!dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button onClick={toggleTheme} variant="default">
      {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon className="text-blue-600" />}
    </Button>
  );
}