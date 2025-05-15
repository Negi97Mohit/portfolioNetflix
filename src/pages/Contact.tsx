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
      icon: <Mail size={20} className="text-netflix" />,
      label: "Email",
      value: "mohit.snegi123@gmail.com",
      href: "mailto:mohit.snegi123@gmail.com",
    },
    {
      icon: <Linkedin size={20} className="text-netflix" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mohit-singh-negi",
      href: "https://www.linkedin.com/in/mohit-singh-negi/",
    },
    {
      icon: <Github size={20} className="text-netflix" />,
      label: "GitHub",
      value: "github.com/Negi97Mohit",
      href: "https://github.com/Negi97Mohit",
    },
    {
      icon: <MapPin size={20} className="text-netflix" />,
      label: "Location",
      value: "Boston, MA, USA / India/ Nepal",
    },
     {
      icon: <Briefcase size={20} className="text-netflix" />,
      label: "Availability",
      value: "Open to new opportunities", // Or specific hours
    },
  ];


  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <div className="pt-24 md:pt-28 pb-12 px-4 sm:px-6 max-w-screen-md mx-auto"> {/* Adjusted max-width for a single column layout */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">Get in Touch</h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            I'm always excited to discuss new ideas, projects, or opportunities. Here's how you can reach me:
          </p>
        </div>

        {/* Centering the Contact Information block */}
        <div className="flex justify-center">
          <div className="bg-secondary rounded-xl p-6 sm:p-8 shadow-xl space-y-6 w-full max-w-md md:max-w-lg"> {/* Constrained width for the block */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center md:text-left">Contact Information</h2>
              <ul className="space-y-4">
                {contactMethods.map((method) => (
                  <li key={method.label} className="flex items-start gap-3 group">
                    <span className="mt-1 flex-shrink-0">{method.icon}</span>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-white text-sm sm:text-base">{method.label}</h3>
                      {method.href ? (
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-netflix-hover text-xs sm:text-sm transition-colors break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-xs sm:text-sm break-all">{method.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* The form section has been removed */}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
