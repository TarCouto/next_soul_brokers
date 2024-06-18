'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import ContentSection from './ContentSection';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md mt-20">
            <div className="flex justify-between items-center px-4 py-3 lg:px-60 lg:py-3">
                <div className="flex justify-start">
                    <Link href="/">
                        <div className="relative w-[100px] h-[50px] lg:w-[118px] lg:h-[57px]">
                            <Image
                                src="/logo1.png" // Ajuste conforme necessário
                                alt="Soul Brokers Logo"
                                width={320}
                                height={120}
                            />
                        </div>
                    </Link>
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
                        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>
                <nav className="hidden lg:flex justify-center space-x-12 font-general-sans">
                    <Link href="/home" className="text-base font-base text-gray-500 hover:text-gray-900 font-general-sans">
                        Home
                    </Link>
                    <Link href="/about" className="text-base font-base text-gray-500 hover:text-gray-900 whitespace-nowrap font-general-sans">
                        Quem somos
                    </Link>
                    <Link href="/services" className="text-base font-base text-gray-500 hover:text-gray-900 font-general-sans">
                        Serviços
                    </Link>
                    <Link href="/news" className="text-base font-base text-gray-500 hover:text-gray-900 font-general-sans">
                        Novidades
                    </Link>
                    <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900 font-general-sans">
                        Localização
                    </Link>
                </nav>
                <div className="hidden lg:flex">
                    <Link href="/contact" className="whitespace-nowrap inline-flex items-center justify-center px-[25px] py-[13px] border border-[#000000] rounded-full shadow-sm text-base font-medium text-[#000000] bg-white hover:bg-gray-100">
                        Entrar em Contato
                    </Link>
                </div>

            </div>
            {menuOpen && (
                <nav className="lg:hidden bg-gray-700 bg-opacity-75 fixed inset-0 z-50 flex flex-col items-center justify-center space-y-4 mt-40 ml-40 w-46 h-46">
                    <Link href="/home" className="text-base font-base text-white hover:text-gray-300 font-general-sans" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/about" className="text-base font-base text-white hover:text-gray-300 whitespace-nowrap font-general-sans" onClick={() => setMenuOpen(false)}>
                        Quem somos
                    </Link>
                    <Link href="/services" className="text-base font-base text-white hover:text-gray-300 font-general-sans" onClick={() => setMenuOpen(false)}>
                        Serviços
                    </Link>
                    <Link href="/news" className="text-base font-base text-white hover:text-gray-300 font-general-sans" onClick={() => setMenuOpen(false)}>
                        Novidades
                    </Link>
                    <Link href="/contact" className="text-base font-medium text-white hover:text-gray-300 font-general-sans" onClick={() => setMenuOpen(false)}>
                        Localização
                    </Link>

                </nav>
            )}
            <ContentSection
                title="Nossa essência é cuidar de você!"
                description="Somos a Soul Brokers. Temos como propósito prestar serviços e criar soluções de seguros específicas para cada ramo de atuação."
                titleColor="#101010" // Cor do título
                buttonBgColor="#0C0A0A" // Cor de fundo do botão
                buttonBorderColor="#0C0A0A" // Cor da borda do botão
            />
        </header>
    );
}
