import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const links: { to: string; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skeletons", label: "Skeletons" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <Layers className="h-5 w-5" />
          MyApp
        </Link>
        <nav className="flex items-center gap-1">
          {links.map(({ to, label }) => (
            <Button key={to} variant="ghost" size="sm" asChild>
              <Link to={to} className="relative">
                {label}
                {pathname === to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
