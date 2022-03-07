import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { Link, NavLink } from "react-router-dom";

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

export default function User({ token }) {
  const [userProfileData, setUserProfileData] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [userFollowing, setUserFollowing] = useState(null);
  const [userTopArtists, setUserTopArtists] = useState(null);
  const [userTopTracks, setUserTopTracks] = useState(null);

  useEffect(() => {
    if (!token) return;

    spotifyRequest.setAccessToken(token);

    spotifyRequest.getMe().then(
      function (data) {
        setUserProfileData(data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

    spotifyRequest.getUserPlaylists("gex0o3cxxwnlq7yuafrysatek").then(
      function (data) {
        setUserPlaylists(data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

    spotifyRequest.getFollowedArtists({ limit: 1 }).then(
      function (data) {
        setUserFollowing(data.body.artists.total);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

    spotifyRequest.getMyTopArtists({ time_range: "long_term", limit: 10 }).then(
      function (data) {
        setUserTopArtists(data.body.items);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

    spotifyRequest.getMyTopTracks({ time_range: "long_term", limit: 10 }).then(
      function (data) {
        setUserTopTracks(data.body.items);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [token]);

  return (
    <main className="w-full h-auto py-[30px] px-[25px] sm:py-[60px] sm:px-[50px] text-spotifyWhite">
      <header className="w-full h-auto flex flex-col items-center">
        {/* Profile Picture */}
        <div className="w-[150px] h-[150px] rounded-full">
          <img className="rounded-full" src={userProfileData?.images[0].url} />
        </div>
        {/* User name */}
        <a className="text-3xl mt-[20px] font-bold text-center hover:text-spotifyGreen hover:cursor-pointer">
          {userProfileData?.display_name}
        </a>
        {/* User Stats */}
        <div className="w-full h-auto mt-[20px] flex justify-center space-x-8">
          <div className="text-center">
            <p className="text-xl font-bold text-spotifyGreen">
              {userProfileData?.followers.total}
            </p>
            <p className="mt-[5px] text-xs font-light text-spotifyGray tracking-wide uppercase">
              Followers
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-spotifyGreen">
              {userFollowing}
            </p>
            <p className="mt-[5px] text-xs font-light text-spotifyGray tracking-wide uppercase">
              Following
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-spotifyGreen">
              {userPlaylists?.total}
            </p>
            <p className="mt-[5px] text-xs font-light text-spotifyGray tracking-wide uppercase">
              Playlists
            </p>
          </div>
        </div>
      </header>
      <section className="mt-[70px] grid grid-rows-2 grid-cols-1 gap-[70px] sm:grid-rows-1 sm:grid-cols-2">
        {/* Top Artists */}
        <div className="w-full">
          <div className="mb-[40px] flex justify-between items-center">
            <h3 className=" text-lg font-bold">Top Artists of All Time</h3>
            <NavLink
              to="/artists"
              className="py-[11px] px-[24px] bg-transparent text-xs tracking-widest font-bold border-[1px] border-solid border-spotifyWhite rounded-full hover:bg-spotifyWhite hover:text-spotifyBlack shrink-0"
            >
              SEE MORE
            </NavLink>
          </div>
          <div>
            <div>
              {userTopArtists?.map((artist) => (
                <Link
                  to={`/artist/${artist.id}`}
                  key={artist.id}
                  className="group w-full h-[50px] mb-[20px] flex items-center space-x-5 hover:cursor-pointer"
                >
                  <div className="w-[50px] h-[50px] rounded-full relative shrink-0">
                    <img
                      className="rounded-full group-hover:brightness-50"
                      src={artist.images[0].url}
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
                  <span className="hover:underline underline-offset-4 cursor-pointer truncate">
                    {artist.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Top Songs*/}
        <div>
          <div className="mb-[40px] flex justify-between items-center">
            <h3 className="text-lg font-bold">Top Tracks of All Time</h3>
            <NavLink
              to="/tracks"
              className="py-[11px] px-[24px] bg-transparent text-xs tracking-widest font-bold border-[1px] border-solid border-spotifyWhite rounded-full hover:bg-spotifyWhite hover:text-spotifyBlack shrink-0"
            >
              SEE MORE
            </NavLink>
          </div>
          <div>
            <div>
              {userTopTracks?.map((track) => (
                <Link
                  to={`track/${track.id}`}
                  key={track.id}
                  className="group w-full h-[50px] mb-[20px] flex items-center  hover:cursor-pointer"
                >
                  <div className="w-[50px] h-[50px] mr-5 rounded-md relative shrink-0">
                    <img
                      className="rounded-lg group-hover:brightness-50"
                      src={track.album.images[0].url}
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
                      {track.name}
                    </span>
                    <div className="truncate">
                      <span className="text-xs text-spotifyGray">
                        {track.album.artists[0].name} - {track.album.name}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-spotifyGray self-start pt-1 ml-auto">
                    {msToMinSec(track.duration_ms)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
