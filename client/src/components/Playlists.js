import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function Playlists({ token }) {
  const [playlistList, setPlaylistList] = useState(null);

  useEffect(() => {
    if (!token) return;

    spotifyRequest.setAccessToken(token);

    spotifyRequest
      .getMe()
      .then(function (data) {
        return data.body.id;
      })
      .then(function (userId) {
        return spotifyRequest.getUserPlaylists(userId);
      })
      .then(function (data) {
        setPlaylistList(data.body);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <main className="w-full h-full justify-center items-center py-[30px] px-[25px] sm:py-[60px] sm:px-[50px] text-spotifyWhite">
      <header className="flex flex-col items-center sm:flex-row sm:justify-between">
        <h3 className=" text-2xl font-bold">Your Playlist</h3>
      </header>
    </main>
  );
}
