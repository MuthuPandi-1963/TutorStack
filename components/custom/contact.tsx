"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "sonner";

export default function ContactSection() {
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const form = e.target as HTMLFormElement;
    form.reset();  
    toast("Message Sent Successfully")
};

  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Have questions about our courses or plans? Reach out to us anytime.  
            Our team will get back to you quickly.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-purple-400" /> muthupandir74738@gmail.com
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaPhoneAlt className="text-purple-400" /> +91 79041 78729
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-purple-400" /> Madurai, India
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" placeholder="Your Name" required className="bg-gray-800 text-white border-gray-700" />
            <Input type="email" placeholder="Your Email" required className="bg-gray-800 text-white border-gray-700" />
            <Textarea placeholder="Your Message" required className="bg-gray-800 text-white border-gray-700" rows={5} />
            <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
