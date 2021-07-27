var bookSearchBtn = $("#bookSearchBtn");

var titleSearch = $("#titleSearch");
var authorSearch = $("#authorSearch");
var genreSearch = $("#genreSearch");

var newBooks = $("#newBooks");
/* 
    https://www.googleapis.com/books/v1/volumes?q=${titleValue}+inauthor:$    {authorValue}&key=AIzaSyCcXM9xp7ZReVIVy-jlgcN7S1C2U6gmlH4
 */
bookSearchBtn.click(async () => {
  newBooks.empty();
  console.log("Books");
  var titleValue = titleSearch.val().trim().replace(/\s/g, "");
  var authorValue = authorSearch.val().trim().replace(/\s/g, "+");
  var genreValue = genreSearch.val().trim().replace(/\s/g, "+");

  var apiURL = "https://www.googleapis.com/books/v1/volumes?q=";
  var apiKey = "&key=AIzaSyCcXM9xp7ZReVIVy-jlgcN7S1C2U6gmlH4";
  
  if (titleValue != "") {
    apiURL += titleValue;
  }
  if (authorValue != "") {
    apiURL+=`+inauthor:${authorValue}`;
  }
  if (genreValue != "") {
    apiURL+=`+subject:${genreValue}`;
  }
  apiURL.concat(apiKey);

  console.log(`${apiURL}`);

  const response = await fetch(`${apiURL}`);
  const data = await response.json();

  var topFive = data.items.splice(0, 5);

  topFive.forEach((item) => {
    if (item.volumeInfo.imageLinks != undefined) {
      var newImg = $(`<img src="${item.volumeInfo.imageLinks.thumbnail}">`);
      newBooks.append(newImg);
    }
  });
});

var gifTester = ["Boats", "Running", "Train", "Cave", "Robot", "Gears", "Apple"];

var userAnswers = {
  horror: 0,
  action: 0,
  scifi: 0,
};

var nextBtn = $("#nextBtn");
var gifBox = $("#topicGif");
var topic = $("#topic");

var gifIndex = 0;
async function nextGif() {
  console.log(gifTester[gifIndex]);
  topic.text(gifTester[gifIndex]);

  const getGif = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${gifTester[gifIndex]}&api_key=7q56uzHnKHnzF8yVCo24CIsbKGGE2klH`
  );

  const gifData = await getGif.json();
  console.log(gifData);

  var randomGif = Math.round(Math.random() * gifData.data.length);

  var gifURL = gifData.data[randomGif].images.original.url;
  gifBox.attr("src", gifURL);

  gifIndex++;
  if (gifIndex === gifTester.length) {
    gifIndex = 0;
  }
  console.log(gifIndex);
}
nextBtn.click(nextGif);

var questionsContainer = $("#question");
