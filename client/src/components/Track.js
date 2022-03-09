import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import FeatureChart from "./FeatureChart";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function Track({ token }) {
  const [track, setTrack] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);
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

    spotifyRequest.getAudioFeaturesForTrack(trackId).then(
      function (data) {
        const dataSet = [
          data.body.acousticness,
          data.body.danceability,
          data.body.energy,
          data.body.instrumentalness,
          data.body.liveness,
          data.body.speechiness,
          data.body.valence,
        ];
        setAudioFeatures(dataSet);
      },
      function (err) {
        console.log("Something went Wrong!");
      }
    );
  }, [trackId]);

  return (
    <main className="w-full h-full flex flex-col py-[30px] px-[25px] sm:py-[60px] sm:px-[50px] text-spotifyWhite">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-start">
        <div className="shrink-0 sm:mr-[40px]">
          <img
            className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
            src={track?.album.images[1].url}
          />
        </div>
        <div className="mt-[30px] sm:mt-[0px] flex flex-col items-center sm:items-start">
          <span className="mb-[5px] text-3xl md:text-4xl font-bold text-center sm:text-left">
            {track?.name}
          </span>
          <h2 className="mb-[10px] text-xl md:text-2xl font-bold text-center sm:text-left text-spotifyGray">
            {track?.artists[0].name}
          </h2>
          <h3 className="mb-[10px] text-base text-center sm:text-left text-spotifyGray">
            {track?.album.name} - {track?.album.release_date.substring(0, 4)}
          </h3>
          <a
            className="my-[20px] py-[11px] px-[24px] text-xs text-spotifyWhite bg-spotifyGreen tracking-widest uppercase rounded-full hover:cursor-pointer hover:brightness-125"
            href={`https://open.spotify.com/track/${track?.id}`}
            target="_blank"
          >
            Play on Spotify
          </a>
        </div>
      </div>
      <div className="h-full w-full min-h-[75%] max-w-2xl mx-auto relative">
        {audioFeatures && <FeatureChart audioFeaturesData={audioFeatures} />}
      </div>
    </main>
  );
}
