"use client";
import React from 'react';
import Image from "next/image";
import { PILARES_STYLES } from '../../Styles/PilaresStyles';
import { PILARES_DATA } from '../../Model/PilaresModel';
const PilaresImage: React.FC = () => {
    const styles = PILARES_STYLES;
    const data = PILARES_DATA;
    return (
        <div className="mt-16 flex flex-col items-center">
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-[12px] border-ced-accent shadow-[0_0_80px_rgba(34,197,94,0.6)] animate-pulse bg-white ring-[16px] ring-black/20">
                <Image
                    src="/images/logo_ced.jpeg"
                    alt="Logo Colegio CED"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 224px, 320px"
                />
            </div>
            <div className="mt-12 max-w-2xl text-center">
                <p className="text-white font-black text-3xl md:text-5xl italic tracking-tighter leading-tight drop-shadow-2xl">
                    "{data.quote}"
                </p>
                <div className="w-24 h-1.5 bg-ced-accent mx-auto mt-6 rounded-full"></div>
            </div>
        </div>
    );
};
export default PilaresImage;
