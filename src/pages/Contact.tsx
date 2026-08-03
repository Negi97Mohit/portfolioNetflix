import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct
import { Mail, Linkedin, Github, MapPin, Briefcase } from "lucide-react"; // Icons

// Removed useState, useToast, Button, Input, Textarea, Label if only used for the form
// Keeping Label if you decide to use it for the contact info section, but it's not used in this version.

const Contact = () => {
  // formData, handleChange, and handleSubmit are removed as the form is gone.
  // useToast is also removed if no other toasts are used on this page.

  const contactMethods = [
    {
      icon: <Mail size={24} className="text-netflix" />,
      label: "Email",
      value: "mohitenji@gmail.com",
      href: "mailto:mohitenji@gmail.com",
    },
    {
      icon: <Linkedin size={24} className="text-netflix" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mohit-singh-negi",
      href: "https://www.linkedin.com/in/mohit-singh-negi/",
    },
    {
      icon: <Github size={24} className="text-netflix" />,
      label: "GitHub",
      value: "github.com/Negi97Mohit",
      href: "https://github.com/Negi97Mohit",
    },
    {
      icon: <MapPin size={24} className="text-netflix" />,
      label: "Location",
      value: "Boston, MA, USA / India / Nepal",
    },
     {
      icon: <Briefcase size={24} className="text-netflix" />,
      label: "Availability",
      value: "Open to new opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />

      {/* Decorative background gradients for glass effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-netflix/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/40 blur-[120px] rounded-full" />
      </div>

      <div className="pt-24 md:pt-32 pb-16 px-4 sm:px-6 max-w-screen-md mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">Get in Touch</h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            I'm always excited to discuss new ideas, projects, or opportunities. Let's connect.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] space-y-8 w-full max-w-md md:max-w-2xl relative overflow-hidden">
            
            {/* Shimmer effect on border top */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center md:text-left tracking-wide">Contact Information</h2>
            
            <ul className="space-y-6">
              {contactMethods.map((method) => (
                <li key={method.label} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 group">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-1">{method.label}</h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-netflix text-base sm:text-lg transition-colors break-all font-medium"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-white text-base sm:text-lg break-all font-medium">{method.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
