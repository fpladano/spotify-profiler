import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function Tracks({ token }) {
  const [userTopTracks, setUserTopTracks] = useState(null);
  const [searchRange, setSearchRange] = useState("long_term");

  useEffect(() => {
    if (!token) return;

    spotifyRequest.setAccessToken(token);

    spotifyRequest.getMyTopTracks({ time_range: searchRange, limit: 25 }).then(
      function (data) {
        setUserTopTracks(data.body.items);
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
        <h3 className=" text-2xl font-bold">Top Tracks</h3>
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
    </main>
  );
}
