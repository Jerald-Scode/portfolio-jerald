"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

interface Quote {
  quote: string;
  author: string;
  date: string;
}

const DailyQuote: React.FC = () => {
  const [data, setData] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/quote")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass rounded-2xl p-6 relative overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#4C8CE4]/25 to-[#7B61FF]/20 rounded-full blur-2xl" />

      <div className="flex items-start gap-4 relative z-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4C8CE4]/25 to-[#7B61FF]/20 flex items-center justify-center shrink-0 mt-1">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="w-4 h-4 text-[#4C8CE4]"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-[#4C8CE4] font-medium uppercase tracking-widest mb-2">
            Quote of the Day
          </p>
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-2"
              >
                <div className="h-4 bg-[#E8F1FF] rounded-lg w-full animate-pulse" />
                <div className="h-4 bg-[#E8F1FF] rounded-lg w-3/4 animate-pulse" />
                <div className="h-3 bg-[#E8F1FF] rounded-lg w-1/3 mt-3 animate-pulse" />
              </motion.div>
            ) : data ? (
              <motion.div
                key="quote"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{data.quote}&rdquo;
                </p>
                <p className="text-[#1A1A1A]/60 text-xs sm:text-sm mt-3 font-medium">
                  - {data.author}
                </p>
              </motion.div>
            ) : (
              <p className="text-[#1A1A1A]/60 text-sm">
                Could not load today&apos;s quote.
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default DailyQuote;
