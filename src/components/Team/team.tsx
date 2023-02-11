import React from "react";
import Image from "next/image";
import Meta from "../../assets/images/meta.png";
import IndianExpress from "../../assets/images/indian-express.png";

import hinduImage from "../../assets/images/hindu.png";
import Fade from "react-reveal/Fade";
import { wrapperDesc, wrapperHeader } from "@/styles/common";

type Props = {};

const Team = (props: Props) => {
    return (
        <>
            <div
                id="team"
                className="flex flex-col justify-center content-center items-center mt-20 mb-20 text-white"
            >
                <h2 className={wrapperHeader}>TEAM</h2>
                <p className={wrapperDesc}>
                    Led by a team of world class builders from Ycombinator, a16z
                    and featured in
                </p>
                <Fade bottom cascade>
                    <div className="flex gap-4 px-3 flex-row flex-wrap justify-center content-center items-center">
                        <Image
                            src={hinduImage}
                            className="lg:h-36 h-24 object-contain w-auto"
                            alt=""
                        />
                        <Image
                            src={IndianExpress}
                            className="lg:h-36 h-24 object-contain w-auto rounded-3xl"
                            alt=""
                        />
                        <Image
                            src={Meta}
                            className="lg:h-36 h-24 object-contain w-auto  rounded-3xl"
                            alt=""
                        />
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default Team;
