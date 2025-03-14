"use client";

import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [language, setLanguage] = useState("en");

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "es", name: "Español" },
    { code: "it", name: "Italiano" },
    { code: "pt", name: "Português" },
    { code: "nl", name: "Nederlands" },
    { code: "vi", name: "Tiếng Việt" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "id", name: "Bahasa Indonesia" },
    { code: "pl", name: "Polski" },
    { code: "ru", name: "Русский" },
    { code: "th", name: "ไทย" },
    { code: "tr", name: "Türkçe" },
  ];

  return (
    <footer className="bg-black text-white py-8 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Theria Games</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="https://discord.gg/theriagames" className="text-zinc-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </Link>
              <Link href="https://www.youtube.com/@officialtheriagames" className="text-zinc-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                Youtube
              </Link>
              <Link href="https://www.reddit.com/user/OfficialTheriaGames/" className="text-zinc-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                Reddit
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/all-game-wikis" className="text-zinc-400 hover:text-white">Wiki's</Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="/support-center" className="text-zinc-400 hover:text-white">Support</Link>
              </li>
              <li>
                <Link href="/account" className="text-zinc-400 hover:text-white">Account</Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-zinc-400 hover:text-white">Sustainability</Link>
              </li>
            </ul>
          </div>

          {/* Language Selector */}
          <div>
            <h3 className="font-bold text-lg mb-4">Language</h3>
            <div className="relative inline-block">
              <button
                className="flex items-center space-x-2 bg-zinc-900 text-white px-3 py-2 rounded border border-zinc-700"
                onClick={() => document.getElementById("language-dropdown")?.classList.toggle("hidden")}
              >
                <img
                  src="https://ext.same-assets.com/3229498154/1095671012.svg+xml"
                  alt="Flag"
                  className="w-5 h-5"
                />
                <span className="mr-1">{language.toUpperCase()}</span>
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              <div
                id="language-dropdown"
                className="absolute z-10 hidden mt-2 py-2 w-40 bg-zinc-900 rounded-md shadow-xl border border-zinc-700"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full text-left px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    onClick={() => {
                      setLanguage(lang.code);
                      document.getElementById("language-dropdown")?.classList.add("hidden");
                    }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-500 mb-4 md:mb-0">
            © 2025 Theria Games Ltd
          </div>
          <div className="flex space-x-4">
            <Link href="/terms-of-service" className="text-zinc-500 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/acceptable-use-policy" className="text-zinc-500 hover:text-white">
              Acceptable Use Policy
            </Link>
            <Link href="/privacy-policy" className="text-zinc-500 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
