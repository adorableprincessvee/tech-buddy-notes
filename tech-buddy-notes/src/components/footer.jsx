import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-black min-h-screen"
      }
    >
      <footer
        className={
          dark
            ? "w-full border-t bg-gray-900 text-white absolute bottom-0"
            : "w-full border-t bg-gray-50 text-black absolute bottom-0"
        }
      >
        <div
          className={
            dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
          }
        >
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
            <p>© {new Date().getFullYear()} Tech Buddy Notes</p>
            <p>Built with React + Tailwind + shadcn/ui</p>
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-gray-100"
            >
              {dark ? <Sun size={18} className="text text-yellow-400" /> : <Moon size={18} className="text-blue-400" />}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}