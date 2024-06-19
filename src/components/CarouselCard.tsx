'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
    items: {
        title: string;
        description: string;
        imageUrl: string;
    }[];
}

export default function CarouselCard({ items }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative w-full bg-customBlack justify-center lg:w-full lg:h-[903px]  flex text-white p-36 lg:flex ">
            <div className="px-8 w-full">
                <div className="grid grid-cols-12 items-start lg:-mt-[100px]">
                    <div className="col-span-12 lg:col-span-6">
                        <h2 className="text-4xl font-bold mt-24">Novidades</h2>
                        <p className="text-gray-400  lg:w-3/5 mt-6">
                            Mantenha-se atualizado sobre todas as novidades de tendências do mercado, nossas matérias são cuidadosamente selecionadas para deixar você sempre atualizado.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end items-start space-x-2 mt-4 lg:mt-16 lg:mr-28">
                        <button
                            className="flex items-center justify-center text-white bg-transparent border border-gray-700 p-2 rounded-full w-12 h-12 hover:bg-white hover:text-black transition duration-300"
                            onClick={scrollPrev}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            className="flex items-center justify-center text-white bg-transparent border border-gray-700 p-4 rounded-full w-12 h-12 hover:bg-white hover:text-black transition duration-300"
                            onClick={scrollNext}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                <div className=" mt-8 ">
                    <div ref={emblaRef} className="relative w-full space-x-3" >
                        <div className="flex space-x-3 ">
                            {items.map((item, index) => (
                                <div key={index} className="min-w-[250px] lg:max-w-[361px]  bg-customBlack border border-gray-700 p-6 flex-shrink-0 mt-10">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="h-48 w-full object-cover"
                                        width={313}
                                        height={227}
                                    />
                                    <h3 className="mt-4 font-semibold text-lg truncate">{item.title}</h3>
                                    <p className="mt-2 text-sm text-gray-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
