import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full border-b bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Tech Buddy Notes
        </h1>

        {/* Nav */}
        <nav className="flex items-center gap-2">
          <NavLink to="/">
            <Button variant="ghost" className="text-gray-700 hover:text-black hover:bg-gray-100">
              Home
            </Button>
          </NavLink>

          <NavLink to="/notes">
            <Button variant="ghost" className="text-gray-700 hover:text-black hover:bg-gray-100">
              Notes
            </Button>
          </NavLink>

          <NavLink to="/resources">
            <Button variant="ghost" className="text-gray-700 hover:text-black hover:bg-gray-100">
              Resources
            </Button>
          </NavLink>
        </nav>
      </div>
    </header>

  );
}