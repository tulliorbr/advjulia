import About from "@/components/About";
import BtnFlutuant from "@/components/BtnFlutuant";
import Contact from "@/components/Contact";
import HowToHelp from "@/components/HowToHelp";
import ImageSlider from "@/components/ImageSlider";
import { Toaster } from 'react-hot-toast';


export default function Home() {
  return (
    <main className="bg-dark-brown text-white">
      <ImageSlider />
      <HowToHelp />
      <About />
      <Contact />
      <Toaster position="bottom-center" />
      <BtnFlutuant/>
    </main>
  );
}
