export interface Project {
  id: number;
  modulo: string;
  status: string;
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
