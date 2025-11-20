export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I build scalable, maintainable web applications with clean architecture",
      description: "",
      className: "lg:col-span-4 md:col-span-3 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Specializing in React, Next.js, and TypeScript",
      description: "With expertise in Atomic Design and reusable UI systems",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "Constantly evolving and improving",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Frontend Developer with a passion for clean code and great UX",
      description: "",
      className: "lg:col-span-3 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "Building healthcare and business solutions",
      description: "Leveraging my medical background",
      className: "lg:col-span-3 md:col-span-3 md:row-span-2 lg:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Let's build something amazing together!",
      description: "Get in touch to discuss your project",
      className: "lg:col-span-3 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  import { TechIconKey } from "@/utils/techIcons";

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconComponents: TechIconKey[];
  link: string;
}

export const projects: Project[] = [
    {
      id: 1,
      title: "CraftScene Customer Website",
      des: "A responsive multi-page platform for construction services, featuring service exploration, consultation requests, and project submissions.",
      img: "/craftscene-customer.svg",
      iconComponents: ["react", "nextjs", "typescript", "tailwind"],
      link: "https://craftsceneapp.com/",
    },
    {
      id: 2,
      title: "CraftScene Admin Dashboard",
      des: "Comprehensive role-based dashboard for suppliers, engineers & admins with tables, filters, status updates, and notifications.",
      img: "/craftscene-admin.svg",
      iconComponents: ["react", "typescript", "tailwind", "nodejs"],
      link: "https://dashboard.craftsceneapp.com/",
    },
    {
      id: 3,
      title: "Pharmacy Management System",
      des: "A healthcare solution integrating inventory management, prescription tracking, and patient records with a focus on UX for medical professionals.",
      img: "/pharmacy-mgmt.svg",
      iconComponents: ["react", "nodejs", "mongodb", "express"],
      link: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      des: "A modern, animated portfolio website showcasing my projects and skills with a clean, interactive UI.",
      img: "/portfolio.svg",
      iconComponents: ["nextjs", "tailwind", "typescript"],
      link: "https://yousseftemraz.vercel.app",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Youssef transformed our construction tech platform with his exceptional frontend skills. His implementation of Atomic Design principles resulted in a 40% faster development cycle and a significantly improved user experience. His attention to detail and clean code practices were impressive.",
      name: "Ahmed Samir",
      title: "CTO at CraftScene",
    },
    {
      quote:
        "Working with Youssef was a game-changer for our healthcare startup. His unique combination of medical knowledge and technical expertise helped us create a truly patient-centric application. He consistently delivered high-quality code and provided valuable insights from both technical and medical perspectives.",
      name: "Dr. Sarah Mohamed",
      title: "CEO at HealthTech Solutions",
    },
    {
      quote:
        "Youssef's ability to understand complex business requirements and translate them into elegant technical solutions is remarkable. His work on our admin dashboard significantly improved our operational efficiency. His communication skills and professionalism made the collaboration seamless.",
      name: "Omar Hassan",
      title: "Operations Manager at BuildItRight",
    },
    {
      quote:
        "As a fellow developer, I've been consistently impressed by Youssef's problem-solving skills and clean code practices. His React components are well-structured, reusable, and thoroughly tested. He's a true asset to any development team.",
      name: "Mariam Adel",
      title: "Senior Full-Stack Developer",
    },
    {
      quote:
        "Youssef's expertise in TypeScript and Next.js helped us modernize our frontend infrastructure. His architectural decisions have made our codebase more maintainable and performant. His dedication to best practices is evident in every line of code he writes.",
      name: "Karim Tarek",
      title: "Engineering Lead at TechVentures",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Developer @ CraftScene",
      desc: "Developed and maintained customer-facing website and admin dashboard using React, TypeScript, and Tailwind CSS. Implemented reusable UI components following Atomic Design principles.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Freelance Web Developer",
      desc: "Built custom web applications for clients across various industries, with a focus on healthcare and business solutions. Delivered responsive, accessible, and performant applications.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Healthcare Technology Consultant",
      desc: "Leveraged medical background to help healthcare startups optimize their digital solutions. Bridged the gap between medical teams and developers to create patient-focused applications.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Open Source Contributor",
      desc: "Contributed to open source projects, focusing on improving documentation, fixing bugs, and adding new features to popular React and Next.js libraries.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];