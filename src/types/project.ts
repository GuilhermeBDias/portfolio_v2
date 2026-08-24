export type ProjectStatus =
  | "Concluído"
  | "Em Andamento"
  | "Pendente"
  | "Em Desenvolvimento";

export interface Project {
  id: number;
  modulo: string;
  status: ProjectStatus;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  primaryStacks: string[];
  stacks: {
    name: string;
    percentage: number;
  }[];
  version: string;
}
