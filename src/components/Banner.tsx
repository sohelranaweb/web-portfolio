"use client";

import { Button } from "@/components/ui/button";
import Image from "../assets/images/about-img.jpeg";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-green-50 via-pink-50 to-purple-100 py-16 px-6"
    >
      <div className="max-w-9/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hello, I’m
            <span className="text-gray-900"> Sohel Rana</span>
          </h1>

          <h1 className="text-xl font-bold">MERN Stack Developer</h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I'm a Freelance{" "}
            <span className="font-semibold">UI/UX Designer</span> and{" "}
            <span className="font-semibold">Developer</span> based in London,
            England. I strive to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md">
              Hire Me!
            </Button>

            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1rgNGLhsKPsYDlmHgJGuGCl79FKF6GOVH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-purple-100 text-center rounded-lg py-6 shadow">
              <h3 className="text-2xl font-bold text-gray-900">3 Y.</h3>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
            <div className="bg-purple-100 text-center rounded-lg py-6 shadow">
              <h3 className="text-2xl font-bold text-gray-900">25+</h3>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-purple-100 text-center rounded-lg py-6 shadow">
              <h3 className="text-2xl font-bold text-gray-900">8</h3>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Image */}

        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <img
            src={Image}
            alt="Sohel Rana - UI/UX Designer and Developer"
            className="rounded-2xl shadow-lg object-cover w-full max-w-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
