import Header from "@/components/header/Header";
import RandomPackButton from '@/components/randombutton/RandomPackButton';
import Footer from '@/components/footer/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerador de pacotes aleatórios",
  description: "Gerador de pacotes aleatórios de Pokémon",
  icons:{
    icon: ['/favicon.ico'],
  }
};

export default function Cards() {
  return (
    <main>
      <Header />
      <RandomPackButton />
      <Footer />
    </main>
  );
}