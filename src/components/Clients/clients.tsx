import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PhantomImage from "../../assets/images/phantom.png";
import ShibaImage from "../../assets/images/shiba.png";
import CryptionImage from "../../assets/images/9747.png";
import BanklessImage from "../../assets/images/bankless.png";
import NextIcon from "../../assets/images/next.svg";
import PrevIcon from "../../assets/images/prev.svg";
import ringsFromLeft from "../../assets/images/ringsFromLeft.svg";
import ringsFromRight from "../../assets/images/ringsFromRight.svg";
import useWindowSize from "@/hooks/useWindowSize";

const clients = [
    {
        name: "Swix DAO",
        image: require("../../assets/images/SwixDao.png"),
    },
    {
        name: "Mushrohms NFT",
        image: require("../../assets/images/Mushrohms.png"),
    },
    {
        name: "Cryption Network",
        image: require("../../assets/images/9747.png"),
    },
    {
        name: "YFDAI Finance",
        image: require("../../assets/images/YfdaiFinance.png"),
    },
    {
        name: "Gains Associates",
        image: require("../../assets/images/GainsAssociates.png"),
    },
    {
        name: "Shiba Inu Token",
        image: require("../../assets/images/ShibaInuToken.png"),
    },
    {
        name: "Milkshake Finance",
        image: require("../../assets/images/MilkshakeFinance.png"),
    },
    {
        name: "Emillions NFT",
        image: require("../../assets/images/EmillionsNFT.png"),
    },
    {
        name: "Chilli Swap",
        image: require("../../assets/images/ChilliSwap.png"),
    },
    {
        name: "Asva Labs",
        image: require("../../assets/images/AsvaLabs.png"),
    },
    {
        name: "Galaxia Protocol",
        image: require("../../assets/images/Galaxia.png"),
    },
];

type Props = {};

const Clients = (props: Props) => {
    const [startIndex, setStartIndex] = useState(0);

    const { width } = useWindowSize();

    const numberOfClients = width > 700 ? 4 : 3;

    const clientsToDisplay = [
        ...clients.slice(startIndex, startIndex + numberOfClients),
        ...(startIndex + numberOfClients > 11
            ? clients.slice(0, (startIndex + numberOfClients) % 11)
            : []),
    ];
    const timer = useRef<NodeJS.Timer>(null);

    useEffect(() => {
        timer.current = setInterval(
            () => setStartIndex((prev) => (prev + 1) % 11),
            2000
        );

        return () => clearInterval(timer.current);
    }, [startIndex]);

    return (
        <div
            className="bg-alphablack w-full flex justify-center "
            style={{
                backgroundImage: `url(${ringsFromLeft.src}),url(${ringsFromRight.src})`,
                backgroundSize: "40%,40%",
                backgroundPosition: "left top,right bottom",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="p-10 text-center max-w-7xl w-full gap-8 flex flex-col">
                <h2
                    className={
                        "text-sm underline font-bold text-white text-center mb-8"
                    }
                >
                    OUR CLIENTS
                </h2>
                <div className="flex items-center gap-2 w-full">
                    <div
                        onClick={() => setStartIndex((startIndex - 1) % 11)}
                        className="cursor-pointer"
                    >
                        <Image src={PrevIcon} alt="" />
                    </div>

                    <div className=" flex gap-6 overflow-auto items-center justify-around w-full">
                        {clientsToDisplay.map(({ name, image }) => (
                            <div key={name}>
                                <Image
                                    width={150}
                                    height={150}
                                    className=" object-contain h-24"
                                    src={image}
                                    alt="something"
                                />
                            </div>
                        ))}
                    </div>

                    <div
                        onClick={() => setStartIndex((startIndex + 1) % 11)}
                        className="cursor-pointer"
                    >
                        <Image src={NextIcon} alt="" />
                    </div>
                </div>
                <button className="border border-card1 text-white px-3 py-2 rounded-xl m-auto text-sm">
                    VIEW ALL
                </button>
            </div>
        </div>
    );
};

export default Clients;
