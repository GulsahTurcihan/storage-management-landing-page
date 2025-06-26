import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 xl:gap-10">
      <Hero />
      <Features />
    </div>
  );
}
