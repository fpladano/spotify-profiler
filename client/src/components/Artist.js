import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { useParams } from "react-router-dom";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function Artist({ token }) {
  const [artistData, setArtistData] = useState(null);
  const { artistId } = useParams();

  useEffect(() => {
    spotifyRequest.setAccessToken(token);

    spotifyRequest.getArtist(artistId).then(
      function (data) {
        setArtistData(data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [artistId]);

  return <div>{artistId}</div>;
}
