import Card from "@/components/card/Card";
import Header from "@/components/header/Header";
import SearchBar from "@/components/searchbar/SearchBar";
import Footer from '@/components/footer/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cartas",
  description: "Cartas de Pokémon",
  icons:{
    icon: ['/favicon.ico'],
  }
};

export default function Cards() {
  return (
    <main>
      <Header />
      <SearchBar />
      <Card />
      <Footer />
    </main>
  );
}
