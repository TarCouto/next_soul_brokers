/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type ImageCarouselProps = {
    images: { src: string; text: string }[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentImg, setCurrentImg] = useState(0);

    const nextImage = () => {
        setCurrentImg((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImg((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 15 * 60 * 1000); // 15 minutos
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative  w-full  flex flex-col lg:flex-row -mt-36 ">
            <div className="flex flex-col w-full lg:w-3/5 mb-4 lg:mb-0">
                <div className="relative w-full h-[300px] lg:h-[500px] ">
                    <Image
                        src={images[currentImg].src}
                        alt={`Slide ${currentImg}`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                    <p className="text-sm absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1 w-3/4 lg:w-1/2">
                        {images[currentImg].text}
                    </p>
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                        <button
                            className="flex items-center justify-center text-white bg-transparent border border-gray-700 p-2 rounded-full w-8 h-8 lg:w-12 lg:h-12 hover:bg-white hover:text-black transition duration-300 focus:outline-none"
                            onClick={prevImage}
                        >
                            &#10094;
                        </button>
                        <button
                            className="flex items-center justify-center text-white bg-transparent border border-gray-700 p-2 rounded-full w-8 h-8 lg:w-12 lg:h-12 hover:bg-white hover:text-black transition duration-300 focus:outline-none"
                            onClick={nextImage}
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex flex-col w-full lg:w-2/5 gap-4 pl-0 lg:pl-4">
                <div className="relative w-full h-[300px] lg:h-[500px]">
                    <Image
                        src={images[(currentImg + 1) % images.length].src}
                        alt={`Slide ${(currentImg + 1) % images.length}`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                    <p className="text-sm absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1 w-3/4 lg:w-1/2">
                        {images[(currentImg + 1) % images.length].text}
                    </p>
                </div>
            </div>
        </div>
    );
}
