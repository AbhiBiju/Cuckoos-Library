const questions=[{text:"What kind of movies do you like the most?",answers:["A. Something with tons of gore, and that'll make me have nightmares.", 
"Something that I'll need to think about or solve. May or may not have plot twists.","Something heartwarming, where love is the focus.","Something set in the future or another planet with futuristic technology.", "Something about a real person or an event that may or may not be a documentary.","Something with a lot of action! I dislike the boring crap..."], genre:["Horror","Mystery","Romance","SciFi","Nonfiction","Action"]},
{text:"What's your favorite part about reading a book?", answers:["I love when books make my heart beat faster.", "I love when a book keeps me guessing.", "I love when a book tugs on my heartstrings.","I love when a book makes me envision the future.",
"I love when a book informs me on real events & people.","I love when a book gives me a good thrill/adventurous feeling."],genre:["Horror","Mystery","Romance","SciFi","Nonfiction","Action"]},
{text:"Which of these colors do you prefer?",answers:["Black","Blue","Purple","Green","Brown","Red"],genre:["Horror","Mystery","Romance","SciFi","Nonfiction","Action"]},{text:"What do you usually daydream about?",
answers:["My daydreams are nightmares","Solving crimes","Love & romantic scenes","The future/outer space","Meeting famous historical figures","Going on adventures and kicking butt"],genre:["Horror","Mystery","Romance","SciFi","Nonfiction","Action"]},
{text:"Which of the following sounds like a great getaway?",answers:["A secluded cabin in the woods.","A lavish hotel in a city shrouded in mystery.","A resort, preferably with a lover","Another planet.","Ruins in another country","Any fast-paced inner city like New York"], genre:["Horror","Mystery","Romance","SciFi","Nonfiction","Action"]}];


var questionNumber;
questionNumber= 0;

var scores = {Horror: 0,Mystery: 0,Romance: 0, SciFi: 0, Nonfiction: 0, Action: 0};



//Create a div in index.html with class questionsContainer, thats where the question text will reside

function nextQuestion(){
    if(!questions[questionNumber]){
      return endQuiz();
    }
    questionsContainer.innerHTML = ""
    var question = questions[questionNumber].text;
    questionsContainer.append(question);
    //Loop that displays answer buttons
    for (let i=0; i < 6 ;i++){
        var answerButton = document.createElement("button");
        answerButton.textContent = questions[questionNumber].answers[i];
        answerButton.classList.add(questions[questionNumber].genre[i]);
        questionsContainer.append(answerButton);
        //Move to next question upon answer clicknNumber++
        answerButton.addEventListener('click', function(event){
            var genre = event.target.classList[0];
            scores[genre]++;
            nextQuestion();
        })
    }
}

function endQuiz(){
    var highScore = -1;
    var genreMatch = '';    
    for(key in scores){
        if(scores[key] > highScore){
            highScore = scores[key];
            genreMatch = key;
        }
    }
}