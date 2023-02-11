import React from "react";
import profile from "../../../assets/images/profile.png";
import Image from "next/image";

type Props = {
    message: string;
    user: string;
};

const TestimonialCard = (props: Props) => {
    return (
        <>
            <div className="flex gap-3 items-start " {...props}>
                <div className="flex flex-col rounded-2xl rounded-br-none bg-card2 justify-between p-4">
                    <p className="m-1 text-sm">{`"${props.message}"`}</p>
                    <p className="m-1 self-end">- {props.user}</p>
                </div>
                <div className="rounded-full mt-12">
                    <Image src={profile} alt="" />
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;
