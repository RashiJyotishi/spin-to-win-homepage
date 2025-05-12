
import React from 'react';
import { Dices } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pt-12 pb-6 bg-black/30 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dices className="h-6 w-6 text-casino-purple" />
              <span className="text-xl font-bold bg-gradient-to-r from-casino-purple to-casino-blue bg-clip-text text-transparent">LuckyCasino</span>
            </div>
            <p className="text-gray-400 text-sm">
              Experience the thrill of online gambling with our range of exciting games.
              Play responsibly.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Games</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Plinko</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Limbo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">All Games</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Responsible Gaming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Email Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © 2025 LuckyCasino. All rights reserved. Gambling can be addictive. Play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
