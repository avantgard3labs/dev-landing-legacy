import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";

type Props = {};

const AvantLogo = (props: Props) => {
  return (
    <div className="flex gap-1 items-center">
      <Image src={Logo} alt="" />
      <h2>Avant Garde</h2>
    </div>
  );
};

export default AvantLogo;
