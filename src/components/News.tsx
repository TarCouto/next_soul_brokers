import Image from 'next/image';
import localFont from 'next/font/local';

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

export default function News() {
    return (
        <div className={`bg-white text-black p-4 md:p-12 ${clashDisplay.variable}`}>
            <h2 className="text-center text-xl font-medium font-clash-display mb-3">Conheça</h2>
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-8 font-clash-display">
                A tranquilidade que você precisa!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="relative h-64 md:h-auto">
                    <Image
                        src="/service1.png"
                        alt="Gestão de Transportes"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 md:static md:bg-transparent md:text-black">
                        <h2 className="text-lg font-bold font-clash-display mb-3 text-white md:text-black">Gestão de Transportes</h2>
                        <p className="text-sm font-clash-display text-gray-300 md:text-black">
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
                        </p>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-3">
                    <div className="flex flex-col md:flex-row h-64">
                        <div className="relative w-full h-2/5 md:w-2/5 md:h-full">
                            <Image
                                src="/service1.png"
                                alt="Acompanhamento de Frota"
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col justify-end p-4 bg-customTeal w-full h-3/5 md:w-3/5 md:h-full">
                            <h2 className="text-lg font-bold font-clash-display mb-3 text-white">Acompanhamento de Frota</h2>
                            <p className="text-sm font-clash-display text-gray-300">
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row h-64">
                        <div className="relative w-full h-2/5 md:w-2/5 md:h-full order-last md:order-none">
                            <Image
                                src="/service1.png"
                                alt="Segurança Empresarial"
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col justify-end p-4 bg-customBlue w-full h-3/5 md:w-3/5 md:h-full">
                            <h2 className="text-lg font-bold font-clash-display mb-3 text-white">Segurança Empresarial</h2>
                            <p className="text-sm font-clash-display text-gray-300">
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
