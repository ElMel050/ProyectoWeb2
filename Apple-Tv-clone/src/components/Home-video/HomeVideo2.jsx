import { useEffect, useRef, useState } from 'react';
import videoFondo from '../../media/video/King_s Man.mp4';
import { motion } from 'framer-motion';
import './HomeVideo.css';

export default function HomeVideo() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            isPlaying ? video.play().catch(() => { }) : video.pause();
        }
    }, [isPlaying]);

    return (
        <section className="hero-section">
            <div className="ribbon">
                <p>
                    MLS Season Pass. Suscríbete ahora y disfruta todos los partidos, playoffs y más de la Major League Soccer en streaming.&nbsp;
                    <a href="https://tv.apple.com/channel/tvs.sbd.7000?l=es" target="_blank" rel="noreferrer">Más información</a>
                </p>
            </div>

            <div className="video-wrapper">
                <video
                    ref={videoRef}
                    className="background-video"
                    src={videoFondo}
                    muted
                    loop
                    playsInline
                />
                <div className="scrim" />

                <div className="video-controls">
                    <button onClick={() => setIsPlaying(false)} aria-label="Pausar video">⏸</button>
                    <button onClick={() => setIsPlaying(true)} aria-label="Reproducir video">▶️</button>
                </div>
            </div>

            <div className="hero-content">
                <h2>Todos los Apple Originals.<br />Sólo en Apple TV+.</h2>
                <div className="cta-buttons">
                    <a href="https://tv.apple.com/channel/tvs.sbd.4000" target="_blank" rel="noreferrer">Ver ahora</a>
                    <a href="https://tv.apple.com/channel/tvs.sbd.4000" target="_blank" rel="noreferrer">Pr uébalo gratis</a>
                </div>
                <p className="watch-on">Ver en la app Apple TV</p>
            </div>
        </section>
    );
}
