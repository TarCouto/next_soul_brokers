import Image from 'next/image';

export default function News() {
    return (
        <div className="bg-white text-black p-40 mt-8">
            <h2 className="text-center text-customGray text-xl font-medium font-clash-display mb-6">Conheça</h2>
            <h1 className="text-center text-3xl md:text-6xl font-bold mb-14 font-clash-display">
                A tranquilidade que você precisa!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative md:h-auto">
                    <Image
                        src="/parking.svg"
                        alt="Gestão de Transportes"
                        layout="responsive"
                        width={700}
                        height={450}
                        className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4  lg:h-56 custom-gradient-bg z-10">
                        <h2 className="text-lg font-bold font-clash-display h-ful mb-1 lg:mt-24 text-white">Gestão de Transportes</h2>
                        <p className="text-base font-clash-display text-gray-300 mb-20 w-2/3">
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
                        </p>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-4 ">
                    <div className="flex flex-col md:flex-row lg:h-[300px]">
                        <div className="relative w-full md:w-1/3 h-full">
                            <Image
                                src="/truck.svg"
                                alt="Acompanhamento de Frota"
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col justify-end p-4 bg-customTeal w-full lg:w-2/4">
                            <h2 className="text-2xl font-bold font-clash-display mb-3 text-white">Acompanhamento de Frota</h2>
                            <p className="text-base  font-clash-display text-gray-300">
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:h-[300px]">
                        <div className="flex flex-col justify-end p-4 bg-customBlue w-full lg:w-2/4 ">
                            <h2 className="text-2xl font-bold font-clash-display mb-3 text-white ">Segurança Empresarial</h2>
                            <p className="text-base font-clash-display text-gray-300">
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
                            </p>
                        </div>
                        <div className="relative w-full md:w-1/3 h-full">
                            <Image
                                src="/pessoas1.svg"
                                alt="Acompanhamento de Frota"
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
