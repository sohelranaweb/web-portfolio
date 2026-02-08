// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// // Navigation links array to be used in both desktop and mobile menus
// const navigationLinks = [
//   { href: "#", label: "Home", active: true },
//   { href: "#about", label: "About" },
//   { href: "skills", label: "Skills" },
//   { href: "projects", label: "Projects" },
//   { href: "blog", label: "Blog" },
//   { href: "contact", label: "Contact" },
// ];

// export default function Navbar() {
//   return (
//     <header className="lg:max-w-9/12 mx-auto border-b px-4 md:px-6">
//       <div className="flex h-16 items-center justify-between gap-4">
//         {/* Left side */}
//         <div className="flex items-center gap-2">
//           {/* Mobile menu trigger */}
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 className="group size-8 md:hidden"
//                 variant="ghost"
//                 size="icon"
//               >
//                 <svg
//                   className="pointer-events-none"
//                   width={16}
//                   height={16}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M4 12L20 12"
//                     className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
//                   />
//                   <path
//                     d="M4 12H20"
//                     className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
//                   />
//                   <path
//                     d="M4 12H20"
//                     className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
//                   />
//                 </svg>
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent align="start" className="w-36 p-1 md:hidden">
//               <NavigationMenu className="max-w-none *:w-full">
//                 <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
//                   {navigationLinks.map((link, index) => (
//                     <NavigationMenuItem key={index} className="w-full">
//                       <NavigationMenuLink
//                         href={link.href}
//                         className="py-1.5"
//                         active={link.active}
//                       >
//                         {link.label}
//                       </NavigationMenuLink>
//                     </NavigationMenuItem>
//                   ))}
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </PopoverContent>
//           </Popover>
//           {/* Main nav */}
//           <div className="flex items-center gap-6">
//             {/* Left side: Logo */}
//             <a href="#" className="flex items-center gap-2 font-bold text-xl">
//               <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold">
//                 S
//               </span>
//               <span>SOHEL</span>
//             </a>
//             {/* Desktop Nav */}
//             <div className="hidden md:flex items-center gap-6">
//               <NavigationMenu>
//                 <NavigationMenuList className="flex items-center gap-4">
//                   {navigationLinks.map((link, index) => (
//                     <NavigationMenuItem key={index}>
//                       <NavigationMenuLink
//                         href={link.href}
//                         className={`px-3 py-2 font-medium transition-colors rounded-md ${
//                           link.active
//                             ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white"
//                             : "text-gray-700 hover:text-purple-600"
//                         }`}
//                       >
//                         {link.label}
//                       </NavigationMenuLink>
//                     </NavigationMenuItem>
//                   ))}
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </div>
//           </div>
//         </div>
//         {/* Right side */}
//         <div className="flex items-center gap-2">
//           <Button
//             asChild
//             className="mt-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold"
//           >
//             <a href="/cv.pdf" download>
//               Download CV
//             </a>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navigationLinks = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "blog", label: "Blog" },
  { href: "education", label: "Educational" },
  { href: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll with slower effect
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 70; // adjust for sticky navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      for (let link of navigationLinks) {
        const section = document.getElementById(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = link.href;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="lg:max-w-9/12 mx-auto sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <button
                        onClick={() => handleScroll(link.href)}
                        className={`w-full text-left py-1.5 px-2 rounded-md ${
                          activeSection === link.href
                            ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white"
                            : "text-gray-700 hover:text-purple-600"
                        }`}
                      >
                        {link.label}
                      </button>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Main nav */}
          <div className="flex items-center gap-6">
            {/* Left side: Logo */}
            <a href="#" className="flex items-center gap-2 font-bold text-xl">
              <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold">
                S
              </span>
              <span>SOHEL</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-4">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <button
                        onClick={() => handleScroll(link.href)}
                        className={`px-3 py-2 font-medium transition-colors rounded-md ${
                          activeSection === link.href
                            ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white"
                            : "text-gray-700 hover:text-purple-600"
                        }`}
                      >
                        {link.label}
                      </button>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="mt-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold"
          >
            <a
              href="https://drive.google.com/file/d/18iGK2fBchAH-rzANGafD3OrcA24rIDzR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
