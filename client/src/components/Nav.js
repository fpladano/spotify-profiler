import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="w-screen h-[70px] sm:w-[100px] sm:h-screen bg-black sm:p-8 flex items-center justify-center sm:flex-col sm:justify-between sm:items-center drop-shadow-lg">
      {/* Spotify Icon */}
      <div className="group hidden sm:block hover:cursor-pointer">
        <a>
          <svg
            className="group-hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 427.652 427.652"
            width="50"
            height="50"
            fill="#1DB954"
          >
            <path d="M213.826 0C95.733 0 0 95.733 0 213.826s95.733 213.826 213.826 213.826 213.826-95.733 213.826-213.826S331.919 0 213.826 0zm93.06 310.32c-2.719 4.652-7.612 7.246-12.638 7.247-2.506 0-5.044-.645-7.364-2-38.425-22.456-82.815-26.065-113.295-25.138-33.763 1.027-58.523 7.692-58.769 7.76-7.783 2.126-15.826-2.454-17.961-10.236-2.134-7.781 2.43-15.819 10.209-17.962 1.116-.307 27.76-7.544 64.811-8.766 21.824-.72 42.834.801 62.438 4.52 24.83 4.71 47.48 12.978 67.322 24.574 6.973 4.074 9.321 13.03 5.247 20.001zm27.184-56.459c-3.22 5.511-9.016 8.583-14.97 8.584-2.968 0-5.975-.763-8.723-2.369-45.514-26.6-98.097-30.873-134.2-29.776-39.994 1.217-69.323 9.112-69.614 9.192-9.217 2.515-18.746-2.906-21.275-12.124-2.528-9.218 2.879-18.738 12.093-21.277 1.322-.364 32.882-8.937 76.77-10.384 25.853-.852 50.739.949 73.96 5.354 29.412 5.58 56.241 15.373 79.744 29.108 8.26 4.826 11.042 15.434 6.215 23.692zm16.711-51.335c-3.641 0-7.329-.936-10.7-2.906-108.207-63.238-248.572-25.643-249.977-25.255-11.313 3.117-23.008-3.527-26.124-14.839-3.117-11.312 3.527-23.008 14.839-26.124 1.621-.447 40.333-10.962 94.166-12.737 31.713-1.044 62.237 1.164 90.72 6.567 36.077 6.844 68.987 18.856 97.815 35.704 10.13 5.92 13.543 18.931 7.623 29.061-3.95 6.76-11.059 10.529-18.362 10.529z" />
          </svg>
        </a>
      </div>
      {/* Navbar list */}
      <ul className="w-screen sm:w-auto sm:h-2/4 text-spotifyGray text-center text-xs flex justify-between sm:flex-col sm:justify-around">
        {/* Profile */}
        <li className="group h-[71px] w-[100px] flex items-center justify-center hover:text-spotifyWhite hover:cursor-pointer hover:bg-spotifyBlack border-[6px] border-transparent hover:border-t-spotifyGreen sm:hover:border-l-spotifyGreen sm:hover:border-t-transparent transition ease-linear duration-200">
          <Link to="/" className="py-[15px]">
            <svg
              className="m-auto group-hover:fill-white"
              viewBox="0 0 1024 1024"
              width="20"
              height="20"
              fill="#9B9B9B"
            >
              <path d="M730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084Q106.388 763.84 84.96 802.41t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z" />
            </svg>
            <div className="mt-2 font-extralight">Profile</div>
          </Link>
        </li>
        {/* Top Artists */}
        <li className="group h-[71px] w-[100px] flex items-center justify-center hover:text-spotifyWhite hover:cursor-pointer hover:bg-spotifyBlack border-[6px] border-transparent hover:border-t-spotifyGreen sm:hover:border-l-spotifyGreen sm:hover:border-t-transparent transition ease-linear duration-200">
          <Link to="/artists" className="py-[15px]">
            <svg
              className="m-auto group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 47.5 47.5"
              fill="#9B9B9B"
            >
              <path d="M44.159 3.341C41.932 1.115 39.013 0 36.093 0c-2.919 0-5.838 1.114-8.064 3.341-4.454 4.454-4.454 11.677 0 16.131 2.227 2.227 5.146 3.341 8.064 3.341s5.839-1.114 8.066-3.341c4.454-4.453 4.454-11.676 0-16.131zM22.161 14.999.646 39.161c-.9 1.011-.854 2.604.103 3.562l1.132 1.133-.723.724c-.477.477-.477 1.256 0 1.731l.108.108c.477.478 1.256.478 1.733 0l.723-.724 1.055 1.055c.957.957 2.552 1.003 3.563.104l24.155-21.509c-2.469-.633-4.739-1.902-6.589-3.752-1.887-1.887-3.127-4.177-3.745-6.594zM21.02 29.268l-5.145 5.146c-.77.771-2.018.771-2.787 0-.769-.771-.77-2.02 0-2.787l5.145-5.146c.77-.771 2.018-.771 2.787 0 .769.77.77 2.018 0 2.787z" />
            </svg>
            <div className="mt-2 font-extralight">Top Artists</div>
          </Link>
        </li>
        {/* Top Tracks */}
        <li className="group h-[71px] w-[100px] flex items-center justify-center hover:text-spotifyWhite hover:cursor-pointer hover:bg-spotifyBlack border-[6px] border-transparent hover:border-t-spotifyGreen sm:hover:border-l-spotifyGreen sm:hover:border-t-transparent transition ease-linear duration-200">
          <Link to="/tracks" className="py-[15px]">
            <svg
              className="m-auto group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489.164 489.164"
              width="20"
              height="20"
              fill="#9B9B9B"
            >
              <path d="M159.582 75.459v285.32c-14.274-10.374-32.573-16.616-52.5-16.616-45.491 0-82.5 32.523-82.5 72.5s37.009 72.5 82.5 72.5 82.5-32.523 82.5-72.5V168.942l245-60.615v184.416c-14.274-10.374-32.573-16.616-52.5-16.616-45.491 0-82.5 32.523-82.5 72.5s37.009 72.5 82.5 72.5 82.5-32.523 82.5-72.5V0l-305 75.459z" />
            </svg>
            <div className="mt-2 font-extralight">Top Tracks</div>
          </Link>
        </li>
        {/* Recent */}
        <li className="group h-[71px] w-[100px] flex items-center justify-center hover:text-spotifyWhite hover:cursor-pointer hover:bg-spotifyBlack border-[6px] border-transparent hover:border-t-spotifyGreen sm:hover:border-l-spotifyGreen sm:hover:border-t-transparent transition ease-linear duration-200">
          <Link to="/recent" className="py-[15px]">
            <svg
              className="m-auto group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 510 510"
              fill="#9B9B9B"
            >
              <path d="M267.75 12.75c-89.25 0-168.3 48.45-209.1 122.4L0 76.5v165.75h165.75l-71.4-71.4c33.15-63.75 96.9-107.1 173.4-107.1C372.3 63.75 459 150.45 459 255s-86.7 191.25-191.25 191.25c-84.15 0-153-53.55-181.05-127.5H33.15c28.05 102 122.4 178.5 234.6 178.5C402.9 497.25 510 387.6 510 255S400.35 12.75 267.75 12.75zm-38.25 127.5V270.3l119.85 71.4 20.4-33.15-102-61.2v-107.1H229.5z" />
            </svg>
            <div className="mt-2 font-extralight">Recent</div>
          </Link>
        </li>
        {/* Playlists */}
        <li className="group h-[71px] w-[100px] flex items-center justify-center hover:text-spotifyWhite hover:cursor-pointer hover:bg-spotifyBlack border-[6px] border-transparent hover:border-t-spotifyGreen sm:hover:border-l-spotifyGreen sm:hover:border-t-transparent transition ease-linear duration-200">
          <Link to="/playlists" className="py-[15px]">
            <svg
              className="m-auto group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="20"
              height="20"
              viewBox="0 0 405.333 405.333"
              fill="#9B9B9B"
            >
              <g>
                <rect x="0" y="53.333" width="256" height="42.667"></rect>
                <rect x="0" y="138.667" width="256" height="42.667"></rect>
                <path d="M298.667,53.333v174.613c-6.72-2.453-13.76-3.947-21.333-3.947c-35.307,0-64,28.693-64,64c0,35.307,28.693,64,64,64     c35.307,0,64-28.693,64-64V96h64V53.333H298.667z"></path>
                <rect x="0" y="224" width="170.667" height="42.667"></rect>
              </g>
            </svg>
            <div className="mt-2 font-extralight">Playlists</div>
          </Link>
        </li>
      </ul>
      {/* Github Icon */}
      <div className="group hidden sm:block hover:cursor-pointer">
        <a className="pb-[15px]">
          <svg
            className="group-hover:fill-spotifyWhite"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 438.549 438.549"
            width="30"
            height="30"
            fill="#9B9B9B"
          >
            <title>Github</title>
            <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
