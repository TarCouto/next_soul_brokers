'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import ContentSection from './ContentSection';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <header className="bg-white lg:pl-32 mt-20 md:pl-20 md:-ml-40">
                <div className="flex  items-center px-4 py-3 lg:ml-[80px] lg:py-3 lg:w-[1280px] lg:h-[65px] md:ml-[40px] md:py-2 md:w-[960px] md:h-[50px] sm:ml-[20px] sm:py-1 sm:w-[640px] sm:h-[40px]">
                    <div className="flex justify-start lg:w-[167px] lg:h-[65px] ">
                        <Link href="/">
                            <div className="relative w-[100px] h-[50px] lg:w-[167px] lg:h-[65px] lg:mr-[158px]">
                                <Image
                                    src="/logo1.png" // Ajuste conforme necessário
                                    alt="Soul Brokers Logo"
                                    width={500}
                                    height={195}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
                            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                        </button>
                    </div>
                    <nav className="hidden lg:flex justify-center space-x-12 font-general-sans lg:ml-[158px]">
                        <Link href="/" className="text-base font-base text-gray-500 hover:text-gray-900 font-general-sans">
                            Home
                        </Link>
                        <Link href="/" className="text-base font-base text-gray-500 hover:text-gray-900 whitespace-nowrap font-general-sans">
                            Quem somos
                        </Link>
                        <Link href="/" className="text-base font-base text-gray-500 hover:text-gray-900 font-general-sans">
                            Serviços
                        </Link>
                        <Link href="/" className="text-base font-base text-gray-500 hover:text-gray-900 font-general-sans">
                            Novidades
                        </Link>
                        <Link href="/" className="text-base font-base text-gray-500 hover:text-gray-900 font-general-sans">
                            Localização
                        </Link>
                    </nav>
                    <div className="hidden  md:ml-[100px] lg:flex lg:ml-[195px] ">
                        <Link href="/" className="whitespace-nowrap inline-flex items-center justify-center px-[25px] py-[13px] border border-[#000000] rounded-full shadow-sm text-base font-medium text-[#000000] bg-white hover:bg-gray-100">
                            Entrar em Contato
                        </Link>
                    </div>

                </div>
                {menuOpen && (
                    <nav className="lg:hidden bg-gray-700 bg-opacity-75 fixed inset-0 z-50 flex flex-col items-center justify-center space-y-4 mt-40 ml-40 w-46 h-46">
                        <Link href="/" className="text-base font-base text-white hover:text-gray-300 font-general-sans" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="/" className="text-base font-base text-white hover:text-gray-300 whitespace-nowrap font-general-sans" onClick={() => setMenuOpen(false)}>
                            Quem somos
                        </Link>
                        <Link href="/" className="text-base font-base text-white hover:text-gray-300 font-general-sans" onClick={() => setMenuOpen(false)}>
                            Serviços
                        </Link>
                        <Link href="/" className="text-base font-base text-white hover:text-gray-300 font-general-sans" onClick={() => setMenuOpen(false)}>
                            Novidades
                        </Link>
                        <Link href="/" className="text-base font-medium text-white hover:text-gray-300 font-general-sans" onClick={() => setMenuOpen(false)}>
                            Localização
                        </Link>

                    </nav>
                )}

            </header>
            <ContentSection
                title="Nossa essência é cuidar de você!"
                description="Somos a Soul Brokers. Temos como propósito prestar serviços e criar soluções de seguros específicas para cada ramo de atuação."
                titleColor="#101010" // Cor do título
                buttonBgColor="#0C0A0A" // Cor de fundo do botão
                buttonBorderColor="#0C0A0A"
                titleTransform="translateX(-50px)"
                descriptionTransform="translateX(15px)" // Cor da borda do botão
            />
        </div>
    );
}
