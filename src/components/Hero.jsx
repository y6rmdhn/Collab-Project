import React from "react";
import { Button } from "./UI/Button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/fb605ae0-19a3-4c2c-bb44-d15064fc7e6b/nike-just-do-it.jpg" alt="Nike Shoes" />
      <h2 className="text-4xl font-extrabold mt-5">I GET UP</h2>
      <p className="text-center max-w-[250px] mt-2">The Ja 2 is Built to maximize explosiveness and quickness, so hoopers can get up when no one expects it</p>
      <Button bgColor={"#000"}>Explore</Button>
    </div>
  );
};
