import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=957bf69ffd504c589846aa047f026a20&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public%20user-top-read%20user-library-read%20user-library-modify";

export default function Login() {
  return (
    <div>
      <a href={AUTH_URL}>Login With Spotify</a>
    </div>
  );
}
