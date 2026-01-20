import Image from "next/image";
import Link from "next/link";
import AllMobiles from "@/components/AllMobiles";
import Hero from "@/components/Hero";

export default function page() {
  return (
    <>
      {/* <Link href="/admin/add-mobile">Add Mobile</Link> */}
      <Hero />
      <AllMobiles />
    </>
  );
}
