import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Vortex_Engine",
    description:
      "High-performance rendering engine designed for parallel data processing and dynamic resource allocation.",
    detailed_description:
      "Modular computational framework built to orchestrate asynchronous execution pipelines and adaptive workload distribution. Features scalable processing layers, low-latency synchronization, and optimized memory management. ",
    image: "/background_01.svg",
    modulo: "Módulo 1",
    status: "Concluído",
    primary_stacks: ["React", "TypeScript"],
    stacks: [
      {
        name: "React",
        percentage: 40,
      },
      {
        name: "TypeScript",
        percentage: 35,
      },
      {
        name: "Framer_Motion",
        percentage: 10,
      },
      {
        name: "Tailwind CSS",
        percentage: 15,
      },
    ],
    version: "v1.0",
  },
  {
    id: 2,
    title: "Titan_DB",
    description:
      "Distributed data architecture focused on resilient storage, rapid indexing, and secure synchronization.",
    detailed_description:
      "Scalable database infrastructure utilizing segmented storage clusters and intelligent caching mechanisms. Designed to ensure high availability, encrypted data replication, and efficient query execution under continuous workloads.",
    image: "/background_02.svg",
    modulo: "Módulo 2",
    status: "Em Andamento",
    primary_stacks: ["Vue.js", "JavaScript"],
    stacks: [
      {
        name: "Vue.js",
        percentage: 60,
      },
      {
        name: "JavaScript",
        percentage: 40,
      },
      {
        name: "Node.js",
        percentage: 20,
      },
      {
        name: "Tailwind CSS",
        percentage: 30,
      },
    ],
    version: "v1.0",
  },
  {
    id: 3,
    title: "Pulse_Net",
    description:
      "Network communication layer optimized for real-time telemetry and decentralized system monitoring.",
    detailed_description:
      "Adaptive networking framework responsible for continuous event propagation, packet prioritization, and asynchronous signal processing. Integrates fault-tolerant communication protocols with low-overhead resource utilization.",
    image: "/background_03.svg",
    modulo: "Módulo 3",
    status: "Pendente",
    primary_stacks: ["Angular", "Python"],
    stacks: [
      {
        name: "Angular",
        percentage: 60,
      },
      {
        name: "Python",
        percentage: 40,
      },
      {
        name: "Node.js",
        percentage: 20,
      },
      {
        name: "Tailwind CSS",
        percentage: 30,
      },
    ],
    version: "v1.0",
  },
  {
    id: 4,
    title: "Shadow_OS",
    description:
      "Experimental operating environment engineered for process orchestration and intelligent resource control.",
    detailed_description:
      "System-level architecture combining modular task scheduling, runtime monitoring, and secure execution layers. Provides dynamic process isolation, automated resource balancing, and integrated diagnostic interfaces for complex applications.",
    image: "/background_04.svg",
    modulo: "Módulo 4",
    status: "Em Desenvolvimento",
    primary_stacks: ["React", "Node.js"],
    stacks: [
      {
        name: "React",
        percentage: 60,
      },
      {
        name: "TypeScript",
        percentage: 40,
      },
      {
        name: "Node.js",
        percentage: 20,
      },
      {
        name: "Tailwind CSS",
        percentage: 30,
      },
    ],
    version: "v1.0",
  },
];
