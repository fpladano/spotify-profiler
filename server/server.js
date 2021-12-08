const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// REFRESH TOKEN
app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  console.log("Refresh Token", refreshToken);
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "19fbc1a2a4924852b1b82237f0e3157b",
    clientSecret: "a81d9ccf48e54cdf8d5eb696bed14452",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

// LOGIN TOKEN
app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "19fbc1a2a4924852b1b82237f0e3157b",
    clientSecret: "a81d9ccf48e54cdf8d5eb696bed14452",
  });
  console.log("code", code);

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(3001);
