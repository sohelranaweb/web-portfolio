// components/AboutSection.tsx
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Download, Folder } from "lucide-react";
// import Image from "../assets/images/banner-img.png";

// export default function About() {
//   return (
//     <section className="w-full bg-gray-50 py-16">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left - Profile Image */}
//         <div className="flex justify-center relative">
//           <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-4">
//             <img
//               src={Image}
//               alt="Profile"
//               className="rounded-xl w-[320px] h-auto object-cover"
//             />
//             {/* Social Icons */}
//             <Card className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-72 shadow-xl">
//               <CardContent className="flex justify-center space-x-6 py-4">
//                 <a href="#" className="text-purple-600 hover:text-purple-800">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#" className="text-purple-600 hover:text-purple-800">
//                   <i className="fab fa-dribbble"></i>
//                 </a>
//                 <a href="#" className="text-purple-600 hover:text-purple-800">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a href="#" className="text-purple-600 hover:text-purple-800">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a href="#" className="text-purple-600 hover:text-purple-800">
//                   <i className="fab fa-behance"></i>
//                 </a>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Right - Text */}
//         <div className="space-y-6">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//             I am Professional User <br /> Experience Designer
//           </h1>
//           <p className="text-gray-600 leading-relaxed">
//             I design and develop services for customers specializing in creating
//             stylish, modern websites, web services, and online stores. My
//             passion is to design digital user experiences.
//           </p>
//           <p className="text-gray-600 leading-relaxed">
//             I design and develop services for customers specializing in creating
//             stylish, modern websites, web services.
//           </p>
//           <div className="flex gap-4">
//             <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md">
//               <Folder className="mr-2 h-4 w-4" /> My Projects
//             </Button>
//             <Button variant="outline" className="font-semibold">
//               <Download className="mr-2 h-4 w-4" /> Download CV
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Button } from "@/components/ui/button";
import { Folder, Download } from "lucide-react";

import Image from "../assets/images/banner-img.png";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gray-50 py-16 h-screen scroll-mt-16"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Profile Image */}
        <div className="flex justify-center relative">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-purple-50 p-4">
            <img
              src={Image}
              alt="Profile"
              className="rounded-xl w-[320px] h-auto object-cover"
            />
          </div>
        </div>
        {/* Right Text  */}
        <div className="space-y-6 px-4 sm:px-6 lg:px-0 max-w-xl mx-auto text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            I am Professional User <br /> Experience Designer
          </h1>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
            I design and develop services for customers specializing in creating
            stylish, modern websites, web services, and online stores. My
            passion is to design digital user experiences.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
            I design and develop services for customers specializing in creating
            stylish, modern websites, web services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md w-full sm:w-auto">
              <Folder className="mr-2 h-4 w-4" /> My Projects
            </Button>
            <Button
              variant="outline"
              className="font-semibold w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
