"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ChevronDown, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isGameDropdownOpen, setIsGameDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-8 h-8 mr-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">Theria Games</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/all-game-wikis" className="nav-link">Wiki's</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/support-center" className="nav-link">Support</Link>
            <Link href="/account" className="nav-link">Account</Link>
          </div>

          {/* Game Selection Dropdown */}
          <div className="hidden md:block relative w-64">
            <Button
              variant="outline"
              className="w-full bg-zinc-900 border-zinc-700 text-white"
              onClick={() => setIsGameDropdownOpen(!isGameDropdownOpen)}
            >
              <span className="mr-auto">Select Game</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            {isGameDropdownOpen && (
              <div className="absolute z-50 mt-2 w-full bg-zinc-900 border border-zinc-700 shadow-lg rounded-md p-2">
                <div className="py-1 space-y-1">
                  <Link href="/evony-wiki">
                    <div className="flex items-center px-3 py-2 text-white hover:bg-zinc-800 rounded-md">
                      Evony: The King's Return
                    </div>
                  </Link>
                  <Link href="/last-war-survival-wiki">
                    <div className="flex items-center px-3 py-2 text-white hover:bg-zinc-800 rounded-md">
                      Last War: Survival
                    </div>
                  </Link>
                  <Link href="/age-of-empires-mobile-wiki">
                    <div className="flex items-center px-3 py-2 text-white hover:bg-zinc-800 rounded-md">
                      Age of Empires Mobile
                    </div>
                  </Link>
                  <Link href="/legend-of-mushroom-wiki">
                    <div className="flex items-center px-3 py-2 text-white hover:bg-zinc-800 rounded-md">
                      Legend of Mushroom
                    </div>
                  </Link>
                  <Link href="/all-game-wikis">
                    <div className="flex items-center px-3 py-2 text-white hover:bg-zinc-800 rounded-md font-medium">
                      View All Wiki's
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Search and Account */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/search-results" className="text-white hover:text-zinc-300">
              <Search className="h-5 w-5" />
            </Link>
            <Link href="/account" className="text-white hover:text-zinc-300">
              <div className="relative h-6 w-6 rounded-full bg-zinc-700 flex items-center justify-center">
                <span className="text-xs">A</span>
              </div>
            </Link>
            <Link href="https://discord.gg/theriagames" className="text-white hover:text-zinc-300" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0
                 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057
                 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077
                 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077
                 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077
                 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176
                 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 py-2">
          <div className="px-4 space-y-3">
            <Link href="/" className="block py-2 text-white">Home</Link>
            <Link href="/all-game-wikis" className="block py-2 text-white">Wiki's</Link>
            <Link href="/blog" className="block py-2 text-white">Blog</Link>
            <Link href="/support-center" className="block py-2 text-white">Support</Link>
            <Link href="/account" className="block py-2 text-white">Account</Link>

            <div className="pt-2 pb-2">
              <p className="text-white font-medium mb-2">Select Game</p>
              <div className="space-y-2">
                <Link href="/evony-wiki">
                  <div className="py-1 text-zinc-300 hover:text-white">
                    Evony: The King's Return
                  </div>
                </Link>
                <Link href="/last-war-survival-wiki">
                  <div className="py-1 text-zinc-300 hover:text-white">
                    Last War: Survival
                  </div>
                </Link>
                <Link href="/all-game-wikis">
                  <div className="py-1 text-white font-medium">
                    View All Wiki's
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
