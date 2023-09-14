"use client"

import FadeUp from "@/Animation Components/FadeUp";
import { useEffect, useState } from "react";


const Hero = () => {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const windowWidth = window.innerWidth;
		if (windowWidth >= 768) {
			setIsDesktop(true);
		} else {
			setIsDesktop(false);
		}
	}, []);

	return (
		<section className="hero">
			<div className="hero__content">
				<FadeUp delay={isDesktop ? 0.95 : 0.5}>
                <h2 className="title"> My name is Douglas Atiya</h2>
				</FadeUp>

				<FadeUp delay={isDesktop ? 1.05 : 0.6}>
					<h2 className="title">
                    Hello,, I am a Designer
					</h2>
				</FadeUp>

				<FadeUp delay={isDesktop ? 1.15 : 0.7}>
					<h3 className="typewriter">
						I bring your ideas to life.
					</h3>
				</FadeUp>
                <FadeUp delay={isDesktop ? 1.25 : 0.8}>
				<p className="title">
					I am a{" "}
					<span className="text-green">Designer</span>.
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, mollitia animi! Aut, praesentium, nam possimus corporis modi impedit animi tempora, architecto expedita corrupti voluptas fuga vitae eius necessitatibus voluptate dolorem!
				</p>
			</FadeUp>

			<div className="mt-8">
				<FadeUp delay={isDesktop ? 1.35 : 0.9}>
					<button className="btn hero-btn"></button>
				</FadeUp>
			</div>
			</div>

			
		</section>
	);
};

export default Hero;
