import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    
  );
}

export const projects = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/divyeshram/",
    imgSrc: "/images/linkedins-removebg-preview.png",
  },
  {
    title: "Github",
    // description: "",
    link: "https://github.com/ChDivyesh",
    imgSrc: "/images/github.png",
  },
  {
    title: "X",
    // description: "",
    link: "https://x.com/",
    imgSrc: "/images/x-icon-png.png",
  },
  
  
];
