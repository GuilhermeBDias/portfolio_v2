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
  detailed_description: string;
  image: string;
  primary_stacks: string[];
  stacks: {
    name: string;
    percentage: number;
  }[];
  version: string;
}
