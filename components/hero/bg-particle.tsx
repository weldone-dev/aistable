"use client"
import {useCallback} from 'react';
import Particles from "react-particles";
import {Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";

const BgParticle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);
    return (
        <Particles
            id={"hero-particles"}
            className={"w-full h-full bg-[url(/hero-bg-overlay.jpg)] bg-cover [filter:brightness(100%)_contrast(100%)_saturate(120%)_blur(150px)_hue-rotate(0deg)]"}
            init={particlesInit}
            options={{
                fpsLimit: 30,
                particles: {
                    number: {value: 8},
                    color: {value: ["#154ED6", "#C69DFC", "#4DF1F3", "#E01414"]},
                    shape: {type: ["circle"]},
                    opacity: {value: 0.5},
                    size: {value: 200},
                    move: {
                        enable: true,
                        speed: 10,
                        direction: "top",
                        random: true,
                        outMode: "bounce",

                    }
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        resize: true
                    }
                },
                detectRetina: true,
                fullScreen: false,
                emitters: {
                    direction: "top",
                    position: {
                        x: 50,
                        y: 150
                    },
                    rate: {
                        delay: 0.2,
                        quantity: 2
                    },
                    size: {
                        width: 100,
                        height: 0
                    }
                }
            }}
        />
    );
};

export default BgParticle;