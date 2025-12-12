import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold text-gray-900">
          Tech Buddy Notes
        </h1>

        {/* Nav */}
        <nav className="flex items-center gap-2">
          <Button variant="ghost"className="text-gray-700 hover:text-black hover:bg-gray-100">
            Home
          </Button>

          <Button variant="ghost"className="text-gray-700 hover:text-black hover:bg-gray-100"
          >
            Notes
          </Button>

          <Button variant="ghost"className="text-gray-700 hover:text-black hover:bg-gray-100">
            Resources
          </Button>
        </nav>
      </div>
    </header>
  );
}
