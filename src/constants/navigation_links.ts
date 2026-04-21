import { MdCode, MdPerson, MdWork } from "react-icons/md";
import { FaAt } from "react-icons/fa";
import type { NavLink } from "../types/navigation";

export const navigation_links: NavLink[] = [
  {
    name: "Overview",
    id: "overview",
    icon: MdPerson,
    number: "01",
  },
  {
    name: "Experience",
    id: "experience",
    icon: MdWork,
    number: "02",
  },
  {
    name: "Projects",
    id: "projects",
    icon: MdCode,
    number: "03",
  },
  {
    name: "Contact",
    id: "contact",
    icon: FaAt,
    number: "04",
  },
];
