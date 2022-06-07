const titles = [
  "duel",
  "dule",
  "speed",
  "spede",
  "deul",
  "cars",
  "racs",
  "shape",
  "shpea",
];

function groupTitles(strs) {
  const responseObject = {};

  for (const title of titles) {
    const countArray = new Array(26).fill(0);

    for (const letter of title) {
      const index = letter.charCodeAt(0) - "a".charCodeAt(0);
      countArray[index] += 1;
    }

    const key = countArray;

    if (key in responseObject) {
      responseObject[key].push(title);
    } else {
      responseObject[key] = [title];
    }
  }

  const result = [];

  for (const key in responseObject) {
    result.push(responseObject[key]);
  }
  return result;
}

const titleArrays = groupTitles(titles);
const query = "cars";

for (const [_, similarTitle] of Object.entries(titleArrays)) {
  if (similarTitle.includes(query)) {
    console.log(similarTitle);
  } else {
    console.log("Query not matched!");
  }
}
