import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#AEACAF",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./bilal-logo.png",
  fullDecal: "./bilal-logo.png",
});

export default state;
