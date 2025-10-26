import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config(); 
const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {

// Auto-detect environment
const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

const API = isLocalhost
  ? "http://localhost:10000" // your local backend
  : "https://kunalkhuteta-portfolio-1.onrender.com"; // your deployed backend

const backendUrl = `${API}/api/contact`;



      const res = await axios.post(backendUrl, formData);

      if (res.data.success) {
        toast({
          title: "✅ Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "❌ Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's work together on your next project
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-semibold group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground mb-6">
                Connect with me
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/Kunalkhuteta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hover:from-primary hover:to-secondary transition-all duration-300">
                    <Github className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/kunal-khandelwal-a550642bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hover:from-primary hover:to-secondary transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
                  </div>
                </a>
                <a href="mailto:khutetakunal@gmail.com" className="group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hover:from-primary hover:to-secondary transition-all duration-300">
                    <Mail className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
