import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";

import User from "./User";
import Artists from "./Artists";
import Tracks from "./Tracks";
import Recent from "./Recent";
import Playlist from "./Playlists";
import Artist from "./Artist";
import Track from "./Track";
import PlaylistInfo from "./PlaylistInfo";

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [accessTokenState, setAccessTokenState] = useState(null);

  // Set access token to the spotify api instance to make the requests
  useEffect(() => {
    if (!accessToken) return;
    setAccessTokenState(accessToken);
  }, [accessToken]);

  return (
    <>
      <div className="w-screen h-screen flex flex-col-reverse sm:flex-row">
        <Nav />
        <div className="w-full h-full bg-spotifyBlack overflow-y-scroll">
          <Routes>
            <Route path="/" element={<User token={accessTokenState} />} />
            <Route
              path="/artists"
              element={<Artists token={accessTokenState} />}
            />
            <Route
              path="/tracks"
              element={<Tracks token={accessTokenState} />}
            />
            <Route
              path="/recent"
              element={<Recent token={accessTokenState} />}
            />
            <Route
              path="/playlists"
              element={<Playlist token={accessTokenState} />}
            />
            <Route
              path="/artist/:artistId"
              element={<Artist token={accessTokenState} />}
            />
            <Route
              path="/track/:trackId"
              element={<Track token={accessTokenState} />}
            />
            <Route
              path="/playlist/:playlistId"
              element={<PlaylistInfo token={accessTokenState} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
