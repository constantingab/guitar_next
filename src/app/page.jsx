import Image from "next/image";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import Student from "../components/Student";
import Teacher from "../components/Teachers";
import Values from "../components/Values";
import Header from "@/components/Header";
import Statistics from "@/components/Statistics";
import Price from "@/components/Price";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Values />
      <Price />
      <Teacher />
      <Student />

      <Cta />
      <Footer />
    </div>
  );
}
