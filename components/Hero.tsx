import Image from "next/image";
import cloudFile from "@/public/assets/images/cloud-file.svg";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Hero = () => {
  return (
    <>
      <section className="lg:grid lg:grid-cols-3 md:gap-4 grid-cols-1 space-y-2">
        <div className="md:col-span-2">
          <h1 className="md:text-6xl text-3xl font-semibold tracking-wide py-4 text-light-100 hover:text-light-100/90 transition-all hover:scale-3d">
            Simplify your file management
          </h1>
          <div className=" lg:pr-[14rem]">
            <p className="text-md text-light-200 tracking-wide text-justify">
              Streamline your document storage, and access with our easy-to-use
              platform. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, qui magnam. Eos, voluptate. Expedita voluptatibus qui
              laudantium earum neque accusamus.
            </p>
            <Button className="mt-6 w-1/2 bg-brand-100 hover:bg-brand rounded-4xl h-12 cursor-pointer mb-6">
              Get Started
            </Button>
          </div>
        </div>
        <Image
          src={cloudFile}
          alt="file-png"
          width={320}
          height={320}
          className="md:col-span-1 mt-4 hover hidden lg:flex transition-all hover:scale-105"
        />
      </section>
      <Separator />
    </>
  );
};
export default Hero;
