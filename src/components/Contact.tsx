import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="uppercase text-purple-500 tracking-wide font-medium">
          Contact Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Have a <span className="text-purple-600">Project?</span>
        </h2>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                className="border-purple-300 focus-visible:ring-purple-500"
              />
              <Input
                placeholder="Your Email"
                className="border-purple-300 focus-visible:ring-purple-500"
              />
            </div>
            <Input
              placeholder="Subject"
              className="border-purple-300 focus-visible:ring-purple-500"
            />
            <Textarea
              placeholder="Message"
              className="border-purple-300 focus-visible:ring-purple-500"
              rows={5}
            />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-md">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <MapPin className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-gray-600">
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Phone className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-gray-600">+1235 2355 98</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Mail className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p className="text-gray-600">sohel.rana.web2@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Globe className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">Website:</p>
              <p className="text-gray-600">yoursite.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
