function toISODateString(date) {
  const d = `${date.getUTCDate()}`.padStart(2, "0");
  const m = `${date.getUTCMonth() + 1}`.padStart(2, "0");
  const y = date.getUTCFullYear();
  return `${y}-${m}-${d}`;
}

function toMyDateString(date) {
  const y = date.getUTCFullYear();
  const d = `${date.getUTCDate()}`.padStart(2, "0");
  let m = date.getUTCMonth();
  m = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  }[m];
  return `${y} ${m} ${d}`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("toISODateString", toISODateString);
  eleventyConfig.addFilter("toMyDateString", toMyDateString);
  eleventyConfig.addFilter("mostRecent", (collection) => collection[0]);
  eleventyConfig.addFilter("mostRecentThree", (collection) =>
    collection.slice(0, 3)
  );

  // make collections from directories
  for (let dirName of ["projects", "research", "notes", "photos"]) {
    eleventyConfig.addCollection(dirName, (cAPI) =>
      cAPI.getFilteredByGlob(`${dirName}/*.{md,html}`).reverse()
    );
  }

  return {
    htmlTemplateEngine: "njk",
  };
};
