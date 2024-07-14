import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `https://assets.react-photo-album.com/_next/image?url=${encodeURIComponent(
    `/_next/static/media/${asset}`
  )}&w=${width}&q=75`;
}

const photos = [
  { asset: "image01.018d1d35.jpg", width: 1080, height: 780 },
  { asset: "image02.cf33eff7.jpg", width: 1080, height: 1620 },
  { asset: "image03.cdc32b45.jpg", width: 1080, height: 720 },
  { asset: "image04.9a1f6335.jpg", width: 1080, height: 720 },
  { asset: "image05.d7ef12b4.jpg", width: 1080, height: 1620 },
  { asset: "image06.4ab952e3.jpg", width: 1080, height: 607 },
  { asset: "image07.ac608196.jpg", width: 1080, height: 608 },
  { asset: "image08.95e095b5.jpg", width: 1080, height: 720 },
  { asset: "image09.fa6c4764.jpg", width: 1080, height: 1549 },
].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset, breakpoint),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    } as Photo)
);

export default photos;
