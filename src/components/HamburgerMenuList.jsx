export const HamburgerMenuList = () => {
  return (
    <ul className="mt-20 px-9 ">
      <li className="flex justify-between">
        <a href="./NewAndFeatured.jsx" className="block  py-2 text-2xl font-semibold">
          New & Featured
        </a>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>

      <li className=" flex justify-between ">
        <a href="/" className="block  py-2 text-2xl font-semibold">
          Men
        </a>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>
      <li className="flex justify-between">
        <a href="/" className="block  py-2 text-2xl font-semibold">
          Women
        </a>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>
      <li className="flex justify-between">
        <a href="/" className="block  py-2 text-2xl font-semibold">
          Kids
        </a>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>
      <li className="flex justify-between">
        <a href="/" className="block  py-2 text-2xl font-semibold">
          Jordan
        </a>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>
      <li className="flex justify-between">
        <a href="/" className="block  py-2 text-2xl font-semibold">
          Sale
        </a>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>
    </ul>
  );
};
