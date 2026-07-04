module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Base64-encode a value at build time so email parts never appear as
  // plaintext in the served HTML (they're decoded client-side, see index.njk).
  eleventyConfig.addFilter("b64", (value) =>
    Buffer.from(String(value), "utf8").toString("base64")
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
