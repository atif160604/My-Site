import React, { useEffect, useRef } from "react";
import Description from "./Description";
import Tech from "./Tech";
import "../../styles/Project.css";

export default function Project({ projectName, description, image, tech }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate how much of the element is visible in the viewport
                const visibleRatio = Math.max(
                    0,
                    Math.min(1, (windowHeight - rect.top) / windowHeight)
                );

                // Adjusted scaleFactor to reach the original size quicker
                const scaleFactor = 0.6 + visibleRatio * 0.7; // Starts at 0.6 and grows to 1.3
                containerRef.current.style.transform = `scale(${Math.min(scaleFactor, 1)})`; // Ensure it doesn't exceed 1
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.addEventListener('scroll', handleScroll);
                    handleScroll(); // Call it immediately to set the initial scale
                } else {
                    window.removeEventListener('scroll', handleScroll);
                }
            },
            { threshold: [0, 1] }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className="container" ref={containerRef}>
            <div>
                <Description project={projectName} des={description} />
                <Tech stack={tech} />
            </div>
            <div className="image-padding">
                <img
                    src={image}
                    width="400"
                    height="400"
                    alt="project"
                    className="right"
                />
            </div>
        </div>
    );
}