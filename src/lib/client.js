const sanityClient = require("@sanity/client");
export const client = sanityClient({
  projectId: "i3mvwhc1",
  dataset: "production",
  apiVersion: "2022-12-23",
  useCdn: true,
});
