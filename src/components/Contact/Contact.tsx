import React, { useState } from "react";
import ContactPhoto from "../../../public/img/contact-giulia-hessel.png";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          subject: String(formData.get("subject") ?? ""),
          message: String(formData.get("message") ?? ""),
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Falha ao enviar.");
    }
  };

  return (
    <section
      id="contact"
      className="container grid md:grid-cols-2  my-12 py-24 gap-9 relative">
      <div className="flex mx-4 flex-col gap-[34px]">
        <img src={ContactPhoto} alt="Contact" className="rounded-[32px]" />
        <div className="socials flex flex-row gap-9">
          <a href="https://www.instagram.com/adv.giuliahessel/">
            <RiInstagramFill size={50} color="#311910" />
          </a>
          <a href="https://www.linkedin.com/in/giulia-hessel-a97b731a1/">
            <RiLinkedinBoxFill size={50} color="#311910" />
          </a>

          <a href="https://api.whatsapp.com/send?phone=5515991867481&text=Ol%C3%A1%21+%0AGostaria+de+uma+consulta+%E2%9A%96">
            <FaWhatsappSquare size={46} color="#311910" />
          </a>
        </div>
      </div>

      <div className="z-0 mx-4">
        <div className="z-0">
          <h5 className="text-[48px] uppercase font-regular text-[#311910] my-2">
            Sua consultoria <br /> legal é aqui
          </h5>
          <p className="text-[#311910] font-montserrat mb-4 max-w-md">
            Entre em contato e agende sua consultoria. Vamos construir soluções
            seguras e eficientes para o seu caso
          </p>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              name="name"
              type="text"
              id="name"
              required
              className=" font-montserrat border border-[#BE9D7C] placeholder-[#7E6F6A] text-[#311910] text-sm rounded-[32px] block w-full p-2.5"
              placeholder="Seu nome"
            />
          </div>
          <div className="mb-6">
            <input
              name="email"
              type="email"
              id="email"
              required
              className=" font-montserrat border border-[#BE9D7C] placeholder-[#7E6F6A] text-[#311910] text-sm rounded-[32px] block w-full p-2.5"
              placeholder="email@email.com"
            />
          </div>

          <div className="mb-6">
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className=" font-montserrat border border-[#BE9D7C] placeholder-[#7E6F6A] text-[#311910] text-sm rounded-[32px] block w-full p-2.5 "
              placeholder="Assunto"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              id="message"
              rows={10}
              className="font-montserrat border border-[#BE9D7C] placeholder-[#7E6F6A] text-[#311910] text-sm rounded-[32px] block w-full p-2.5"
              placeholder="Vamos falar sobre...."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-[#311910] font-montserrat hover:bg-[#66331F] disabled:opacity-60 disabled:cursor-not-allowed text-white uppercase font-regular py-2.5 px-5 rounded-[32px] w-full">
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status === "success" && (
            <h5 className="font-montserrat bg-green-800 rounded-xl p-4 text-xl mt-5">
              Mensagem enviada com sucesso!
            </h5>
          )}
          {status === "error" && (
            <p className="font-montserrat rounded-xl p-4 bg-red-800 mt-4">
              Erro ao enviar: {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
