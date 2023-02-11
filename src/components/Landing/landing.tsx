import React from "react";
import Image from "next/image";
import ringsFromLeft from "../../assets/images/ringsFromLeft.svg";
import Fade from "react-reveal/Fade";
import {
    dualHeaderWrapper,
    landingCard,
    primeHeaderText,
    secondaryHeaderText,
} from "@/styles/common";
import LandingCard from "./LandingCards/landingCards";

type Props = {};

const Landing = (props: Props) => {
    return (
        <div
            style={{
                backgroundImage: `url(${ringsFromLeft.src})`,
                backgroundSize: "contain",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
            }}
            className="flex text-white flex-col justify-between items-center lg:flex-row max-w-7xl w-full py-20"
        >
            <Fade left cascade>
                <div className={dualHeaderWrapper}>
                    <h1
                        className={primeHeaderText}
                        style={{ lineHeight: "1.4" }}
                    >
                        Unlock Your Business&apos;s Potential with Blockchain
                        technology
                    </h1>
                    <h2 className={secondaryHeaderText}>
                        We provide software solutions that are tailor made for
                        you
                    </h2>
                </div>
            </Fade>
            <Fade right cascade>
                <div className="flex flex-col flex-1 align-middle content-center justify-center items-center">
                    <LandingCard
                        cardNumber={1}
                        tagLine="Highly skilled team with an average of 5 years of experience"
                    />
                    <LandingCard
                        cardNumber={2}
                        tagLine="We have a client satisfaction rating of 97%"
                    />
                    <LandingCard
                        cardNumber={3}
                        tagLine="30+ successful projects from over 10 countries"
                    />
                </div>
            </Fade>
        </div>
    );
};

export default Landing;
