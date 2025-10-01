"use client";
import { motion } from "framer-motion";
import Link from "next/link";



export default function Home() {
  return (
    <div className="space-y-32 pt-25">
      {/* Section CV */}
      <section id="cv" className="text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6 pt-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mon CV
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Je m’appelle Ivann, développeur full stack passionné. Au cours de mon cursus, j’ai étudié et pratiqué différentes technologies telles que JavaScript, Python, PHP, TypeScript (avec Vue.js), MySQL et Next.js.
        </p>
        <a
          href="./images/cv.pdf" 
          download
          className="px-6 py-3 rounded-lg bg-foreground text-background font-semibold hover:opacity-80"
        >
          Télécharger mon CV
        </a>
      </section>

      {/* Section Projets */}
      <section id="projects">
        <motion.h2 
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Quelques projets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {/* projet 1 */}
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Projet 1</h3>
            <img className="rounded-lg" src="../images/JWE.webp"></img>
            <p className="text-gray-600 mb-4">Un projets sur le jeux de gestion Jurassic World Evolution, le but est de créer un enclos entre dinosaures compatibles.</p>
            <div className="flex gap-4">
              <a href="https://github.com/Ivann212/JWE" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
              <a href="https://ton-projet-demo.com" target="_blank" className="text-blue-500 hover:underline">Démo</a>
            </div>
          </div>
          {/* projet 2 */}
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Projet 2</h3>
            <img className="rounded-lg" src="../images/KnowledgeA_1.webp"></img>
            <p className="text-gray-600 mb-4">Un site e-learning, proposant différentes formations.</p>
            <div className="flex gap-4">
              <a href="https://github.com/Ivann212/Knowledge" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
              <a href="https://ton-projet-demo.com" target="_blank" className="text-blue-500 hover:underline">Démo</a>
            </div>
          </div>
          {/* projet 3 */}
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Projet 3</h3>
            <p className="text-gray-600 mb-4">Une petite description rapide.</p>
            <div className="flex gap-4">
              <a href="https://github.com/ton-projet" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
              <a href="https://ton-projet-demo.com" target="_blank" className="text-blue-500 hover:underline">Démo</a>
            </div>
          </div>
          
        </div>
        <div className="my-8 flex items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          
            <a href="/projets" className="px-6 py-3 rounded-lg bg-foreground text-background font-semibold hover:opacity-80">
              Voir mes autres projets
            </a>
            
          </motion.div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>
        {/* <ContactForm /> */}
        <div className="flex justify-center gap-6 my-6">
          <a href="/contact" className="hover:text-blue-500">Me contacter</a>
          <a href="https://github.com/Ivann212?tab=repositories" target="_blank" className="hover:text-blue-500">GitHub</a>
          <a href="https://www.linkedin.com/in/ivann-rambaud-864176247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="hover:text-blue-500">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
