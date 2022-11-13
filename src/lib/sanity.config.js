import { defineField, defineType } from "sanity";
import { deskTool } from "sanity/desk";

export const config = {
  projectId: "gjiqis7d",
  dataset: "production",
  apiVersion: "2021-10-21",
  title: "phoneme-game",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: [
      defineType({
        name: "scene",
        type: "document",
        title: "Scene",
        fields: [
          defineField({
            name: "title",
            title: "Title",
            type: "string",
          }),
          defineField({
            name: "picture",
            title: "Picture",
            type: "image",
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: "phonemes",
            title: "Phoneme Boxes",
            type: "array",
            of: [{ type: "reference", to: { type: "phoneme" } }],
          }),
        ],
      }),
      defineType({
        name: "phoneme",
        title: "Phoneme",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "letters",
            title: "Letters",
            type: "string",
          },
          {
            name: "choices",
            title: "Other Choices (separate by comma)",
            type: "string",
          },
        ],
      }),
    ],
  },
};
