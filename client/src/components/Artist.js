import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { useParams } from "react-router-dom";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function Artist({ token }) {
  const [artist, setArtist] = useState(null);
  const { artistId } = useParams();

  useEffect(() => {
    spotifyRequest.setAccessToken(token);

    spotifyRequest.getArtist(artistId).then(
      function (data) {
        setArtist(data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [artistId]);

  return (
    <main className="w-full h-full flex flex-col justify-center items-center py-[30px] px-[25px] sm:py-[60px] sm:px-[50px] text-spotifyWhite">
      <div className="rounded-full flex flex-col items-center">
        <div>
          <img
            className="rounded-full w-[200px] h-[200] sm:w-[300px] sm:h-[300px] group-hover:brightness-50"
            src={artist?.images[0].url}
          />
        </div>
        <p className="my-[20px] truncate text-3xl sm:text-5xl font-bold tracking-wider">
          {artist?.name}
        </p>
        <div className="flex space-x-4 sm:space-x-10 mb-20">
          <div className="flex flex-col items-center">
            <span className="text-spotifyGreen text-xl sm:text-2xl font-bold mb-1">
              {new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                artist?.followers.total
              )}
            </span>
            <span className="uppercase text-spotifyGray text-sm">
              Followers
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-spotifyGreen text-xl sm:text-2xl text-center font-bold capitalize mb-1">
              {artist?.genres[0]}
            </span>
            <span className="uppercase text-spotifyGray text-sm">Genres</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-spotifyGreen text-xl sm:text-2xl font-bold mb-1">
              {artist?.popularity}%
            </span>
            <span className="uppercase text-spotifyGray text-sm">
              Popularity
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
