export const Navbar = () => {
  return (
    // MOBILE VIEW
    <header className="w-full">
      <nav className="text-black flex justify-between items-center px-9 h-8 bg-gray-100">
        <div>
          <svg
            aria-hidden="true"
            className="size-4"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <ul className="flex gap-5 text-[12px] font-bold">
          <li>Find a Store</li>
          <li>Help</li>
          <li>Join Us</li>
          <li>Sign In</li>
        </ul>
      </nav>

      <nav className=""></nav>
    </header>
  );
};
