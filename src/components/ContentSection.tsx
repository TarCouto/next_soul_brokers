import { FaArrowRight } from 'react-icons/fa';

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

interface ContentSectionProps {
    title: string;
    description: string;
    titleColor: string;
    buttonBgColor: string;
    buttonBorderColor: string;
    titleTransform: string; // Nova prop para o transform do título
    descriptionTransform: string; // Nova prop para o transform da descrição
}

export default function ContentSection({ title, description, titleColor, buttonBgColor, buttonBorderColor, titleTransform, descriptionTransform }: ContentSectionProps) {
    return (
        <div className="container mx-auto mb-10 mt-10 lg:mr-8  ">
            <div className="flex flex-col lg:flex-row lg:items-center mt-11 lg:w-[1280px] lg:h-[196px] gap-4 ">

                {/* Título alinhado mais à esquerda */}
                <div className="flex-1 text-black font-black flex justify-center lg:justify-start p-2 "
                    style={{ transform: titleTransform }}> {/* Usando transform para mover */}
                    <h1 className="font-clash font-black text-2xl md:text-4xl lg:text-7xl leading-tight text-left break-words w-full max-w-[700px]"
                        style={{ color: titleColor }}>
                        {title}
                    </h1>
                </div>

                {/* Descrição e botão alinhados mais à direita */}
                <div className="flex-1 flex flex-col items-center lg:items-start p-0 mt-3 lg:mt-0"
                    style={{ transform: descriptionTransform }}> {/* Usando transform para mover */}
                    <p className="text-lg font-light text-customGray leading-relaxed w-2/3 lg:w-[70%]">
                        {description}
                    </p>
                    <button
                        className="mt-10 inline-flex items-center px-4 py-3 border text-base font-medium rounded-full text-white hover:bg-gray-800"
                        style={{ backgroundColor: buttonBgColor, borderColor: buttonBorderColor }}
                    >
                        Conheça nossos serviços
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}
