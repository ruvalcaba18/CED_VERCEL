"use client";
import React from 'react';
import Image from 'next/image';
import { NAVBAR_STYLES } from '../../Styles/NavbarStyles';
import { NAVBAR_DATA } from '../../Model/NavbarModel';
const NavbarBrand: React.FC = () => {
    const styles = NAVBAR_STYLES;
    const data = NAVBAR_DATA;
    return (
        <div className={styles.logo_wrap}>
            <div className="relative w-20 h-20 overflow-hidden rounded-full border-4 border-ced-accent shadow-[0_0_30px_rgba(34,197,94,0.6)] bg-white ring-4 ring-black shrink-0">
                <Image 
                    src="/images/logo_ced.jpeg" 
                    alt="Colegio CED Logo" 
                    fill
                    className="object-cover"
                />
            </div>
            <div className={styles.logo_text_wrap}>
                <span className="font-black tracking-tighter text-white text-2xl uppercase leading-none">{data.name}</span>
                <span className="text-[11px] text-ced-accent font-bold tracking-tight uppercase mt-1 leading-tight">{data.tagline}</span>
            </div>
        </div>
    );
};
export default NavbarBrand;
