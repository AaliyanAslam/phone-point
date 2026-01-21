import Image from "next/image";
import Link from "next/link";
import AllMobiles from "@/components/TopSelling";
import Hero from "@/components/Hero";
import DealContinueMarquee from "@/components/ui/DealContinueMarquee";

export default function page() {
  return (
    <>
      <DealContinueMarquee />
      <Hero />
      <AllMobiles />
    </>
  );
}
