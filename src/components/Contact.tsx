import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Import EmailJS - you'll need to install it first with:
// npm install @emailjs/browser

// Step 1: Import emailjs
import emailjs from "@emailjs/browser";

// Step 2: Initialize EmailJS once when the app loads
// This should ideally be in your main app file, but for completeness it's here
// You can get your public key from your EmailJS account dashboard
emailjs.init("vgXV0_80Ga7iKunWH"); // Replace with your actual public key

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Step 3: Prepare the template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    // Step 4: Send the email using EmailJS
    emailjs.send(
      "service_b11xehb",      // Replace with your EmailJS service ID
      "template_b8yeeto",     // Replace with your EmailJS template ID
      templateParams
    )
      .then((response) => {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              Interested in working together or have questions about my work?
              Feel free to reach out using the contact form or connect with me on social media.
            </p>

            <div className="glass p-6 rounded-xl mb-6">
              <h3 className="text-xl font-semibold mb-4 tech-gradient-text">Contact Info</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <a href="mailto:shaunallan0605@gmail.com" target="__blank" className="flex items-start">
                    <div className="mr-3 text-neon-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400">Email</p>
                      <p className="text-white">shaunallan0605@gmail.com</p>
                    </div>
                  </a>
                </div>

                <div className="flex items-start">
                  <a href="tel:+918610414291" target="__blank" className="flex items-start">
                    <div className="mr-3 text-neon-green">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400">Phone</p>
                      <p className="text-white">+91 86104 14291</p>
                    </div>
                  </a>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-neon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">Location</p>
                    <p className="text-white">Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/shaun-allan-h" target="__blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-neon-purple/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://instagram.com/shaun._.06" target="__blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-neon-pink/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://github.com/Shaun-Allan" target="__blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-neon-green/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="mailto:shaunallan0605@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-neon-blue/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  className="bg-white/5 border-white/10 text-white"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="bg-white/5 border-white/10 text-white"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-white/5 border-white/10 text-white"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;