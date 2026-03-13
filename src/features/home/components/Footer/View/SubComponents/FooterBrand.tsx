"use client";
import React from 'react';
import Image from 'next/image';
import { FOOTER_STYLES } from '../../Styles/FooterStyles';
import { FOOTER_DATA } from '../../Model/FooterModel';
const FooterBrand: React.FC = () => {
    const styles = FOOTER_STYLES;
    const data = FOOTER_DATA;
    return (
        <div className={styles.brand_col}>
            <div className="relative w-24 h-24 mb-6 overflow-hidden rounded-full border-4 border-ced-accent shadow-[0_0_30px_rgba(34,197,94,0.4)] bg-white ring-4 ring-black/50">
                <Image 
                    src="/images/logo_ced.jpeg" 
                    alt="Colegio CED Logo" 
                    fill
                    className="object-cover"
                />
            </div>
            <span className={styles.brand_name}>
                COLEGIO <span className={styles.brand_accent}>CED</span>
            </span>
            <p className={styles.brand_desc}>{data.tagline}</p>
        </div>
    );
};
export default FooterBrand;
