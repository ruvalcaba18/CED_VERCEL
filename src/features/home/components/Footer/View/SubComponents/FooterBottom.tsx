"use client";
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { FOOTER_STYLES } from '../../Styles/FooterStyles';
import { FooterBottomComponentContract } from '../../Model/FooterModel';

const FooterBottom: React.FC<FooterBottomComponentContract> = ({ copyright, socials }) => {
    const styles = FOOTER_STYLES;
    
    const getSocialStyle = (label: string) => {
        if (label.toLowerCase() === 'facebook') return "bg-[#1877F2] text-white hover:bg-[#166fe5]";
        if (label.toLowerCase() === 'instagram') return "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90";
        return "bg-white/10 text-white hover:bg-white/20";
    };

    const getSocialIcon = (label: string) => {
        if (label.toLowerCase() === 'facebook') return <Facebook size={16} />;
        if (label.toLowerCase() === 'instagram') return <Instagram size={16} />;
        return null;
    };

    return (
        <div className={`${styles.bottom} flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4`}>
            <p className="order-2 md:order-1">{copyright}</p>
            <div className="flex flex-wrap justify-center gap-4 order-1 md:order-2">
                {socials.map(social => (
                    <a 
                        key={social.label} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[10px] tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg ${getSocialStyle(social.label)}`}
                    >
                        {getSocialIcon(social.label)}
                        {social.label}
                    </a>
                ))}
            </div>
        </div>
    );
};
export default FooterBottom;
