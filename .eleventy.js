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
  switch (m) {
    case 0:
      m = "January";
      break;
    case 1:
      m = "February";
      break;
    case 2:
      m = "March";
      break;
    case 3:
      m = "April";
      break;
    case 4:
      m = "May";
      break;
    case 5:
      m = "June";
      break;
    case 6:
      m = "July";
      break;
    case 7:
      m = "August";
      break;
    case 8:
      m = "September";
      break;
    case 9:
      m = "October";
      break;
    case 10:
      m = "November";
      break;
    case 11:
      m = "December";
      break;
  }
  return `${y} ${m} ${d}`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("toISODateString", toISODateString);
  eleventyConfig.addFilter("toMyDateString", toMyDateString);

  eleventyConfig.addCollection("thoughts", (collectionApi) =>
    collectionApi.getFilteredByGlob("thoughts/*.md").reverse()
  );

  eleventyConfig.addCollection("reviews", (collectionApi) =>
    collectionApi.getFilteredByGlob("reviews/*.md").reverse()
  );
};
