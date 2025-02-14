"use client";

import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400 py-8 mt-10 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              On-Pass Password Manager
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Securely store and manage your passwords with ease. Your security
              is our top priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-gray-800 dark:hover:text-gray-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Connect With Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" />
              </a>
            </div>
            <div className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> support@passwordmanager
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Phone className="h-4 w-4" /> +91-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-4 text-center text-gray-600 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} On-Pass. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
