import React from "react";
import { useParams } from "react-router-dom";

export default function Track({ token }) {
  const { trackId } = useParams();

  return <div>{trackId}</div>;
}
