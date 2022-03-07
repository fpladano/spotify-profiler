import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function Track({ token }) {
  const [track, setTrack] = useState(null);
  const { trackId } = useParams();

  useEffect(() => {
    spotifyRequest.setAccessToken(token);

    spotifyRequest.getTrack(trackId).then(
      function (data) {
        setTrack(data.body);
      },
      function (err) {
        console.log("Something went Wrong!", err);
      }
    );
  }, [trackId]);

  return (
    <main className="w-full h-full flex flex-col justify-center items-center py-[30px] px-[25px] sm:py-[60px] sm:px-[50px] text-spotifyWhite">
      <div>
        <div>
          <img className="" src={track?.album.images[1].url} />
        </div>
        <div>
          <h1>{track?.name}</h1>
          <h2>{track?.artists[0].name}</h2>
          <h3>
            {track?.album.name} - {track?.album.release_date}
          </h3>
          <a>Play on Spotify</a>
        </div>
      </div>
      <div></div>
    </main>
  );
}
