import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        setPlaylistList(data.body.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [token]);

  return (
    <main className="w-full h-auto py-[30px] px-[25px] sm:py-[60px] sm:px-[50px] text-spotifyWhite">
      <header className="flex flex-col items-center sm:flex-row sm:justify-between">
        <h3 className=" text-2xl font-bold">Your Playlists</h3>
      </header>
      <section className="mt-[70px]">
        <div className="grid grid-cols-fluid gap-[20px]">
          {playlistList?.map((playlist) => (
            <Link
              to={`/playlist/${playlist.id}`}
              key={playlist.id}
              className="flex flex-col items-center"
            >
              <div className="group relative hover:cursor-pointer">
                <img
                  className=" w-[150px] h-[150px] group-hover:brightness-50"
                  src={playlist?.images[0].url}
                />
              </div>
              <p className="mt-[20px] text-center hover:underline underline-offset-4 cursor-pointer">
                {playlist.name}
              </p>
              <p className="mt-[5px] text-xs text-center text-spotifyGray">
                {playlist.tracks.total} TRACKS
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
