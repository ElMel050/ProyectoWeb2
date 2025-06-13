import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Button1 = ({
    text = "Click aquí",
    link = "#",
    external = false,
    variant = "primary",
    size = "md",
    className = "",
    animation = { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } },
}) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const content = (
        <Button variant={variant} size={size} className={`btn-custom ${className}`}>
            {text}
        </Button>
    );

    return (
        <motion.div
            ref={ref}
            initial={animation.initial}
            animate={inView ? animation.animate : animation.initial}
            transition={animation.transition}
        >
            {external ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn-ver">
                    {content}
                </a>
            ) : (
                <Link to={link} className="btn-ver">
                    {content}
                </Link>
            )}
        </motion.div>
    );
};

export default Button1;
