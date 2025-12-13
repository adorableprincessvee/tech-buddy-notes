import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold text-gray-800">
          Tech Buddy Notes
        </h1>

        {/* Nav */}
        <nav className="flex items-center gap-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Notes</Button>
          <Button variant="ghost">Resources</Button>
        </nav>
      </div>
    </header>
  );
}
