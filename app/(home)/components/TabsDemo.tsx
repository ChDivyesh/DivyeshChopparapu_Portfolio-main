"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

interface TabContent {
  title: string;
  value: string;
  content: JSX.Element;
}

interface ImageContainerProps {
  src: string;
  href: string;
}

function ImageContainer({ src, href }: ImageContainerProps) {
  return (
    <Link href={href ?? ""} target="_blank">
      <Image
        src={src}
        alt="Project image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[80%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </Link>
  );
}

export function TabsDemo() {
  const tabs = [
    
     {
      title: "Zomato Page",
      value: "Zomato Page",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Zomato-Food Delivery App</p>
          <ImageContainer src="/images/zomato_landing.png" href="https://github.com/ChDivyesh/Zomato-Landing-page" />
        </div>
      ),
    },
    {
      title: "BookMy Show",
      value: "BookMy Show",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>BookMy Show-Movie App</p>
          <ImageContainer src="/images/Bookmy_show.png" href="https://github.com/ChDivyesh/Book-My-Show-clone" />
        </div>
      ),
    },
    {
      title: "Zomato-clone",
      value: "Zomato-clone",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Zomato Food Delivery-Clone</p>
          <ImageContainer src="/images/zomato-website.png" href="https://github.com/ChDivyesh/Zomato-Master-Clone" />
        </div>
      ),
    },

    {
      title: "Portfolio Project",
      value: "My Portfolio",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>My Portfolio</p>
          <ImageContainer src="/images/portfolio_div.png" href="https://dheeraj-atmakuri-portfolio.vercel.app/" />
        </div>
      ),
    },
    {
      title: "FreightFlow",
      value: "FreightFlow",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Freight Flow</p>
          <ImageContainer
            src="/images/Netflix_data_analysis_using_tableau.png"
            href="https://github.com/ayush554/Freight_Flow_System/tree/DivyeshChopparapu"
          />
        </div>
      ),
    },
    
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 gap-10">
      <h2 className="font-bold text-4xl text-white">Projects</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}
