import React from 'react';
import ContentSection from './ContentSection';
import Image from 'next/image';
import { Link } from 'phosphor-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white p-8">
            <div className='mb-20 text-white'>
                <ContentSection
                    title="Venha tomar um café conosco!"
                    description="Somos a Soul Brokers. Temos como propósito prestar serviços e criar soluções de seguros específicas para cada ramo de atuação."
                    titleColor="#FFFFFF" // Cor do título
                    buttonBgColor="#000000" // Cor de fundo do botão
                    buttonBorderColor="#FFFFFF" // Cor da borda do botão
                />

            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <a className='mb-40' href="/">
                        <Image
                            src="/logo02.png" // Ajuste conforme necessário
                            alt="Soul Brokers Logo"
                            width={118}
                            height={57}
                        />
                    </a>
                    <p className="mb-4 mt-6">
                        Somos a Soul Brokers. Temos como propósito prestar serviços e criar soluções de seguros específicas para cada ramo de atuação.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Localização</h3>
                    <p>Praça Silvio Romero, 55 - Conjunto 34</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Empresa</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Sobre nós</a></li>
                        <li><a href="#" className="hover:underline">Serviços</a></li>
                        <li><a href="#" className="hover:underline">Novidades</a></li>
                        <li><a href="#" className="hover:underline">Localização</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Ajuda</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Políticas de Uso</a></li>
                        <li><a href="#" className="hover:underline">Privacidade</a></li>
                        <li><a href="#" className="hover:underline">Termos de uso</a></li>
                        <li><a href="#" className="hover:underline">FAQs</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p>2024 Copyright - Todos os Direitos Reservados - SoulBrokers</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" aria-label="WhatsApp" className="hover:text-gray-400">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
