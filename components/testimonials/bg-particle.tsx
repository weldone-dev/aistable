"use client";
import {useCallback} from 'react';
import Particles from "react-particles";
import {Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";
import star from "@/public/star.svg";

const BgParticle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);
    return (
        <Particles
            id={"testimonials-particles"}
            className={"w-full h-full"}
            init={particlesInit}
            options={{
                particles: {
                    number: {value: 30},
                    color: {value: "#000"},
                    shape: {
                        type: ['image'],
                        images: [{src: star.src, width: 32, height: 32}]
                    },
                    opacity: {value: 1},
                    size: {value: 20, random: true},
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "top",
                        out_mode: "out"
                    }
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {resize: true}
                },
                retina_detect: true,
                fullScreen: false
            }}
        />
    );
};

export default BgParticle;