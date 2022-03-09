import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

import { Link } from "react-router-dom";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function Artists({ token }) {
  const [artistsList, setArtistsList] = useState(null);
  const [searchRange, setSearchRange] = useState("long_term");

  useEffect(() => {
    if (!token) return;

    spotifyRequest.setAccessToken(token);

    spotifyRequest.getMyTopArtists({ time_range: searchRange, limit: 40 }).then(
      function (data) {
        setArtistsList(data.body.items);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [token, searchRange]);

  const setDataRange = (range) => setSearchRange(range);

  return (
    <main className="w-full h-auto py-[30px] px-[25px] sm:py-[60px] sm:px-[50px] text-spotifyWhite">
      <header className="flex flex-col items-center sm:flex-row sm:justify-between">
        <h3 className=" text-2xl font-bold">Top Artists</h3>
        <div className="mt-[30px] p-[10px] text-md text-spotifyGray flex w-full justify-between sm:mt-0 sm:w-auto sm:space-x-5 sm:items-center">
          <span
            onClick={() => setDataRange("long_term")}
            className={
              searchRange === "long_term"
                ? "shrink-0 underline-offset-4 cursor-pointer underline text-spotifyWhite"
                : "shrink-0  cursor-pointer  hover:text-spotifyWhite"
            }
          >
            All Time
          </span>
          <span
            onClick={() => setDataRange("medium_term")}
            className={
              searchRange === "medium_term"
                ? "shrink-0 underline-offset-4 cursor-pointer underline text-spotifyWhite"
                : "shrink-0  cursor-pointer  hover:text-spotifyWhite"
            }
          >
            Last 6 Months
          </span>
          <span
            onClick={() => setDataRange("short_term")}
            className={
              searchRange === "short_term"
                ? "shrink-0 underline-offset-4 cursor-pointer underline text-spotifyWhite"
                : "shrink-0  cursor-pointer hover:text-spotifyWhite"
            }
          >
            Last 4 Weeks
          </span>
        </div>
      </header>
      <section className="mt-[70px]">
        <div className="grid grid-cols-fluid sm:grid-cols-fluidxl gap-[20px]">
          {artistsList?.map((artist) => (
            <Link
              to={`/artist/${artist.id}`}
              key={artist.id}
              className="rounded-full flex flex-col items-center"
            >
              <div className="group relative hover:cursor-pointer">
                <img
                  className="rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] group-hover:brightness-50"
                  src={artist.images[0].url}
                />
                <div className="absolute inset-[65px] sm:inset-[90px] invisible group-hover:visible">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25px"
                    height="25px"
                    viewBox="0 0 45.999 45.999"
                    fill="#FFFFFF"
                  >
                    <path d="M39.264,6.736c-8.982-8.981-23.545-8.982-32.528,0c-8.982,8.982-8.981,23.545,0,32.528c8.982,8.98,23.545,8.981,32.528,0 C48.245,30.281,48.244,15.719,39.264,6.736z M25.999,33c0,1.657-1.343,3-3,3s-3-1.343-3-3V21c0-1.657,1.343-3,3-3s3,1.343,3,3V33z M22.946,15.872c-1.728,0-2.88-1.224-2.844-2.735c-0.036-1.584,1.116-2.771,2.879-2.771c1.764,0,2.88,1.188,2.917,2.771 C25.897,14.648,24.746,15.872,22.946,15.872z"></path>
                  </svg>
                </div>
              </div>
              <p className="my-[20px] hover:underline underline-offset-4 cursor-pointer truncate">
                {artist.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
