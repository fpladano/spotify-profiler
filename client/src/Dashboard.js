import { useEffect } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);

  // Set access token to the spotify api instance to make the requests
  useEffect(() => {
    if (!accessToken) return;
    spotifyRequest.setAccessToken(accessToken);
    console.log(spotifyRequest);
  }, [accessToken]);

  return <div>{code}</div>;
}
