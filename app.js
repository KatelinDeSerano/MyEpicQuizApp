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

function showQuestion() {
	let html = 
		`<h3>${QUIZ.questions[currentQuestion].text}</h3>
		<form id="chooseAnswer">`
	for(let i = 0; i < QUIZ.questions[currentQuestion].answers.length; i++) {
		html+=
		`<input type = "radio" name = "answer" value = "${i}">${QUIZ.questions[currentQuestion].answers[i]}<br>`
	}
	html +=
		`<input type = "submit" value = "submit">
	</form>`

	$("#quiz").html(html); 
}

function handleSubmit(){
 	$('#quiz').on("submit", "#chooseAnswer", function(e) {
	 	e.preventDefault();
	 	let userAnswer = $("input[name='answer']:checked").val();
	 	identifyCorrectAnswer(userAnswer);
	 	currentQuestion++; 
	 	if (currentQuestion < QUIZ.questions.length) {
	 		showQuestion();
	 	} else {
	 		showResults();
	 	}
	});
}

function identifyCorrectAnswer(userAnswer) {
	if (userAnswer == QUIZ.questions[currentQuestion].correctAnswer){
		score++; 
		console.log("correct");
	} else {
		console.log("wrong");
	}
	 
}

function showResults(){
	let html = 
	`<h2>You got ${score} out of ${QUIZ.questions.length} correct!</h2>`

	$("#quiz").html(html); 
}


let score = 0;


let currentQuestion = 0; 
$("#title").text(QUIZ.name);
showQuestion();
handleSubmit();

//button click event to move to next question page
