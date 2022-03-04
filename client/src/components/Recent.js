import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

const addZero = (seconds) => {
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return seconds;
};

const msToMinSec = (ms) => {
  const time = new Date(ms);
  return addZero(time.getMinutes()) + ":" + addZero(time.getSeconds());
};

export default function Recent({ token }) {
  const [recentTracks, setRecentTracks] = useState(null);

  useEffect(() => {
    if (!token) return;

    spotifyRequest.setAccessToken(token);

    spotifyRequest.getMyRecentlyPlayedTracks({ limit: 25 }).then(
      function (data) {
        setRecentTracks(data.body.items);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [token]);

  return (
    <main className="w-full h-auto py-[30px] px-[25px] sm:py-[60px] sm:px-[50px] text-spotifyWhite">
      <header className="flex flex-col items-center sm:flex-row sm:justify-between">
        <h3 className=" text-2xl font-bold">Recently Played Tracks</h3>
      </header>
      <section className="mt-[70px]">
        <div>
          <ul>
            {recentTracks?.map((track) => (
              <li
                key={track.track.id}
                className="group w-full h-[50px] mb-[25px] flex items-center  hover:cursor-pointer"
              >
                <div className="w-[50px] h-[50px] mr-5 rounded-md relative shrink-0">
                  <img
                    className="rounded-lg group-hover:brightness-50"
                    src={track.track.album.images[0].url}
                  />
                  <div className="absolute inset-[12.5px] invisible group-hover:visible">
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
                <div className="truncate mr-5">
                  <span className="hover:underline underline-offset-4 cursor-pointer">
                    {track.track.name}
                  </span>
                  <div className="truncate">
                    <span className="text-xs text-spotifyGray">
                      {track.track.album.artists[0].name} -{" "}
                      {track.track.album.name}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-spotifyGray self-start pt-1 ml-auto">
                  {msToMinSec(track.track.duration_ms)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
