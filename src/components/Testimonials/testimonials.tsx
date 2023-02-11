import React from "react";
import Image from "next/image";
import PhantomImage from "../../assets/images/phantom.png";
import hinduImage from "../../assets/images/hindu.png";
import Fade from "react-reveal/Fade";
import TestimonialCard from "./TestimonialCard/testimonialcard";
import { wrapperDesc, wrapperHeader } from "@/styles/common";

type Props = {};

const Testimonials = (props: Props) => {
    return (
        <>
            <div
                id="testimonials"
                className="flex flex-col justify-center content-center items-center mt-20 mb-20 text-white max-w-7xl"
            >
                <h2 className={wrapperHeader}>TESTIMONIALS</h2>
                <p className={wrapperDesc}>
                    Led by a team of world class builders from Ycombinator, a16z
                    and featured in
                </p>
                <Fade bottom cascade>
                    <div className="flex flex-row flex-wrap justify-center content-center items-center px-3 py-6 gap-6">
                        <TestimonialCard
                            user="Jane Foster"
                            message="Greatly experienced and highly reliable team"
                        />
                        <TestimonialCard
                            user="Jane Foster"
                            message="Greatly experienced and highly reliable team"
                        />
                        <TestimonialCard
                            user="Jane Foster"
                            message="Greatly experienced and highly reliable team"
                        />
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default Testimonials;
