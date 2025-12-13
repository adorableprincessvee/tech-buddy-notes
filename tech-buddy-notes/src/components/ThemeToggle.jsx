"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // adjust path if needed

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
      {dark ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}