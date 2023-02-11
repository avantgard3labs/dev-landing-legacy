import React from "react";
import Fade from "react-reveal/Fade";
import { useForm } from "react-hook-form";
import ringsFromLeft from "../../assets/images/ringsFromLeft.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password";
import {
    dualHeaderWrapper,
    formBubble,
    formEntry,
    formEntryXl,
    primeHeaderText,
    secondaryHeaderText,
    wrapperHeader,
    wrapperLayout,
} from "@/styles/common";
YupPassword(yup);

const schema = yup
    .object()
    .shape({
        email: yup.string().email().required(),
        prodDesc: yup.string().required(),
        name: yup.string().required(),
    })
    .required();

type Props = {};

const Contact = (props: Props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const handleSubmitContact = (data: any) => {
        console.log(errors);
        console.log(data);
    };

    return (
        <div
            id="contact"
            style={{
                backgroundImage: `url(${ringsFromLeft.src})`,
                backgroundSize: "contain",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
            }}
            className={" text-white max-w-7xl w-full py-20 my-5"}
        >
            <div className="flex flex-col justify-between items-center lg:flex-row mt-10">
                <Fade left cascade>
                    <div className={dualHeaderWrapper}>
                        <h1 className={primeHeaderText}>
                            Our teams are ready to help!
                        </h1>
                        <h2 className={secondaryHeaderText}>
                            Get contacted by the team within 24 hours
                        </h2>
                    </div>
                </Fade>

                <Fade right>
                    <form
                        onSubmit={handleSubmit(handleSubmitContact)}
                        className="flex flex-col relative flex-1 gap-7 items-stretch w-full p-10"
                    >
                        <div className={formBubble} style={{ top: "1.75rem" }}>
                            <label htmlFor="name">Name</label>
                            {errors["name"] != null && (
                                <span className="text-red">
                                    {" "}
                                    - Name is Required
                                </span>
                            )}
                        </div>
                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                            className={formEntry}
                        />
                        <div className={formBubble} style={{ top: "8.25rem" }}>
                            <label htmlFor="email">Email</label>
                            {errors["email"] != null && (
                                <span className="text-red">
                                    - Please provide a proper email
                                </span>
                            )}
                        </div>
                        <input
                            type="text"
                            id="email"
                            {...register("email")}
                            className={formEntry}
                        />
                        <div
                            className={formBubble}
                            style={{ bottom: "13.75rem" }}
                        >
                            <label htmlFor="desc">Product description</label>
                            {errors["prodDesc"] != null && (
                                <span className="text-red">
                                    - Product Description is required
                                </span>
                            )}
                        </div>
                        <textarea
                            id="desc"
                            {...register("prodDesc")}
                            className={formEntryXl}
                        />
                        <button className="bg-card2 rounded-lg p-2 border border-card1 self-start w-36">
                            Submit
                        </button>
                    </form>
                </Fade>
            </div>
        </div>
    );
};

export default Contact;
