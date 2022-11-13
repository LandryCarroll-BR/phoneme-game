import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Footer } from "./ui/Footer";
import { PhonemeBox } from "./ui/PhonemeBox";
import { LetterTile } from "./ui/LetterTile";
import { LetterTileContainer } from "./ui/LetterTileContainer";
import { LetterBoxContainer } from "./ui/LettterBoxContainer";
import { Picture } from "./ui/Picture";
import { TopNav } from "./ui/TopNav";
import { getRandomPhonemes, shuffle } from "@/services/random";
import { Button } from "./ui/Button";

export default function Scene({ scene, show, goToNextScene }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { picture, phonemes } = scene;
  const [activePhoneme, setActivePhoneme] = useState(phonemes[activeIndex]);
  const [tiles, setTiles] = useState([]);
  const [showNextSceneButton, setShowNextSceneButton] = useState(false);

  const generateTiles = (phonemes, currentPhoneme) => {
    const randomPhonemes = getRandomPhonemes(phonemes.length - 1);
    const shuffledPhonemes = shuffle([currentPhoneme, ...randomPhonemes]);
    return shuffledPhonemes?.map((phoneme, index) => {
      return { phoneme, status: "primary" };
    });
  };

  useEffect(() => {
    const tiles = generateTiles(phonemes, activePhoneme);
    setTiles(tiles);
  }, []);

  const onSuccess = () => {
    setActiveIndex(activeIndex + 1);
    setActivePhoneme(phonemes[activeIndex + 1]);
    setTiles(generateTiles(phonemes, phonemes[activeIndex + 1]));
  };

  const onFailure = (currentIndex) => {
    const updatedTiles = tiles.map((tile, index) => {
      if (index === currentIndex) {
        return { phoneme: tiles[currentIndex].phoneme, status: "danger" };
      } else {
        return tile;
      }
    });
    setTiles(updatedTiles);
  };

  const checkPhonemes = (clickedPhoneme, index) => {
    if (activePhoneme === clickedPhoneme) {
      onSuccess();
    } else {
      onFailure(index);
    }
  };

  if (!show) return <div></div>;

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <Head>
        <title>Ms. Spencers Class</title>
        <meta name="description" content="A phonetics game for her kids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      <main className="flex w-full h-full justify-between items-center flex-col overflow-y-auto overlay">
        <div className="flex-1 flex items-center justify-center flex-col">
          <div className="min-h-[380px]">
            <Picture src={picture} word={phonemes.join("")} />
            <LetterBoxContainer className={"-translate-y-12"}>
              {phonemes.map((phoneme, index) => {
                return (
                  <PhonemeBox
                    intent={
                      index < activeIndex
                        ? "success"
                        : index === activeIndex
                        ? "active"
                        : ""
                    }
                    key={index}>
                    {index < activeIndex
                      ? phoneme
                      : index === activeIndex
                      ? "?"
                      : ""}
                  </PhonemeBox>
                );
              })}
            </LetterBoxContainer>
          </div>
        </div>
        <div className="bg-surface-dark-800 w-full min-h-[170px] p-10 pb-14 rounded-t-3xl text-center mt-auto">
          {/* <h4 className="font-bold text-xl pb-8 text-surface-light-900 ">
            Which letter goes in the box with the question mark?
          </h4> */}
          <LetterTileContainer>
            {activeIndex !== phonemes.length ? (
              tiles?.map((item, index) => {
                return (
                  <LetterTile
                    intent={item.status}
                    key={item + index}
                    onClick={() => {
                      checkPhonemes(item.phoneme, index);
                    }}>
                    {item.phoneme}
                  </LetterTile>
                );
              })
            ) : (
              <Button onClick={goToNextScene}>Next Picture</Button>
            )}
          </LetterTileContainer>
        </div>
      </main>

      <Footer />
    </div>
  );
}
