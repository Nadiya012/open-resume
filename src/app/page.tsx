import { Hero } from "./home/Hero";
import { Steps } from "./home/Steps";
import { Features } from "./home/Features";
import { Testimonials } from "./home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Steps />
      <Features />
      <Testimonials />
    </main>
  );
}
