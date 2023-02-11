import React from "react";
import ServiceCard from "./ServiceCard/servicecard";
import Fade from "react-reveal/Fade";
import {
    wrapperContentLayout,
    wrapperDesc,
    wrapperHeader,
    wrapperLayout,
} from "@/styles/common";
import ringsFromRight from "../../assets/images/ringsFromRight.svg";
import Image from "next/image";
import Design from "../../assets/images/design.png";
import Frontend from "../../assets/images/frontend.png";
import Backend from "../../assets/images/backend.png";
import NFT from "../../assets/images/nft.png";
import Dapp from "../../assets/images/dapp.png";
import SmartContract from "../../assets/images/smart-contract.png";

type Props = {};

const Services = (props: Props) => {
    return (
        <div className={`${wrapperLayout} relative`}>
            <Image
                src={ringsFromRight}
                alt=""
                className=" absolute text-right right-0 -z-10 h-full w-auto bottom-0"
            />
            <h2 className={wrapperHeader}>WHAT WE OFFER</h2>
            <p className={wrapperDesc}>
                We provide tailor made solutions from scratch. Building,
                deployment and analytics. is a design-led and domain agnostic
                team with deep expertise working.
            </p>
            <div className={wrapperContentLayout}>
                <Fade bottom cascade>
                    <ServiceCard
                        image={Design}
                        title="UI/UX Design"
                        caption="We are specialized in creating beautiful and smooth UI/UX designs that provide better user experience by incorporating effective collaboration, streamlined projects which strive for better results."
                    />
                    <ServiceCard
                        image={Frontend}
                        title="Front-end development"
                        caption="We offer a full range of brand-driving front-end development services that are focused on creating software frontend with a powerful first impression and maximum conversion."
                    />
                    <ServiceCard
                        image={Backend}
                        title="Back-end development"
                        caption="Our team of high-level engineers develop back-end solutions that boast high performance, scalability, and security, helping your business reach new horizons."
                    />
                    <ServiceCard
                        image={NFT}
                        title="NFT Development"
                        caption="We design and build NFT marketplaces to facilitate NFT trading. Also, we offer ready-to-deploy NFT marketplace solutions that can be customized and integrated into their web3 projects for reduced time-to-market."
                    />
                    <ServiceCard
                        image={SmartContract}
                        title="Smart Contract Development"
                        caption="By leveraging web3 ecosystem’s open-source, public and composable back ends to write highly secured, upgradable and reliable smart contracts based on recent web3 standards. We support development on EVM chains"
                    />
                    <ServiceCard
                        image={Dapp}
                        title="Decentralized App (dApp) Development"
                        caption="With expertise in Rust, Solidity, Golang and frameworks like Truffle and hardhat, we build next-gen dApps to support web3 projects rich in scalability, security and interoperability attributes."
                    />
                </Fade>
            </div>
        </div>
    );
};

export default Services;
