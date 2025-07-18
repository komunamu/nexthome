"use client";
import Lottie from "react-lottie-player";

import { useEffect, useState } from "react";

export default function Animation() {
  const [json, setJson] = useState(null);

  useEffect(() => {
    fetch("/lottie.json")
      .then((res) => res.json())
      .then((json) => setJson(json));
  }, []);

  return (
    <Lottie
      loop
      animationData={json}
      play
      style={{ width: 200, height: 200 }}
    />
  );
}
