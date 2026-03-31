export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-4 md:col-span-3 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-3 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "lg:col-span-3 md:col-span-3 md:row-span-2 lg:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-3 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Events Application",
      des: "A full-stack events application built with Next.js and MongoDB",
      img: "/event1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/DrYoussefTemraz/eventapp-nextjsfullstack",
    },
    {
      id: 2,
      title: "MedCore",
      des: "Healthcare Facility Management Consultancy with Comprehensive Services of Facility planning, design, and construction.",
      img: "/MedCore.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/DrYoussefTemraz/MedCore",
    },
    {
      id: 3,
      title: "CraftScene Customer Website",
      des: "All what belongs to Archtecture, customer website for CraftScene, a company that provides custom furniture and interior design services.",
      img: "/craftweb.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://craftsceneapp.com/",
    },
    {
      id: 4,
      title: "CraftScene Dashboard",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/craftdash.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://dashboard.craftsceneapp.com/login",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Youssef's work on the MedCore healthcare platform was exceptional. His attention to detail in creating a comprehensive facility management system demonstrated both technical expertise and deep understanding of healthcare workflows. The result exceeded our expectations.",
      name: "Sarah Mitchell",
      title: "CEO of MedCore Solutions",
    },
    {
      quote:
        "The CraftScene customer website Youssef delivered transformed our online presence. His ability to blend elegant design with robust functionality created an intuitive experience that our clients love. Professional, creative, and deadline-focused.",
      name: "Michael Chen",
      title: "Founder of CraftScene",
    },
    {
      quote:
        "Working with Youssef on our Events Application was a game-changer. His full-stack capabilities and problem-solving approach turned our complex requirements into a seamless, scalable solution. Highly recommend for any challenging project.",
      name: "Jennifer Rodriguez",
      title: "Product Manager at EventHub",
    },
    {
      quote:
        "Youssef's expertise in modern web technologies is impressive. He delivered our dashboard project with clean, maintainable code and outstanding performance. His communication throughout the process made collaboration effortless.",
      name: "David Kumar",
      title: "CTO of TechFlow Systems",
    },
    {
      quote:
        "Youssef brings both creativity and technical excellence to every project. His innovative solutions and commitment to best practices make him an invaluable development partner. We've seen significant improvements in user engagement since launch.",
      name: "Amanda Foster",
      title: "Digital Director at InnovateCo",
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
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Healthcare Platform Developer - MedCore",
      desc: "Developed a comprehensive healthcare facility management system with Next.js and TypeScript, streamlining facility planning and construction workflows.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Web Developer - CraftScene",
      desc: "Created customer website and dashboard for CraftScene's custom furniture and interior design services using React, Three.js, and GSAP animations.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
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