import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

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
    <main className="w-full h-auto py-[30px] px-[25px] text-spotifyWhite ">
      <header className="w-full h-auto flex flex-col items-center">
        {/* Profile Picture */}
        <div className="w-[150px] h-[150px] rounded-full">
          <img className="rounded-full" src={userProfileData?.images[0].url} />
        </div>
        {/* User name */}
        <a className="text-3xl mt-[20px] font-bold text-center">
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
    </main>
  );
}
