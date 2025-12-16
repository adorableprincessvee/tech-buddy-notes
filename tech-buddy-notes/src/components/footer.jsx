import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 absolute bottom-0 dark:bg-gray-950 dark:text-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-600">
        <p className="text-black dark:text-gray-200">© {new Date().getFullYear()} Tech Buddy Notes</p>
        <p className="text-black dark:text-gray-200">Built with React + Tailwind + shadcn/ui</p>
        <ThemeToggle />
      </div>
    </footer>
  );
}