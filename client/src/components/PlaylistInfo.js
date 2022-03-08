import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import FeatureChart from "./FeatureChart";

const spotifyRequest = new SpotifyWebApi({
  clientId: "957bf69ffd504c589846aa047f026a20",
});

export default function PlaylistInfo() {
  const { playlistId } = useParams();
  return <div>{playlistId}</div>;
}
