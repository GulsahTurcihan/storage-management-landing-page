import Image from "next/image";
import { featureMock } from "@/feature-content-mock";
import howItWorks from "@/public/assets/images/how-it-works.svg";
import { Separator } from "./ui/separator";

const Features = () => {
  return (
    <div className="grid grid-cols-1 gap mx-auto space-y-4">
      <h2 className="text-3xl font-semibold tracking-wider text-light-100 mt-6 ">
        Features
      </h2>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[12rem] px-4 lg:my-14 my-6">
        {featureMock.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center gap-3"
          >
            <Image
              src={feature.imageSrc}
              alt={feature.title}
              width={140}
              height={140}
            />
            <h3 className="text-lg text-light-100 font-semibold  hover:text-light-100/90 transition-all hover:scale-3d">
              {feature.title}
            </h3>
            <p className="text-sm text-light-200">{feature.description}</p>
          </div>
        ))}
      </section>
      <Separator />
      <section className="md:grid md:grid-cols-2 grid grid-cols-1 my-6 justify-between items-center gap-10">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-semibold tracking-wider text-light-100 pb-4">
            How It Works
          </h2>
          <ul className="space-y-2 pl-0.5 text-light-200">
            <li>1. Create an account</li>
            <li>2. Upload your files</li>
            <li>3. Access from anywhere</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <Image
            src={howItWorks}
            alt="how-it-works"
            width={380}
            height={380}
            className="flex justify-end"
          />
        </div>
      </section>
    </div>
  );
};
export default Features;
