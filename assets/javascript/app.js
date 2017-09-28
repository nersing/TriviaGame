$(document).ready(function() {

//start game with these items hiding
$("#questionList").hide();
$("#scorePage").hide();


//start game button
$("#start").on("click", function(){
	console.log(this);

	//hide start button once they click it
	$("#startbutton").hide();

	//show questions,answers, submit button
	$("#questionList").show();

	//start count down
	startCountdown();

});


//end game button
$("#submit").on("click", function(){
	console.log(this);
	clearInterval(counter);
	answers();

	//hide start button once they click it
	$("#startbutton").hide();
	//question list hide
	$("#questionList").hide();

	//show questions,answers, submit button
	$("#scorePage").show();

});


//start countdown
var count = 60;


var counter;

function startCountdown(){
	counter = setInterval(timer, 1000);
};

function timer(){
	 count --;
	if(count < 0){
		clearInterval(counter);
		answers();
		//counter ended, do something here
		//go to scorePage
		$("#scorePage").show();
		
		//hide start button once they click it
		$("#startbutton").hide();
		//question list hide
		$("#questionList").hide();
		return;



		$("#timer").html("Time Remaining:   " + count + " Seconds Left");
	}
	//show timer in html
	
}


//variables for counting answers
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswer = 0;


//pulling each qts radio elements for checking answers
function answers(){
	console.log("answers called");
	
	var q1 = $('input:radio[name="q1"]:checked').val();
	var q2 = $('input:radio[name="q2"]:checked').val();
	var q3 = $('input:radio[name="q3"]:checked').val();
	var q4 = $('input:radio[name="q4"]:checked').val();
	var q5 = $('input:radio[name="q5"]:checked').val();
	var q6 = $('input:radio[name="q6"]:checked').val();
	var q7 = $('input:radio[name="q7"]:checked').val();

		// console.log(q1, q2, q3, q4, q5, q6, q7);
	// var answer1 = $('input:radio')

//Question 1

	if( q1 === "c"){
		correctAnswer++;


	}
	else if( q1 === undefined){
			unAnswer ++;

	}else{
			wrongAnswer++;
	}


//Question 2
	if(q2 === "a"){
			correctAnswer++;
	}
	else if(q2 === undefined){
			unAnswer++;

	}else{
			wrongAnswer++;
	}


//Question 3
	if(q3 === "c"){
		correctAnswer++;
	}
	else if(q3 === undefined){
			unAnswer++;

	}else{
			wrongAnswer++;
	}


//Question 4
	if(q4 === "d"){
		correctAnswer++;
	}
	else if(q4 === undefined){
			unAnswer++;

	}else{
			wrongAnswer++;
	}


//Question 5
	if(q5 === "d"){
		correctAnswer++;
	}
	else if(q5 === undefined){
			unAnswer++;

	}else{
			wrongAnswer++;
	}


//Question 6
	if(q6 === "b"){
		correctAnswer++;
	}
	else if(q6 === undefined){
			unAnswer++;

	}else{
			wrongAnswer++;
	}


//Question 7
	if(q7 === "b"){
		correctAnswer++;
	}
	else if(q7 === undefined){
			unAnswer++;

	}else{
			wrongAnswer++;
	}


//showing answers in result page
$("#correct").html("Correct Answers:   " + correctAnswer);
$("#incorrect").html("Incorrect Answers:   " + wrongAnswer);
$("#unanswered").html("Unanswered:   " + unAnswer);

}

// function reset(){

// }



$("#restart").on("click", function(){
	
	$("#myForm")[0].reset();
	

	$("#startbutton").show();
		//question list hide
	$("#questionList").hide();
	//show questions,answers, submit button
	$("#scorePage").hide();

	correctAnswer = 0;
	wrongAnswer = 0;
	unAnswer = 0;

});



// //make reset function and button

// function reset(){
// 	//show
// 	$("#startbutton").show();
// 		//question list hide
// 	$("#questionList").hide();
// 	//show questions,answers, submit button
// 	$("#scorePage").hide();

// 	correctAnswer = 0;
// 	wrongAnswer = 0;
// 	unAnswer = 0;


// };






});


