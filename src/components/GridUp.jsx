import React from "react";
import { Button } from "./UI/Button";

export const GridUp = () => {
  return (
    <section className="mt-10">
      <div className="bg-[url('./src/assets/img/image-1.png')] bg-cover bg-center h-[400px]">
        <div className="pt-[260px] pl-7">
          <h2 className="text-white text-xl font-semibold">Find You Feel</h2>
          <h1 className="text-white text-2xl font-semibold">
            The Latest Nike Bras
          </h1>
          <Button bgColor={"#fff"} colorFont={"#000"}>
            Shop
          </Button>
        </div>
      </div>
    </section>
  );
};
