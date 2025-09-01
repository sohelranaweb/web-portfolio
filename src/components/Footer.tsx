// src/components/Footer.tsx
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e242c] text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Lets talk about</h2>
          <p className="text-sm leading-relaxed mb-4">
            Passionate Junior MERN Stack Developer | Coding enthusiast building
            web solutions | Lifelong learner | Explorer of endless possibilities
            in tech
          </p>
          <Button className="bg-[#c3c8a7] text-black hover:bg-[#a7ab8d]">
            Learn more
          </Button>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Links</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                › Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                › About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                › Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                › Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                › Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                › Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                › Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                › Business Strategy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                › Data Analysis
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                › Graphic Design
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Have a Questions?</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span>+2 392 3929 210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>info@yourdomain.com</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-400 mt-12">
        Copyright © 2025 All rights reserved
      </div>
    </footer>
  );
}
