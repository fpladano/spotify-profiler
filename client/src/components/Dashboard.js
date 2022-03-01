import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import Nav from "./Nav";
import { Router, Route, Routes } from "react-router-dom";

import User from "./User";
import Artists from "./Artists";
import Tracks from "./Tracks";
import Recent from "./Recent";
import Playlist from "./Playlists";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [userProfileData, setUserProfileData] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [userFollowing, setUserFollowing] = useState(null);
  const [userTopArtists, setUserTopArtists] = useState(null);
  const [userTopTracks, setUserTopTracks] = useState(null);

  // Set access token to the spotify api instance to make the requests
  useEffect(() => {
    if (!accessToken) return;

    //Setting up the access token to my spotify request instance
    spotifyRequest.setAccessToken(accessToken);

    //The requests to get the data needed on the dashboard

    //Getting user info
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

  return (
    <>
      <div className="w-screen h-screen flex flex-col-reverse sm:flex-row">
        <Nav />
        <div className="w-full h-full bg-spotifyBlack">
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/playlists" element={<Playlist />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
