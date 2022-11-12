import sanityClient from "@sanity/client";

const options = {
  dataset: "production",
  projectId: "gjiqis7d",
  useCdn: true,
  useProjectHostname: true,
  apiVersion: "2021-10-21",
};

export const sanity = sanityClient(options);

export default sanity;
