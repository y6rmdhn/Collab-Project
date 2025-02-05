export const ContentUp = () => {
  const contents = [
    {
      title: "Find You Feel",
      subtitle: "The Latest Nike Bras",
      buttonText: "Shop",
    },
    {
      title: "Give Sport",
      subtitle: "Ready For Winter",
      buttonText: "Shop Gifts",
    },
    {
      title: "Engineered For Greatness",
      subtitle: "The LeBron TR1",
      buttonText: "Shop",
    },
    {
      title: "For Next-Level Game",
      subtitle: "The Sabrina 2 & More",
      buttonText: "Shop",
    },
  ];

  return (
    <section className="mt-10">
      {contents.map((item, index) => (
        <div key={index} style={{ backgroundImage: "url('https://static.nike.com/a/images/f_auto/dpr_3.5,cs_srgb/h_498,c_limit/6809521c-fe2b-427d-b673-a52f8593a4f1/nike-just-do-it.jpg')" }} className=" bg-cover bg-center h-[540px]">
          <div className="pt-[400px] pl-7">
            <h2 className="text-white text-xl font-semibold">{item.title}</h2>
            <h1 className="text-white text-2xl font-semibold">{item.subtitle}</h1>
            <button className="bg-white text-black px-5 py-1.5 mt-4 rounded-full font-semibold">{item.buttonText}</button>
          </div>
        </div>
      ))}
    </section>
  );
};
