import Image from "next/Image";
import { useNextSanityImage } from "next-sanity-image";
import sanity from "../lib/sanityClient";

export default function SanityImage({ image }) {
  const baseURL = "https://cdn.sanity.io/images/";

  const imageProps = useNextSanityImage(sanity, image);

  return (
    <Image
      {...imageProps}
      layout="fill"
      alt="picture"
      objectFit="cover"
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
}
