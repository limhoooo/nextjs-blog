import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import CarouselPosts from "@/components/CarouselPosts";
import TistorySection from "@/components/TistorySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <FeaturedPosts /> */}
      <CarouselPosts />
      <TistorySection />
    </>
  );
}
