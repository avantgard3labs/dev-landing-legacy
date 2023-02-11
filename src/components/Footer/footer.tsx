import React from "react";
import AvantLogo from "../shared/logo";

type Props = {};

const Footer = (props: Props) => {
    return (
        <>
            <div className=" p-8 flex justify-center text-white bg-card2 w-full">
                <div className="flex flex-col max-w-7xl w-full">
                    <AvantLogo />
                    <h3 className="text-sm">
                        Copyright © 2023 LAYERUP. All rights reserved.
                    </h3>
                </div>
            </div>
        </>
    );
};

export default Footer;
