import { FaArrowRight } from 'react-icons/fa';
import localFont from 'next/font/local';
import ImageCarousel from './ImageCarousel';

const images = [
    {
        src: '/carousel1.png',
        text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.',
    },
    {
        src: '/carousel1.png',
        text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.',
    },
];

// Configurando a fonte Clash Display
const clashDisplay = localFont({
    src: [
        {
            path: '../font/ClashDisplay-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-clash-display',
});

interface ContentSectionProps {
    title: string;
    description: string;
}

export default function ContentSection({ title, description }: ContentSectionProps) {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-center mt-11">
                {/* Primeira coluna */}
                <div className="lg:col-span-2 flex justify-center lg:justify-start p-2 order-1 lg:order-2">
                    <h1 className={`font-clash text-custom-2xl md:text-custom-4xl lg:text-custom-5xl font-bold leading-tight text-left ${clashDisplay.variable} break-words w-full max-w-[700px]`}>
                        {title}
                    </h1>
                </div>
                {/* Segunda coluna */}
                <div className="lg:col-span-1 flex flex-col items-center lg:items-start p-3 rounded-md mt-3 order-2 lg:order-2 lg:ml-[-20px]">
                    <p className="text-lg font-light text-gray-600 leading-relaxed">
                        {description}
                    </p>
                    <button className="mt-10 inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800">
                        Conheça nossos serviços
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}
