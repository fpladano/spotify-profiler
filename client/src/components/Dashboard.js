import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [userProfileData, setUserProfileData] = useState();
  const [userPlaylists, setUserPlaylists] = useState();
  const [userFollowing, setUserFollowing] = useState();
  const [userTopArtists, setUserTopArtists] = useState();
  const [userTopTracks, setUserTopTracks] = useState();

  // Set access token to the spotify api instance to make the requests
  useEffect(() => {
    if (!accessToken) return;

    spotifyRequest.setAccessToken(accessToken);

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
  }, [accessToken]);

  return <div>{code}</div>;
}
