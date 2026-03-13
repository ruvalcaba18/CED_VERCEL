"use client";
import React from 'react';
import { FOOTER_STYLES } from '../../Styles/FooterStyles';
import { FooterBottomComponentContract } from '../../Model/FooterModel';
const FooterBottom: React.FC<FooterBottomComponentContract> = ({ copyright, socials }) => {
    const styles = FOOTER_STYLES;
    return (
        <div className={styles.bottom}>
            <p>{copyright}</p>
            <div className="flex gap-10">
                {socials.map(social => (
                    <a 
                        key={social.label} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-ced-accent transition-colors"
                    >
                        {social.label}
                    </a>
                ))}
            </div>
        </div>
    );
};
export default FooterBottom;
