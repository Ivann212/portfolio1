"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Formulaire envoyé :", data);
    alert("Merci pour ton message 🚀");
  };

  return (
    <form
      action="https://formspree.io/f/mrbanqdv"
      method="POST"
      className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded-lg shadow"
    >
      {/* Nom */}
      <div>
        <label className="block mb-1 font-medium">Nom</label>
        <input
          {...register("name", { required: "Le nom est obligatoire" })}
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          {...register("email", { required: "L'email est obligatoire" })}
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          {...register("message", { required: "Le message est obligatoire" })}
          className="w-full p-2 border rounded"
          rows={5}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* Bouton */}
      <button
        type="submit"
        className="px-6 py-3 rounded bg-foreground text-background font-semibold hover:opacity-80"
      >
        Envoyer
      </button>
    </form>
  );
}
