import ContentSection from "@/components/ContentSection";
import Image from "next/image";
import localFont from 'next/font/local';
import ImageCarousel from '@/components/ImageCarousel';
import Services from "@/components/Services"
import CarouselCard from "@/components/CarouselCard";
import News from "@/components/News";


const images = [
  {
    src: '/ship.svg',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.',
  },
  {
    src: '/container.svg',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.',
  },

];


const items = [
  {
    title: "Susep fornece novas dire...",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: "/card01.png",
  },
  {
    title: "Abril Verde: Segurança e ...",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: "/card02.png",
  },
  {
    title: "A importância da medicin...",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: "/card03.png",
  },
  {
    title: "Como o mercado...",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: "/card04.svg",
  },


];

// Configurando a fonte Clash Display


export default function Home() {
  return (
    <div className="">
      <div className='mt-36 flex flex-col items-center justify-start w-full'>
        <ImageCarousel images={images} />
        <News />
        <CarouselCard items={items} />
        <Services />
      </div>

    </div>
  );
}
