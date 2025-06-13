import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import videoFondo from '../../media/video/video1.mp4';
import Button1 from '../Button/Button1';

import './HomeVideo3.css';

function HomeVideo() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerOpacity = scrollY < 200 ? 1 - scrollY / 200 : 0;

    return (
        <section className="home-video-section">
            {/* Video de fondo */}
            <video
                className="video-background"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoFondo} type="video/mp4" />
            </video>

            {/* Contenido principal */}
            <Container className="home-video-content text-white text-center d-flex flex-column justify-content-center align-items-center">
                {/* Título */}
                <motion.h1
                    className="display-4 fw-bold "
                    style={{ opacity: headerOpacity, fontSize: '6rem', textAlign: 'initial' }}
                >
                    Todos los Apple Originals.<br />
                    Sólo en Apple TV+.
                </motion.h1>

                {/* Botón */}
                <Button1
                    text="Ver Ahora"
                    link="/AppleTV+"
                    className="mt-3 align-self-start mx-5"
                />

                {/* Párrafos individuales con animación */}
                <section className="my-5 w-100">
                    <InView threshold={0.3}>
                        {({ inView, ref }) => (
                            <motion.p
                                ref={ref}
                                className="lead text-white mb-4"
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6 }}
                            >
                                Este es el primer párrafo con contenido personalizado.
                            </motion.p>
                        )}
                    </InView>

                    <InView threshold={0.3}>
                        {({ inView, ref }) => (
                            <motion.p
                                ref={ref}
                                className="lead text-white mb-4"
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6 }}
                            >
                                Segundo párrafo: información adicional sobre el sitio.
                            </motion.p>
                        )}
                    </InView>

                    <InView threshold={0.3}>
                        {({ inView, ref }) => (
                            <motion.p
                                ref={ref}
                                className="lead text-white mb-4"
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6 }}
                            >
                                Tercer párrafo: detalles técnicos u ofertas especiales.
                            </motion.p>
                        )}
                    </InView>
                </section>

                {/* Cards individuales con animación */}
                <section className="my-5 w-100">
                    <InView threshold={0.3}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                className="row"
                                initial={{ opacity: 0, y: 100 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Card 1</h5>
                                            <p className="card-text">Contenido personalizado de la tarjeta 1.</p>
                                            <button className="btn btn-outline-primary">Acción</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Card 2</h5>
                                            <p className="card-text">Texto distinto para esta tarjeta 2.</p>
                                            <button className="btn btn-outline-primary">Ver más</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Card 3</h5>
                                            <p className="card-text">Última tarjeta con otro contenido.</p>
                                            <button className="btn btn-outline-primary">Descubrir</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </section>
            </Container>
        </section>
    );
}

export default HomeVideo;
