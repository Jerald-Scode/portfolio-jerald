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
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: faLocationDot,
    label: "Location",
    value: "Tagaytay City, Philippines",
    href: "#",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: faPhone,
    label: "Phone",
    value: "Available upon request",
    href: "#",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
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
        <p className="text-gray-400">
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
                <p className="text-gray-500 text-xs">{c.label}</p>
                <p className="text-gray-300 text-sm font-medium">{c.value}</p>
              </div>
            </a>
          ))}

          {/* Social links */}
          <div className="glass rounded-2xl p-5">
            <p className="text-gray-500 text-xs mb-3">Find me on</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all duration-300"
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
              <label className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={sent}
              className={`w-full py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                sent
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25"
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
