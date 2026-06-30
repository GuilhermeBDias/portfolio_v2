import { motion } from "motion/react";

interface ProjectsCardProps {
  modulo: string;
  status: string;
  title: string;
  description: string;
  image: string;
  stacks: string[];
}

export const ProjectsCard = ({
  modulo,
  status,
  title,
  description,
  image,
  stacks,
}: ProjectsCardProps) => {
  const content = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const stackItem = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <motion.article
      className="flex flex-col w-full h-140 border border-gray-900"
      variants={content}
    >
      <motion.header
        variants={item}
        className="flex w-full items-center justify-between border-b border-gray-900 px-6 py-3 bg-[#0b0b0b]"
      >
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 item primary-color" />
          <h2>{modulo}</h2>
        </div>
        <h3>{status}</h3>
      </motion.header>
      <div className="relative flex flex-col h-full justify-end p-6 gap-4">
        <motion.div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${image})` }}
          variants={imageAnimation}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0b0b]/50 via-[#0b0b0b]/90 to-[#0b0b0b]" />
        <motion.div
          variants={content}
          className="flex flex-col items-center w-full z-10 gap-6"
        >
          <div className="absolute top-6 right-6 flex flex-col items-end gap-3">
            {stacks.map((stack, index) => (
              <motion.span
                key={index}
                className="bg-[#0b0b0b] px-2 py-1 border border-[#00f0ff] tertiary-text-color"
                variants={stackItem}
              >
                {stack}
              </motion.span>
            ))}
          </div>
          <motion.div variants={item} className="flex flex-col w-full gap-2">
            <h1 className="text-3xl md:text-4xl font-serif font-bold">
              {title}
            </h1>
            <p className="text-base md:text-lg">{description}</p>
          </motion.div>
          <motion.button
            variants={item}
            className="cursor-pointer w-full md:w-[50%]  p-2 border border-[#bc13fe] hover:bg-[#bc13fe] hover:text-[#0b0b0b] transition-colors "
          >
            ACCESS_MODULE
          </motion.button>
        </motion.div>
      </div>
    </motion.article>
  );
};

// 3. Stack tags aparecendo tipo “ping” (detalhe foda)
// const stackItem = {
//   hidden: { opacity: 0, scale: 0.8 },
//   show: { opacity: 1, scale: 1 },
// };

// 👉 dá sensação de:

// “tag sendo registrada”
// mais dinâmico que só fade

// 2. “Montagem” do card (ESSA É A JOIA 💎)

// Dentro do ProjectsCard, você faz o conteúdo aparecer em ordem:

// const content = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.2,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// Aplicação:

// <motion.div
//   variants={content}
//   initial="hidden"
//   whileInView="show"
//   className="flex flex-col items-center w-full z-10 gap-6"
// >

// E nos filhos:

// <motion.h1 variants={item} />
// <motion.p variants={item} />
// <motion.button variants={item} />

// 👉 isso cria exatamente:
