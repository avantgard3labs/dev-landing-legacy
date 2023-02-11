import { navItem } from "@/styles/common";
import React, { useState } from "react";
import AvantLogo from "../shared/logo";
import Fade from "react-reveal/Fade";
import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    return (
        <div className="bg-clip-padding backdrop-filter sticky top-0 z-50 backdrop-blur-xl bg-opacity-10 w-full m-auto px-5">
            <div className="max-w-7xl m-auto ">
                <div className="flex justify-between p-2 pr-4 items-center text-white rounded-xl">
                    <Fade left>
                        <div className="flex">
                            <AvantLogo />
                        </div>
                    </Fade>
                    <Fade right>
                        <div
                            className="md:hidden border p-2 border-card3 rounded-lg"
                            onClick={() => setMobileNavOpen((p) => !p)}
                        >
                            <MdOutlineMenu size={30} />
                        </div>
                    </Fade>
                    <Fade right cascade>
                        <div className="hidden justify-between max-w-sm w-full  md:flex">
                            <Link href="/#testimonials" className={navItem}>
                                Testimonials
                            </Link>
                            <Link href="/#team" className={navItem}>
                                Projects
                            </Link>
                            <Link href="/#contact" className={navItem}>
                                Contact Us
                            </Link>
                        </div>
                    </Fade>
                </div>
                {mobileNavOpen && (
                    <div className="text-white flex flex-col animate-fade">
                        <div className={navItem + " p-2"}>Testimonials</div>
                        <div className={navItem + " p-2"}>Projects</div>
                        <div className={navItem + " p-2"}>About Us</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
