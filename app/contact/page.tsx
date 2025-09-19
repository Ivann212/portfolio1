"use client"; 

import ContactForm from "../ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <motion.h1
        className="text-5xl font-bold mb-8 text-foreground"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contactez-moi
      </motion.h1>
      <ContactForm />
    </main>
  );
}
