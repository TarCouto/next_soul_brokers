/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type ImageCarouselProps = {
    images: { src: string; text: string }[];
};

const imageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
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
        <div className="relative w-full flex flex-col lg:flex-row -mt-28">
            <div className="flex flex-col w-full lg:w-8/12 mb-4 lg:mb-0">
                <div className="relative w-full h-[300px] lg:h-[700px] overflow-hidden">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={images[currentImg].src}
                            variants={imageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="absolute w-full h-full"
                        >
                            <Image
                                src={images[currentImg].src}
                                alt={`Slide ${currentImg}`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            <p className="text-sm absolute bottom-4 left-4 text-gray-400 bg-opacity-50 px-2 py-1 w-3/4 lg:w-1/2 ml-20">
                                {images[currentImg].text}
                            </p>
                        </motion.div>
                    </AnimatePresence>
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
            <div className="hidden lg:flex flex-col w-full lg:w-4/12 pl-0 lg:pl-4">
                <div className="relative w-full h-[300px] lg:h-[700px]">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={images[(currentImg + 1) % images.length].src}
                            variants={imageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="absolute w-full h-full"
                        >
                            <Image
                                src={images[(currentImg + 1) % images.length].src}
                                alt={`Slide ${(currentImg + 1) % images.length}`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            <p className="text-sm absolute bottom-4 left-4 text-gray-400 bg-opacity-50 px-2 py-1 w-3/4 lg:w-full">
                                {images[(currentImg + 1) % images.length].text}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
