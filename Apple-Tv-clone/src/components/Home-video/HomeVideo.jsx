import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import videoFondo from '../../media/video/King_s Man.mp4';

function HomeVideo() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerOpacity = scrollY < 200 ? 1 - scrollY / 200 : 0;

    return (
        <div className="position-relative" style={{ minHeight: '100vh', overflow: 'hidden' }}>

            {/* VIDEO cubriendo TODO el componente */}
            <video
                className="position-fixed top-0 start-0 w-100 h-100 object-fit-cover"
                autoPlay
                loop
                muted
                style={{
                    zIndex: 1,
                    pointerEvents: 'none', // para que no bloquee clicks
                    objectFit: 'cover',     // mantiene proporciones
                    objectPosition: 'center' // centrado
                }}
            >
                <source src={videoFondo} type="video/mp4" />
            </video>


            {/* CONTENIDO COMPLETO ENCIMA DEL VIDEO */}
            <Container className="position-relative" style={{ zIndex: 1 }}>
                {/* SECCIÓN INICIAL */}
                <section className="vh-100 d-flex flex-column justify-content-center align-items-center text-white text-center px-3">
                    <motion.h1
                        className="display-4 fw-bold"
                        style={{ opacity: headerOpacity }}
                    >
                        Tu Título
                    </motion.h1>
                    <motion.button
                        className="btn btn-primary mt-3"
                        style={{ opacity: headerOpacity }}
                    >
                        Ver Ahora
                    </motion.button>
                </section>

                {/* PÁRRAFOS */}
                <section className="my-5">
                    {[...Array(4)].map((_, index) => (
                        <InView key={index} threshold={0.3} triggerOnce>
                            {({ inView, ref }) => (
                                <motion.p
                                    ref={ref}
                                    className="lead mb-4 text-white "
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    Este es el párrafo número {index + 1}. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </motion.p>
                            )}
                        </InView>
                    ))}
                </section>

                {/* CARDS */}
                <section className="my-5">
                    <InView threshold={0.3} triggerOnce>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                className="row"
                                initial={{ opacity: 0, y: 100 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7 }}
                            >
                                {[...Array(3)].map((_, i) => (
                                    <div className="col-md-4 mb-4" key={i}>
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">Card {i + 1}</h5>
                                                <p className="card-text">Contenido descriptivo.</p>
                                                <button className="btn btn-outline-primary">Acción</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </InView>
                </section>
            </Container>
        </div>
    );
}

export default HomeVideo;
