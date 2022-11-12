import { defineField, defineType } from "sanity";
import { deskTool } from "sanity/desk";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

export const config = {
  projectId: "gjiqis7d",
  dataset: "production",
  apiVersion: "2021-10-21",
  title: "phoneme-game",
  basePath: "/admin",
  plugins: [deskTool(), unsplashImageAsset()],
  schema: {
    types: [
      defineType({
        name: "scene",
        type: "document",
        title: "Scene",
        fields: [
          defineField({
            name: "picture",
            title: "Picture",
            type: "image",
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: "phoneme",
            title: "Phoneme",
            type: "string",
          }),
        ],
      }),
    ],
  },
};
