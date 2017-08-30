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
			text:"Which was teh first national park in the United States?",
			answers:["Grand Canyon National Park", "Rocky Mountain National Park", "Great Smokey Mountains National Park", "Yellowstone National Park"],
			correctAnswer: 2,
		},
	],
}


	
	function showQuestion() {
		let html = `<h3>${QUIZ.questions[currentQuestion].text}</h3>`
		$("#quiz").html(html); 
	}
//Display start page/question page
//listen for submit event on answer
	//determine if answer is correct
	function identifyCorrectAnswer(userInput, correctAnswer){
		//some code here to identify is answer is correct T or F 
	}
	//increment correct counter

	let score = 0;
	
	let currentQuestion = 0; 
	$("#title").text(QUIZ.name);
	showQuestion();

	
//button click event to move to next question page
