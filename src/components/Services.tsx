// components/Services.tsx
import Image from 'next/image';

type Service = {
    title: string;
    description: string;
    imageUrl: string;
};

const services: Service[] = [
    {
        title: 'Planos de Saúde',
        description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries.',
        imageUrl: '/services03.png',
    },
    {
        title: 'Seguro de Frota',
        description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries.',
        imageUrl: '/services02.png',
    },
    {
        title: 'Seguro Empresarial',
        description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries.',
        imageUrl: '/services01.png',
    },
];

export default function Services() {
    return (
        <section className="p-20">
            <h1 className="text-5xl font-black mb-8">Nossos serviços</h1>
            <hr className="border-t-2 border-gray-300 mb-8" />
            <div className="space-y-8">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col  md:flex-row md:items-start md:space-x-1">
                        <div className="flex justify-center md:justify-start mr-10">
                            <Image src={service.imageUrl} alt={service.title} width={300} height={200} className="rounded-sm" />
                        </div>
                        <div className="md:w-2/3 mt-0">
                            <h3 className="text-4xl font-bold">{service.title}</h3>
                            <p className="mt-4 text-gray-600 md:w-3/5">{service.description}</p>
                            <button className="mt-6 px-4 py-2 bg-white text-black  border border-black rounded-full flex items-center ">
                                Conheça
                                <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
