const QUIZ = {
	name: "National Parks Quiz",
	questions: [
		{
			text:"Which was the first national park in the United States?",
			answers:["Yosemite National Park", "Yellowstone National Park", "Zion National Park", "Grand Canyon National Park"],
			correctAnswer: 1,
			image: "black-bear.jpg",
			imageAlt: "Black Bear",
		},
		{
			text:"Which State has the most national parks?",
			answers:["California", "Alaska", "Colorado", "Wyoming"],
			correctAnswer: 0,
			image: "black-bear.jpg",
			imageAlt: "Black Bear",
		},
		{
			text:"Which U.S. President had the greatest contribution to our National Parks?",
			answers:["John F. Kennedy", "Herbert Hoover", "Theodore Roosevelt", "Abraham Lincoln"],
			correctAnswer: 2,
			image: "black-bear.jpg",
			imageAlt: "Black Bear",
		},
		{
			text:"In what year was the National Park Service founded? ",
			answers:["1916", "1938", "1950", "1899"],
			correctAnswer: 0,
			image: "black-bear.jpg",
			imageAlt: "Black Bear",
		},
		{
			text:"Which was the first national park in the United States?",
			answers:["Grand Canyon National Park", "Rocky Mountain National Park", "Great Smokey Mountains National Park", "Yellowstone National Park"],
			correctAnswer: 2,
			image: "black-bear.jpg",
			imageAlt: "Black Bear",
		},
	],
}

function startPage() {
	let html = 
			`<div id="startPage">
			<h2>Welcome to my National Parks Quiz!<h2><br>
			<form id ="startButton">
			<button class="btn btn-lg btn-default" type="submit">Let's begin!</button>
			</form>
			</div>`

	$("#quiz").html(html);
}

function handleStartButton() {
	$("#quiz").on("submit", "#startButton", function(e) {
	 	e.preventDefault();
	 	showQuestion ();
	});
}

function showQuestion() {
	let html = `<div class="col-md-12">
					<h3>${QUIZ.questions[currentQuestion].text}</h3>
				</div>`

	html += `<div class="row">`
	html += `<form id="chooseAnswer">`
	html += `<div class="col-md-6">`
	for(let i = 0; i < QUIZ.questions[currentQuestion].answers.length; i++) {
		
		html += `<div class="options"><input type="radio" name="answer" value="${i}"> ${QUIZ.questions[currentQuestion].answers[i]}<br></div>`
	}

	html += `<button type="submit" class="btn btn-block btn-default" id="submitButton">submit</button></div>`
	html += `<div class="col-md-6" id="imagebox"><img id="image" src="${QUIZ.questions[currentQuestion].image}" alt="${QUIZ.questions[currentQuestion].imageAlt}"></div>`
	html += `</div>`
	html +=`</form>`
	let percent = ((currentQuestion + 1)/QUIZ.questions.length)*100; 
	html += `<div class="progressbar">`
	html += `<div class="progress">`
  	html += `<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="${currentQuestion + 1}" aria-valuemin="0" aria-valuemax="${QUIZ.questions.length}" style="width:${percent}%;">
    		Question #${currentQuestion + 1} out of ${QUIZ.questions.length}`
  	html += `</div>`
	html += `</div>`
	html += `</div>`
	
	$("#quiz").html(html); 
}

function handleSubmit() {
	console.log("test");
 	$('#quiz').on("submit", "#chooseAnswer", function(e) {
	 	console.log("test2"); 	
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
		feedback = `<h2>Incorrect, the correct answer was "${QUIZ.questions[currentQuestion].answers[QUIZ.questions[currentQuestion].correctAnswer]}"</h2>`
	}
	let html = feedback + "<form id='nextButton'><button type='submit' class='btn btn-default'>next</button></form>";
	let percent = ((currentQuestion + 1)/QUIZ.questions.length)*100; 
	html += `<div class="progress">`
  	html += `<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="${currentQuestion + 1}" aria-valuemin="0" aria-valuemax="${QUIZ.questions.length}" style="width:${percent}%;">
    		Question #${currentQuestion + 1} out of ${QUIZ.questions.length}`
  	html += `</div>`
	html += `</div>` 
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
