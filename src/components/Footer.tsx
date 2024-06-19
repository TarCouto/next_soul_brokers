import React from 'react';
import ContentSection from './ContentSection';
import Image from 'next/image';
import { Link } from 'phosphor-react';

export default function Footer() {
    return (
        <footer className="bg-customBlack text-white p-8">
            <div className='mb-20 text-white'>
                <ContentSection
                    title="Venha tomar um café conosco!"
                    description="Somos a Soul Brokers. Temos como propósito prestar serviços e criar soluções de seguros específicas para cada ramo de atuação."
                    titleColor="#FFFFFF" // Cor do título
                    buttonBgColor="#0C0A0A" // Cor de fundo do botão
                    buttonBorderColor="#FFFFFF"
                    titleTransform="translateX(-30px)"
                    descriptionTransform="translateX(100px)" // Cor da borda do botão
                />
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-7">
                <div>
                    <a className='mb-40' href="/">
                        <Image
                            src="/logo02.png" // Ajuste conforme necessário
                            alt="Soul Brokers Logo"
                            width={118}
                            height={57}
                        />
                    </a>
                    <div className="text-left w-full lg:w-5/5">
                        <p className="text-left mb-4 mt-6 text-lg leading-relaxed ">
                            Somos a Soul Brokers. Temos como propósito prestar serviços e criar soluções de seguros específicas para cada ramo de atuação.
                        </p>
                    </div>
                </div>

                <div className='mt-16'>
                    <h3 className="text-xl font-semibold mb-4">Localização</h3>
                    <p>Praça Silvio Romero, 55 - Conjunto 34</p>
                </div>
                <div className='lg:flex lg:items-start mt-16'>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Empresa</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline text-customGray">Sobre nós</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-customGray">Serviços</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-customGray">Novidades</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-customGray">Localização</a></li>
                        </ul>
                    </div>
                    <div className='lg:w-6/6 ml-40'>
                        <h3 className="text-xl font-semibold mb-4">Ajuda</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline text-customGray whitespace-nowrap">Políticas de Uso</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-customGray">Privacidade</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-customGray">Termos de uso</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline text-customGray">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center border-t border-gray-700 mt-2 pt-2 text-center">
                <p className='lg:ml-'>2024 Copyright - Todos os Direitos Reservados - SoulBrokers</p>
                <div className="flex justify-center my-4 lg:ml-40">
                    <Image
                        src="/logofooter.svg"
                        alt="Soul Brokers Logo"
                        width={147}
                        height={65}
                    />
                </div>
                <div className="flex justify-center space-x-4 mt-4 lg:ml-[317px]">
                    <a href="#" aria-label="WhatsApp" className="hover:text-gray-400">
                        <Image src="/whatsapp.svg" alt="WhatsApp" width={34} height={34} />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                        <Image src="/insta.svg" alt="Instagram" width={34} height={34} />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                        <Image src="/face.svg" alt="Facebook" width={34} height={34} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
