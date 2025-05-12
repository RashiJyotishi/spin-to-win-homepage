
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="backdrop-blur-md bg-black/30 border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <Dices className="h-6 w-6 text-casino-purple" />
          <span className="text-xl font-bold bg-gradient-to-r from-casino-purple to-casino-blue bg-clip-text text-transparent">LuckyCasino</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#" className="nav-link active">Games</a>
          <a href="#" className="nav-link">Promotions</a>
          <a href="#" className="nav-link">VIP</a>
          <a href="#" className="nav-link">Support</a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="border-purple-500/50 bg-transparent text-white hover:bg-purple-500/10">Sign In</Button>
          <Button className="bg-casino-purple hover:bg-casino-purple/90">Register</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
