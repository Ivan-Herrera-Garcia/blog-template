'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function EducationSection() {
    const [openModal, setOpenModal] = useState(null);

    const open = (school) => setOpenModal(school);
    const close = () => setOpenModal(null);

    return (
        <section className="bg-white p-6 rounded shadow-md mb-6 transition-all duration-300 hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-[1.01]">
            <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
            <ul className="text-sm list-disc list-item space-y-2">
                <li>
                    <button
                        onClick={() => open('teclaguna')}
                        className="text-left hover:underline text-black underline hover:cursor-pointer font-semibold"
                    >
                        Ingeniería en Sistemas Computacionales - Instituto Tecnológico de La Laguna (2018 – 2023). GPA: 90.02 / 3.6
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => open('conalep')}
                        className="text-left hover:underline text-black underline hover:cursor-pointer font-semibold"
                    >
                        Técnico en Informática - CONALEP San Pedro (2015 – 2018)
                    </button>
                </li>
            </ul>

            {/* Modal Tec Laguna */}
            {openModal === 'teclaguna' && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[999px]">
                    <div className="bg-white p-6 rounded-lg max-w-md shadow-lg relative">
                        <button onClick={close} className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:cursor-pointer">&times;</button>
                        <Image
                            src="/logo_tec_laguna.gif"
                            alt="Logo Tec Laguna"
                            width={100}
                            height={100}
                            className="mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 text-center">Instituto Tecnológico de La Laguna</h3>
                        <p className="text-sm text-gray-700 text-center">
                            Poseer habilidades metodológicas de investigación que
                            fortalezcan el desarrollo cultural, científico y tecnológico en el
                            ámbito de sistemas computacionales y disciplinas afines.
                        </p>
                    </div>
                </div>
            )}

            {/* Modal CONALEP */}
            {openModal === 'conalep' && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[999px]">
                    <div className="bg-white p-6 rounded-lg max-w-md shadow-lg relative">
                        <button onClick={close} className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:cursor-pointer">&times;</button>
                        <Image
                            src="/logo_conalep.jpg"
                            alt="Logo CONALEP"
                            width={100}
                            height={100}
                            className="mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 text-center">CONALEP San Pedro</h3>
                        <p className="text-sm text-gray-700 text-center">
                            Desempeñar funciones técnico-operativas inherentes al desarrollo e implantación de soluciones de tecnologías de información basados en la automatización, organización, codificación, recuperación de la información y optimización de recursos informáticos a fin de impulsar la competitividad, las buenas prácticas y toma de decisiones en organizaciones o empresas de cualquier ámbito.                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
