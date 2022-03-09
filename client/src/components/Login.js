import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=957bf69ffd504c589846aa047f026a20&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public%20user-top-read%20user-library-read%20user-library-modify%20playlist-read-private%20user-follow-read%20user-read-recently-played";

export default function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-spotifyBackground">
      <div className="flex flex-col items-center mb-[100px]">
        <h1 className="text-4xl sm:text-6xl font-bold text-spotifyWhite text-center">
          Spotify Profiler
        </h1>
        <a
          className="mt-[20px] py-[11px] px-[24px] text-xs text-center text-spotifyWhite bg-spotifyGreen tracking-widest uppercase rounded-full hover:cursor-pointer hover:brightness-125"
          href={AUTH_URL}
        >
          Login With Spotify
        </a>
      </div>
    </div>
  );
}
