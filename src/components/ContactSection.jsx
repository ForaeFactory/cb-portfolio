import {
  Handshake,
  Mail,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-50 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-center">
          Let's Connect
        </h2>
        <hr
          className="my-10 h-px border-t-0 bg-transparent bg-linear-to-r from-white/0 via-white/30 to-transparent" />

        <p className="text-center text-muted-foreground mb-[4rem] max-w-2xl mx-auto">
          Have a project or opportunity in mind? I am always open to discussing new and exciting opportunities.
          Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xl font-medium mb-10">
              Contact Information
            </h3>

            <div className="space-y-10 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:craig@foraefactory.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    craig@foraefactory.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (972) 213-7479
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Austin, TX, USA
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full">
                  <Handshake className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/craigbrooks"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                  >
                    /in/craigbrooks
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">

              <div className="flex space-x-4 justify-center">

              </div>
            </div>
          </div>

          <div
            className="bg-card/30 p-8 border-primary rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-medium mb-10"> Send a Message</h3>

            <form className="space-y-6">
              <div className="flex flex-col items-start">
                <label
                  htmlFor="name"
                  className="block text-md font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                />
              </div>

              <div className="flex flex-col items-start">
                <label
                  htmlFor="email"
                  className="block text-md font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div className="flex flex-col items-start">
                <label
                  htmlFor="message"
                  className="block text-md font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-[50%] flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section >
  );
};
