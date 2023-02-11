import React from "react";
import Image from "next/image";
import cardPattern from "../../../assets/images/cardBg.svg";
import { landingCard } from "@/styles/common";

type Props = { cardNumber: number; tagLine: string };

function LandingCard(props: Props) {
    return (
        <div className={landingCard(props.cardNumber)} {...props}>
            <div className="py-4 px-6 text-md">{props.tagLine}</div>
            <Image src={cardPattern} className="self-end" alt="" />
        </div>
    );
}

export default LandingCard;
