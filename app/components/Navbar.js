// components/Navbar.js
const Navbar = () => (
  <div className="navbar bg-transparent text-gray-500">
    <div className="flex-1 py-3  xl:pl-24 lg:pl-20 md:pl-20 sm:pl-10 max-sm:pl-10">
      <figure>
        <a href="#" className="logo">
          <img
            src="/LOGO_SECURESEND_WHITE.png"
            style={{ width: "200px", height: "auto" }}
            className="max-sm:w-3/4"
            alt="Logo Secure Send"
          />
        </a>
      </figure>
    </div>
    <div className="flex-none py-3  xl:pr-24 lg:pr-20 md:pr-20 sm:pr-10 max-sm:pr-10">
      <button className="btn btn-square btn-ghost">
        <svg
          fill="#000000"
          width="30"
          height="30"
          viewBox="0 0 36 36"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>{"store-solid"}</title>
          <path
            className="clr-i-solid clr-i-solid-path-1"
            d="M28,30H16V22H14v8H8V22H6v8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V22H28Z"
          />
          <path
            className="clr-i-solid clr-i-solid-path-2"
            d="M33.79,13.27,29.71,5.11A2,2,0,0,0,27.92,4H8.08A2,2,0,0,0,6.29,5.11L2.21,13.27a2,2,0,0,0-.21.9v3.08a2,2,0,0,0,.46,1.28A4.67,4.67,0,0,0,6,20.13a4.72,4.72,0,0,0,3-1.07,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.72,4.72,0,0,0,6.53-.52A2,2,0,0,0,34,17.26V14.17A2,2,0,0,0,33.79,13.27ZM15,14.4v1.52L14.18,17a2.71,2.71,0,0,1-4.37,0L9,15.88V14.4L11.59,6H16Zm12,1.48L26.19,17a2.71,2.71,0,0,1-4.37,0L21,15.88l0,0V14.4L20,6h4.45L27,14.4Z"
          />
          <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
        </svg>
      </button>
    </div>
  </div>
);

export default Navbar;
