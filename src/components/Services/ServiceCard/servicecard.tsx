import React, { useState } from "react";
import SettingsIcon from "../../../assets/images/Settings.svg";
import Image from "next/image";
type Props = {
    title: string;
    caption: string;
    image: any;
};

const ServiceCard = (props: Props) => {
    const { title, caption, image } = props;
    const [isHovered, setIsHovered] = useState<boolean>(false);

    console.log(caption);
    return (
        <>
            <div
                onMouseEnter={(e) => setIsHovered(true)}
                onMouseLeave={(e) => setIsHovered(false)}
                className={`flex bg-card2 rounded-3xl shadow-lg h-32 w-60 lg:h-40 lg:w-80 justify-center relative`}
            >
                <div className="flex flex-col justify-center items-center content-center relative p-4 text-center">
                    <div
                        className={`flex items-center flex-col ${
                            isHovered ? "blur-md" : ""
                        }`}
                    >
                        <Image
                            src={image}
                            className=" lg:w-20 w-10 mb-3 opacity-60"
                            alt=""
                        />
                        <p className=" text-sm lg:text-base text-white/60">
                            {title}
                        </p>
                    </div>
                </div>
                {isHovered && (
                    <div className=" px-3 absolute flex w-full h-full justify-center top-0 items-center text-center animate-fade text-xs lg:text-sm">
                        {caption}
                    </div>
                )}
            </div>
        </>
    );
};

export default ServiceCard;
