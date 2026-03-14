"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faLocationDot,
  faPhone,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const contactLinks = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "jerald.stodomingo26@gmail.com",
    href: "mailto:jerald.stodomingo26@gmail.com",
    color: "text-[#4C8CE4]",
    bg: "bg-[#4C8CE4]/12",
  },
  {
    icon: faLocationDot,
    label: "Location",
    value: "Tagaytay City, Philippines",
    href: "#",
    color: "text-[#7B61FF]",
    bg: "bg-[#7B61FF]/12",
  },
  {
    icon: faPhone,
    label: "Phone",
    value: "Available upon request",
    href: "#",
    color: "text-[#4C8CE4]",
    bg: "bg-[#4C8CE4]/12",
  },
];

const socialLinks = [
  {
    icon: faGithub,
    href: "https://github.com/jerald-stodomingo",
    label: "GitHub",
  },
  {
    icon: faLinkedinIn,
    href: "https://linkedin.com/in/jerald-stodomingo",
    label: "LinkedIn",
  },
  {
    icon: faFacebook,
    href: "https://www.facebook.com/jerald.stodomingo.7",
    label: "Facebook",
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">Get In Touch</h1>
        <p className="text-[#1A1A1A]/80">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-4"
        >
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover-lift block"
            >
              <div
                className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}
              >
                <FontAwesomeIcon
                  icon={c.icon}
                  className={`w-4.5 h-4.5 ${c.color}`}
                />
              </div>
              <div>
                <p className="text-[#1A1A1A]/60 text-xs">{c.label}</p>
                <p className="text-[#1A1A1A] text-sm font-medium">{c.value}</p>
              </div>
            </a>
          ))}

          {/* Social links */}
          <div className="glass rounded-2xl p-5">
            <p className="text-[#1A1A1A]/60 text-xs mb-3">Find me on</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[#1A1A1A]/80 hover:text-[#4C8CE4] hover:border-[#4C8CE4]/40 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={s.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div>
              <label className="block text-sm text-[#1A1A1A]/80 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#E8F1FF] border border-[#4C8CE4]/20 text-[#1A1A1A] placeholder-[#1A1A1A]/45 focus:outline-none focus:border-[#4C8CE4] focus:ring-1 focus:ring-[#4C8CE4]/30 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-[#1A1A1A]/80 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#E8F1FF] border border-[#4C8CE4]/20 text-[#1A1A1A] placeholder-[#1A1A1A]/45 focus:outline-none focus:border-[#4C8CE4] focus:ring-1 focus:ring-[#4C8CE4]/30 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-[#1A1A1A]/80 mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-[#E8F1FF] border border-[#4C8CE4]/20 text-[#1A1A1A] placeholder-[#1A1A1A]/45 focus:outline-none focus:border-[#4C8CE4] focus:ring-1 focus:ring-[#4C8CE4]/30 transition-all text-sm resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={sent}
              className={`w-full py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                sent
                  ? "bg-[#E8F1FF] text-[#4C8CE4] border border-[#4C8CE4]/35"
                  : "bg-gradient-to-r from-[#4C8CE4] to-[#7B61FF] text-[#1A1A1A] hover:from-[#4C8CE4] hover:to-[#7B61FF] shadow-lg shadow-[#4C8CE4]/25"
              }`}
            >
              {sent ? (
                <>
                  <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

