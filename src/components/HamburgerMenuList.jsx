export const HamburgerMenuList = () => {
  const list = [
    {
      name: "New & Featured",
    },
    {
      name: "Women",
    },
    {
      name: "Kids",
    },
    {
      name: "Jordan",
    },
    {
      name: "Sale",
    },
  ];

  return (
    <ul className="mt-20 px-9 ">
      {list.map((item, index) => (
        <li key={index} className="flex justify-between">
          <a href="/" className="block  py-2 text-2xl font-semibold ">
            {item.name}
          </a>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};
