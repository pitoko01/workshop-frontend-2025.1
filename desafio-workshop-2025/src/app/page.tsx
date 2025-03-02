import Header from '@/components/header/Header';
import Card  from '@/components/card/Card';
import SearchBar from '@/components/searchbar/SearchBar';
import Slider from '@/components/slider/Slider';
import Footer from '@/components/footer/Footer';




export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <SearchBar />
      <h1 className="text-center text-2xl font-bold my-6"><Slider/></h1>
      <Card />
      <Footer />
    </div>
  );
}