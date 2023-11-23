import Hero from "@/components/hero/Hero";
import CarouselPosts from "@/components/section/CarouselPostsSection";
import TistorySection from "@/components/section/TistorySection";
import GithubSection from "@/components/section/GithubSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CarouselPosts />
      <TistorySection />
      <GithubSection />
    </>
  );
}
