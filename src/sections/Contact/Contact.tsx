import { motion } from "motion/react";
import {
  createRevealVariants,
  createStaggerVariants,
} from "../../utils/motionVariants";
import { LuDatabase } from "react-icons/lu";

export const Contact = () => {
  const recipientEmail = "guilhermebdias55@gmail.com";

  const contentVariants = createStaggerVariants({
    delayChildren: 0.2,
    staggerChildren: 0.3,
  });

  const itemVariants = createRevealVariants({
    hiddenY: 28,
    duration: 0.6,
  });
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Contato via Website - ${name || "Visitante"}`,
    );
    const body = encodeURIComponent(
      `Novo contato recebido do website:\n\nNome: ${name || "Não informado"}\nE-mail: ${email || "Não informado"}\n\nMensagem:\n${message || ""}\n\nSent from Dias.system's website.`,
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="relative flex w-full min-h-screen items-center justify-end py-24 md:py-0"
    >
      <div className="absolute right-0 top-30 w-[35%] h-[55%] blur-3xl bg-radial-[at_100%_50%] from-[#00f0ff]/12 to-[#0b0b0b]" />
      <div className="absolute left-10 bottom-10 w-[25%] h-[35%] blur-3xl bg-radial-[at_0%_50%] from-[#bc13fe]/12 to-[#0b0b0b]" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full md:w-[85%] px-8 md:px-20 gap-8"
        variants={contentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.45 }}
      >
        <motion.div
          className="flex flex-col w-full items-center  gap-4 text-center "
          variants={contentVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-color-2 tracking-tight"
          >
            ESTABILISH_LINK
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="flex items-center w-full justify-center gap-4"
          >
            <span className="tertiary-color w-12 md:w-20 h-0.5" />
            <p className="tertiary-text-color text-xs md:text-sm tracking-[0.30rem] uppercase">
              SECURE_CHANNEL_READY
            </p>
            <span className="tertiary-color w-12 md:w-20 h-0.5" />
          </motion.div>
        </motion.div>

        {/* Formulário */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center w-full"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl border border-gray-800 bg-[#0b0b0b]/75 backdrop-blur-sm p-6 md:p-8 flex flex-col gap-8"
            variants={contentVariants}
          >
            {/* Inputs */}

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.label
                variants={itemVariants}
                className="flex flex-col gap-2 text-xs md:text-sm"
              >
                <span className="tertiary-text-color tracking-[0.10rem]">{`> SUBJECT_IDENTITY`}</span>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME_REQUIRED"
                  autoComplete="name"
                  required
                  className="autofill-dark w-full border-b border-gray-700 bg-transparent pl-4 py-2 text-sm md:text-base  outline-none focus:border-[#00f0ff]/60 transition-colors"
                />
              </motion.label>
              <motion.label
                variants={itemVariants}
                className="flex flex-col gap-2 text-xs md:text-sm "
              >
                <span className="tertiary-text-color tracking-[0.10rem]">
                  @ COMMUNICATION_REF
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL_REQUIRED"
                  autoComplete="email"
                  required
                  className="autofill-dark w-full border-b border-gray-700 bg-transparent pl-4 py-2 text-sm md:text-base outline-none focus:border-[#00f0ff]/60 transition-colors"
                />
              </motion.label>
            </motion.div>

            {/* Textarea */}

            <motion.label
              variants={itemVariants}
              className="flex flex-col gap-2"
            >
              <span className="flex gap-1 items-center tertiary-text-color tracking-[0.10rem] text-xs md:text-sm">
                <LuDatabase />
                PACKET_DATA
              </span>
              <textarea
                name="message"
                placeholder="ENCODE_MESSAGE_HERE"
                rows={6}
                required
                className="w-full resize-none border border-gray-800 bg-transparent px-4 py-4 text-sm md:text-base outline-none placeholder:text-color/60 focus:border-[#00f0ff]/60 transition-colors "
              />
            </motion.label>

            <motion.button
              type="submit"
              className="w-full border border-[#bc13fe] px-6 py-3 text-sm md:text-base font-medium tracking-[0.12rem] transition-colors hover:bg-[#bc13fe]/80 hover:text-[#0b0b0b] cursor-pointer"
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              EXECUTE_TRANSMISSION
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
