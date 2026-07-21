import { motion } from "motion/react";

const recipientEmail = "guilhermebdias55@gmail.com";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Contact = () => {
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Contato via Website - ${name || "Visistante"}`,
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
      <div className="absolute right-0 top-20 w-[35%] h-[55%] blur-3xl bg-radial-[at_100%_50%] from-[#00f0ff]/12 to-[#0b0b0b]" />
      <div className="absolute left-10 bottom-10 w-[25%] h-[35%] blur-3xl bg-radial-[at_0%_50%] from-[#bc13fe]/12 to-[#0b0b0b]" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full md:w-[85%] px-8 md:px-20 gap-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div
          className="flex flex-col w-full items-center  gap-4 text-center "
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-color-2 tracking-tight">
            ESTABILISH_LINK
          </h1>
          <div className="flex items-center w-full justify-center gap-4">
            <span className="tertiary-color w-12 md:w-20 h-0.5" />
            <p className="tertiary-text-color text-xs md:text-sm tracking-[0.30rem] uppercase">
              SECURE_CHANNEL_READY
            </p>
            <span className="tertiary-color w-12 md:w-20 h-0.5" />
          </div>
          
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl border border-gray-800 bg-[#0b0b0b]/75 backdrop-blur-sm p-6 md:p-8 flex flex-col gap-6"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span className="sr-only">Nome</span>
              <input
                type="text"
                name="name"
                placeholder="SUBJECT_IDENTITY"
                autoComplete="name"
                className="w-full border-b border-gray-700 bg-transparent px-0 py-3 text-sm md:text-base text-color-2 outline-none placeholder:text-color/60 focus:border-[#00f0ff] transition-colors"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="sr-only">E-mail</span>
              <input
                type="email"
                name="email"
                placeholder="COMMUNICATION_REF"
                autoComplete="email"
                required
                className="w-full border-b border-gray-700 bg-transparent px-0 py-3 text-sm md:text-base text-color-2 outline-none placeholder:text-color/60 focus:border-[#00f0ff] transition-colors"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="sr-only">Mensagem</span>
            <textarea
              name="message"
              placeholder="PACKET_DATA"
              rows={6}
              required
              className="w-full resize-none border border-gray-800 bg-transparent px-4 py-4 text-sm md:text-base text-color-2 outline-none placeholder:text-color/60 focus:border-[#00f0ff] transition-colors"
            />
          </label>

          <motion.button
            type="submit"
            className="w-full border border-[#bc13fe] px-6 py-3 text-sm md:text-base font-medium tracking-[0.12rem] uppercase text-color-2 transition-colors hover:bg-[#bc13fe] hover:text-[#0b0b0b]"
            variants={itemVariants}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
          >
            EXECUTE_TRANSMISSION
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
