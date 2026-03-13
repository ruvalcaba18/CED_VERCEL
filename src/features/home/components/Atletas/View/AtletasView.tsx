"use client";
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ATLETAS_STYLES } from '../Styles/AtletasStyles';
import { ATLETAS_DATA } from '../Model/AtletasModel';
import AtletaCard from './SubComponents/AtletaCard';

const AtletasView: React.FC = () => {
    const atletasStyles = ATLETAS_STYLES;
    const atletasData = ATLETAS_DATA;
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            
            if (direction === 'left' && scrollLeft <= 0) {
                scrollRef.current.scrollTo({
                    left: scrollWidth - clientWidth,
                    behavior: 'smooth'
                });
            } else if (direction === 'right' && scrollLeft + clientWidth >= scrollWidth - 10) {
                scrollRef.current.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                scrollRef.current.scrollTo({
                    left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section id="atletas" className={atletasStyles.section}>
            <div className={atletasStyles.container}>
                <div className={atletasStyles.header}>
                    <span className={atletasStyles.label}>{atletasData.label}</span>
                    <h2 className={atletasStyles.title}>{atletasData.title}</h2>
                    <div className={atletasStyles.divider}></div>
                </div>

                <div className="relative group/carousel">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 bg-ced-accent text-white p-5 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border-4 border-black/50 backdrop-blur-md"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={28} strokeWidth={3} />
                    </button>

                    <div 
                        ref={scrollRef}
                        className={atletasStyles.grid}
                    >
                        {atletasData.items.map((atleta, index) => (
                            <AtletaCard 
                                key={index}
                                name={atleta.name}
                                sport={atleta.sport}
                                image={atleta.image}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 bg-ced-accent text-white p-5 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border-4 border-black/50 backdrop-blur-md"
                        aria-label="Siguiente"
                    >
                        <ChevronRight size={28} strokeWidth={3} />
                    </button>
                    
                    {/* Visual hint for desktop */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10 opacity-60"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10 opacity-60"></div>
                </div>
            </div>
        </section>
    );
};

export default AtletasView;
