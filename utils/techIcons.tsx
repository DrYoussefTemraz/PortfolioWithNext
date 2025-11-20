import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

export const techIcons = {
  react: <FaReact className="w-6 h-6" />,
  typescript: <SiTypescript className="w-6 h-6" />,
  nextjs: <SiNextdotjs className="w-6 h-6" />,
  tailwind: <SiTailwindcss className="w-6 h-6" />,
  nodejs: <FaNodeJs className="w-6 h-6" />,
  mongodb: <SiMongodb className="w-6 h-6" />,
  express: <SiExpress className="w-6 h-6" />,
  github: <FaGithub className="w-6 h-6" />,
  linkedin: <FaLinkedin className="w-6 h-6" />,
  twitter: <FaTwitter className="w-6 h-6" />
} as const;

export type TechIconKey = keyof typeof techIcons;
