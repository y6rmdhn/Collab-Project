import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="Nike Shoes" />
      <h2 className="text-4xl font-extrabold mt-5">I GET UP</h2>
      <p className="text-center max-w-[250px] mt-2">The Ja 2 is Built to maximize explosiveness and quickness, so hoopers can get up when no one expects it</p>
      <button className="bg-black text-white px-5 py-1.5 mt-4 rounded-full font-semibold">Explore</button>
    </div>
  );
};
