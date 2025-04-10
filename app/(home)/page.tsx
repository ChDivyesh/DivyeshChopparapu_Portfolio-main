import { BackgroundBeams } from "@/components/ui/background-beams";
import { GlobeDemo } from "./components/GlobeDemo";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { TabsDemo } from "./components/TabsDemo";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import { BackgroundGradientDemo } from "./components/BackgroundGradientDemo";
import {LampDemo} from "./components/LampDemo";

export default function Home() {
  return (
    <div>
      <BackgroundBeamsDemo/>
      <TabsDemo/>
      <div className="h-[1rem] md:h-[1rem] [perspective:100px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-8 gap-2">
      <h2 className="text-center text-xl md:text-4xl font-bold my-10 gap-10 ">Education :</h2>
      </div>
      <br /><br /><br />
      <BackgroundGradientDemo/>
      <div className="h-[1rem] md:h-[1rem] [perspective:100px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-8 gap-8">
      <h2 className=" text-center text-xl md:text-4xl font-bold tex-black dark:text-white my-10 gap-10">Socials :</h2>
      </div>
      <CardHoverEffectDemo/>
      <LampDemo/>

    </div>
  );
}


