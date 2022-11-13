import ConfettiRain from "@/components/ConfettiRain";
import Scene from "@/components/Scene";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { groq } from "next-sanity";
import { getClient } from "@/lib/sanity.server";

const query = groq`*[_type == "scene"] {
      _id,
      title,
      picture,
      "pictureURL": picture.asset->url,
      phonemes[]->
    }`;

export default function Home({ scenes, testScenes }) {
  const [activeIndex, setActiveIndex] = useState(0);

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
      {scenes?.length !== activeIndex
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
      <ConfettiRain show={activeIndex === scenes?.length} />
    </div>
  );
}

// export async function getServerSideProps() {
//   const scenes = await sanity.fetch(query).then((scenes) => {
//     try {
//       return scenes.map((scene) => {
//         return {
//           picture: scene.pictureURL,
//           phonemes: scene.phonemes.map((phoneme) => phoneme.letters),
//         };
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   });

//   const testData = [
//     {
//       picture:
//         "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//       phonemes: ["d", "o", "g"],
//     },
//     {
//       picture:
//         "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
//       phonemes: ["b", "l", "o", "ck"],
//     },
//     // {
//     //   picture:
//     //     "https://images.unsplash.com/photo-1541689221361-ad95003448dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     //   word: "pig",
//     // },
//   ];
//   console.log(scenes);
//   return {
//     props: {
//       scenes,
//     }, // will be passed to the page component as props
//   };
// }

export async function getStaticProps({ params, preview = false }) {
  const scenes = await getClient(preview)
    .fetch(query)
    .then((scenes) => {
      try {
        return scenes.map((scene) => {
          return {
            picture: scene.pictureURL,
            phonemes: scene.phonemes.map((phoneme) => phoneme.letters),
          };
        });
      } catch (error) {
        console.error(error);
      }
    });

  console.log(scenes);

  return {
    props: {
      scenes,
    },
  };
}
