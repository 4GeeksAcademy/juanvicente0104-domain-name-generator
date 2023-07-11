let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];

function domainGenerator(arrayOfWords1, arrayOfWords2, arrayOfWords3) {
  let domains = [];
  for (let wordInArray1 of arrayOfWords1) {
    for (let wordInArray2 of arrayOfWords2) {
      for (let wordInArray3 of arrayOfWords3) {
        let webName = wordInArray1 + wordInArray2 + wordInArray3 + ".com";
        console.log(webName);
        domains.push(webName);
      }
    }
  }
  return domains;
}

//console.log("Now, we test our Domain Name Generator")
domainGenerator(pronouns, adjectives, nouns);
