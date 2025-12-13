import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 absolute bottom-0 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Tech Buddy Notes</p>
        <p>Built with React + Tailwind + shadcn/ui</p>
        <ThemeToggle />
      </div>
    </footer>
  );
}