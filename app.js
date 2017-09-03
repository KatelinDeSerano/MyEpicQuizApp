const QUIZ = {
	name: "National Parks Quiz",
	questions: [
		{
			text:"Which was the first national park in the United States?",
			answers:["Yosemite National Park", "Yellowstone National Park", "Zion National Park", "Grand Canyon National Park"],
			correctAnswer: 1,
		},
		{
			text:"Which State has the most national parks?",
			answers:["California", "Alaska", "Colorado", "Wyoming"],
			correctAnswer: 0,
		},
		{
			text:"Which U.S. President had the greatest contribution to our National Parks?",
			answers:["John F. Kennedy", "Herbert Hoover", "Theodore Roosevelt", "Abraham Lincoln"],
			correctAnswer: 2,
		},
		{
			text:"In what year was the National Park Service founded? ",
			answers:["1916", "1938", "1950", "1899"],
			correctAnswer: 0,
		},
		{
			text:"Which was the first national park in the United States?",
			answers:["Grand Canyon National Park", "Rocky Mountain National Park", "Great Smokey Mountains National Park", "Yellowstone National Park"],
			correctAnswer: 2,
		},
	],
}

function startPage() {
	let html = 
			`<h2>Welcome to my National Parks Quiz!<h2><br>
			<form id ="startButton">
			<button type = "submit">Let's begin</button>
			</form>`

	$("#quiz").html(html);
}

function handleStartButton() {
	$("#quiz").on("submit", "#startButton", function(e) {
	 	e.preventDefault();
	 	showQuestion ();
	});
}

function showQuestion() {
	let html = 
			`<h3>${QUIZ.questions[currentQuestion].text}</h3>`
	for(let i = 0; i < QUIZ.questions[currentQuestion].answers.length; i++) {
		html +=
		`<form id="chooseAnswer">
			<input type = "radio" name = "answer" value = "${i}">${QUIZ.questions[currentQuestion].answers[i]}<br>`
	}
	html +=
		`<input type = "submit" value = "submit">
		</form>
		<p>Question #${currentQuestion + 1} out of ${QUIZ.questions.length}</p> `

	$("#quiz").html(html); 
}

function handleSubmit(){
 	$('#quiz').on("submit", "#chooseAnswer", function(e) {
	 	e.preventDefault();
	 	let userAnswer = $("input[name='answer']:checked").val();
	 	identifyCorrectAnswer(userAnswer);
	});
}


function identifyCorrectAnswer(userAnswer) {
	let feedback
	if (userAnswer == QUIZ.questions[currentQuestion].correctAnswer){
		score++; 
		feedback = "<h2>correct!</h2>"
	} else {
		feedback = `<h2>Incorrect, the correct answer was ${QUIZ.questions[currentQuestion].answers[QUIZ.questions[currentQuestion].correctAnswer]}</h2>`
	}
	let html = feedback + "<form id='nextButton'><button type='submit'>next</button></form>"; 
	$("#quiz").html(html);
}

function handleNextButton() {
	$("#quiz").on("submit", "#nextButton", function(e) {
	 	e.preventDefault();
	 	currentQuestion++;
	 	if (currentQuestion < QUIZ.questions.length) {
	 		showQuestion();
	 	} else {
	 		showResults();
	 	}
	});
}

function showResults(){
	let html = 
	`<h2>You got ${score} out of ${QUIZ.questions.length} correct!</h2>`

	$("#quiz").html(html); 
}

startPage();
handleStartButton();
handleNextButton();
let score = 0;
let currentQuestion = 0; 
$("#title").text(QUIZ.name);
//showQuestion();
handleSubmit();
