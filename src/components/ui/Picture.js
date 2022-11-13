import { cva } from "cva";
import Image from "next/image";
import { SoundIcon } from "./SoundIcon";

const PictureStyles = cva(
  "rounded-none sm:rounded-xl w-screen h-screen max-h-[300px] max-w-[500px] relative overflow-hidden",
  {
    variants: {
      intent: {
        mobile: "",
        desktop: "sm:rounded-xl",
      },
    },
    defaultVariants: {
      intent: "desktop",
    },
  }
);

export function Picture({ intent, children, src, word, ...props }) {
  return (
    <div className="width-fit height-fit relative">
      <SoundIcon
        className={
          "absolute right-0 md:-top-4 md:-right-4 z-10 text-surface-light-900"
        }
        word={word}
      />
      <div className={PictureStyles({ intent })} {...props}>
        <Image
          className="object-cover object-center"
          src={src}
          alt="picture"
          fill
        />
      </div>
    </div>
  );
}
