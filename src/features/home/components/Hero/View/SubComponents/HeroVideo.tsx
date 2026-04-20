"use client";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { HERO_STYLES } from '../../Styles/HeroStyles';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VIDEOS = [
    { src: '/images/ced_promo_video.mp4', label: 'CED Promo' },
    { src: '/images/natalia_escalera_prom.mp4', label: 'Natalia Escalera' },
    { src: '/images/ian_jeremy.mp4', label: 'Ian Jeremy' },
];

function getRandomOrder() {
    const indices = VIDEOS.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
}

const HeroVideo: React.FC = () => {
    const styles = HERO_STYLES;

    const [order] = useState<number[]>(getRandomOrder);
    const [current, setCurrent] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const total = VIDEOS.length;

    const pauseAll = useCallback(() => {
        videoRefs.current.forEach((v: HTMLVideoElement | null) => {
            if (v) { v.pause(); v.currentTime = 0; }
        });
    }, []);

    const goTo = useCallback((index: number) => {
        pauseAll();
        setCurrent(index);
    }, [pauseAll]);

    const prev = () => goTo((current - 1 + total) % total);
    const next = () => goTo((current + 1) % total);

    useEffect(() => {
        const vid = videoRefs.current[current];
        if (vid) {
            vid.play().catch(() => {/* autoplay may be blocked, that's ok */});
        }
    }, [current]);

    return (
        <div className={styles.img_container}>
            <div className={`${styles.img_wrap} aspect-[9/16] w-[280px] md:w-[340px] shadow-2xl p-3 md:p-4 bg-white/5 backdrop-blur-sm`} style={{ position: 'relative', overflow: 'hidden' }}>

  
                {order.map((videoIdx, carouselPos) => (
                    <video
                        key={videoIdx}
                        ref={(el) => { videoRefs.current[carouselPos] = el; }}
                        src={VIDEOS[videoIdx].src}
                        controls
                        loop
                        playsInline
                        className={`${styles.img} rounded-xl`}
                        style={{
                            position: 'absolute',
                            top: '0.75rem',
                            left: '0.75rem',
                            right: '0.75rem',
                            bottom: '1.25rem', // Extra space at bottom for indicators
                            opacity: carouselPos === current ? 1 : 0,
                            pointerEvents: carouselPos === current ? 'auto' : 'none',
                            transition: 'opacity 0.5s ease',
                            width: 'calc(100% - 1.5rem)',
                            height: 'calc(100% - 2.5rem)',
                            objectFit: 'cover',
                        }}
                    />
                ))}

                <div className={styles.img_fade} />

                {/* Arrow buttons */}
                <button
                    onClick={prev}
                    aria-label="Video anterior"
                    style={{
                        position: 'absolute',
                        left: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 20,
                        background: 'rgba(2,6,23,0.65)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '50%',
                        width: '2.5rem',
                        height: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backdropFilter: 'blur(6px)',
                        transition: 'background 0.2s',
                        color: 'white',
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(30,80,200,0.75)'; }}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(2,6,23,0.65)'; }}
                >
                    <ChevronLeft size={18} />
                </button>

                <button
                    onClick={next}
                    aria-label="Siguiente video"
                    style={{
                        position: 'absolute',
                        right: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 20,
                        background: 'rgba(2,6,23,0.65)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '50%',
                        width: '2.5rem',
                        height: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backdropFilter: 'blur(6px)',
                        transition: 'background 0.2s',
                        color: 'white',
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(30,80,200,0.75)'; }}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(2,6,23,0.65)'; }}
                >
                    <ChevronRight size={18} />
                </button>

                {/* Dot indicators */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0.85rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 20,
                        display: 'flex',
                        gap: '0.45rem',
                        alignItems: 'center',
                    }}
                >
                    {order.map((_, carouselPos) => (
                        <button
                            key={carouselPos}
                            onClick={() => goTo(carouselPos)}
                            aria-label={`Ir al video ${carouselPos + 1}`}
                            style={{
                                width: carouselPos === current ? '1.5rem' : '0.55rem',
                                height: '0.55rem',
                                borderRadius: '1rem',
                                background: carouselPos === current
                                    ? '#3b82f6'
                                    : 'rgba(255,255,255,0.4)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                padding: 0,
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.glow} />
        </div>
    );
};

export default HeroVideo;
