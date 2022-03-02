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
    <main>
      <header>
        <div>
          <i>Profile Pic</i>
        </div>
        <a>Profile name link to profile in spotify</a>
        <div>user stats like followes...</div>
        <a>logout btn</a>
      </header>
    </main>
  );
}
