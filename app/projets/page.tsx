"use client";

import { useState } from "react";
import Image from "next/image";

interface Projet {
  id: number;
  titre: string;
  description: string;
  techno: string;
  images: string[];
}

const projets: Projet[] = [
  {
    id: 1,
    titre: "Knowledge",
    techno: "Symfony, MySQL",
    description: "Un site e-learning proposant différentes formations avec solutions d'achat stripe. L'utilisateur choisit d'acheter une Formation (qui contient des leçons) ou une seule leçons. L'utilisateur aura acces uniquement à ce qu'il à acheté",
    images: ["/images/KnowledgeA_1.webp", "/images/KnowledgeF_1.webp", "/images/KnowledgeL.webp"],
  },
  {
    id: 2,
    titre: "E-commerce",
    techno: "Symfony, MySQL",
    description: "Une boutique en ligne avec paiement Stripe.",
    images: ["/images/stubbornA.webp", "/images/stubbornB.webp", "/images/stubbornP.webp"],
  },
];

export default function ProjetsPage() {
  const [selectedProjet, setSelectedProjet] = useState<Projet | null>(null);

  return (
    <div className="p-6 mt-24 grid md:grid-cols-2 gap-6">
      {projets.map((projet) => (
        <div
          key={projet.id}
          className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
        >
          {/* Image principale */}
          <Image
            src={projet.images[0]}
            alt={projet.titre}
            width={600}
            height={300}
            className="rounded-lg object-cover"
          />
          <h2 className="text-xl font-bold mt-3">{projet.titre}</h2>
          <p className="text-gray-600">{projet.techno}</p>
          <button
            onClick={() => setSelectedProjet(projet)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Voir plus
          </button>
        </div>
      ))}

      {/* Modale */}
      {selectedProjet && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="bg-white p-6 rounded-xl max-w-3xl w-full relative">
            <button
              onClick={() => setSelectedProjet(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProjet.titre}</h2>
            <p className="mb-4">{selectedProjet.description}</p>

            {/* Galerie d’images */}
            <div className="grid md:grid-cols-2 gap-4">
              {selectedProjet.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${selectedProjet.titre} ${i + 1}`}
                  width={600}
                  height={300}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


