import Image from "next/image";
import { featureMock } from "@/feature-content-mock";

const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
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
          <p className="text-sm text-light-200 max-w-xs mx-auto">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
};
export default Features;
