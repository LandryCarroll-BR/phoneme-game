import ConfettiRain from "@/components/ConfettiRain";
import Scene from "@/components/Scene";
import { Footer } from "@/components/ui/Footer";
import { LetterBox } from "@/components/ui/PhonemeBox";
import { LetterTile } from "@/components/ui/LetterTile";
import { LetterTileContainer } from "@/components/ui/LetterTileContainer";
import { LetterBoxContainer } from "@/components/ui/LettterBoxContainer";
import { Picture } from "@/components/ui/Picture";
import { TopNav } from "@/components/ui/TopNav";
import Head from "next/head";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function Home({ scenes }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(scenes);

  // const [activeLetter, setActiveLetter] = useState(scenes);
  // const [clickedLetter, setClickedLetter] = useState("");

  // const [letterBoxes, setLetterBoxes] = useState(
  //   word.split("").map((letter, index) => {
  //     return { letter, status: index === 0 ? "active" : "primary" };
  //   })
  // );

  // const getRandomLetterTiles = (length) => {
  //   let result = "";
  //   let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   let charactersLength = characters.length;
  //   for (var i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   const activeLetter = letterBoxes.filter(
  //     (letterBox) => letterBox.status === "active"
  //   )[0].letter;
  //   return (result += activeLetter).split("");
  // };

  // const [letterTiles, setLetterTiles] = useState(
  //   shuffle(getRandomLetterTiles(2))
  // );

  // const incrementIndex = () => {
  //   if (index === scenes.length) {
  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  // };

  // function shuffle(array) {
  //   let currentIndex = array.length,
  //     randomIndex;

  //   // While there remain elements to shuffle.
  //   while (currentIndex != 0) {
  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }

  //   return array;
  // }

  const renderWinScreen = () => {
    return (
      <div className="flex w-screen h-screen items-center justify-center flex-col">
        <h2 className="text-2xl text-white font-bold mb-10">
          Great Job! You completed all of the pictures!
        </h2>
        <Button onClick={() => setActiveIndex(0)}>Start Over</Button>
      </div>
    );
  };

  return (
    <div>
      {scenes.length !== activeIndex
        ? scenes?.map((scene, index) => {
            console.log(index === activeIndex);
            return (
              <Scene
                key={index}
                scene={scene}
                show={index === activeIndex}
                goToNextScene={() => setActiveIndex(activeIndex + 1)}
              />
            );
          })
        : renderWinScreen()}
    </div>
  );
}

export async function getServerSideProps() {
  const testData = [
    {
      picture:
        "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      phonemes: ["d", "o", "g"],
    },
    {
      picture:
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      phonemes: ["b", "l", "o", "ck"],
    },
    // {
    //   picture:
    //     "https://images.unsplash.com/photo-1541689221361-ad95003448dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    //   word: "pig",
    // },
  ];
  return {
    props: {
      scenes: testData,
    }, // will be passed to the page component as props
  };
}
