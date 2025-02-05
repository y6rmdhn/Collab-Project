export const Hero = () => {
  return (
    <div className="flex flex-col items-center ">
      <img src="./src/assets/img/hero-img.jpg" alt="Nike Shoes" className="h-[490px]  w-full" />
      <h2 className="text-[42px] font-extrabold mt-3 font-helvetica">I GET UP</h2>
      <p className="text-center max-w-[290px] text-[17px]   ">The Ja 2 is Built to maximize explosiveness and quickness, so hoopers can get up when no one expects it</p>
      <button className="bg-black text-white px-5 py-1.5 mt-4 rounded-full font-semibold">Explore</button>
    </div>
  );
};
