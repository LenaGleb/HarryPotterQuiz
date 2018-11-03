const myApp = {};

let countOfcorrect = 0;
let clickedForm;
let answerCheck;
let $answer;
let $answerText;

// Flash cards actions function
const formAction = () => {
	// Function for if the chosen option is correct - it shows green
	myApp.rightAnswer = () => {
  		$answer.css('background', ' #6B8E23')
  	}
  	// Function for if the chosen option is wrong - it shows red
	myApp.wrongAnswer = () => {
  		$answer.css('background', '#DC143C')
  	}
  	// Function for if the flashcard was answered correctly - green border appears
	myApp.colorChangeCorrect = () => {
		$clickedForm.parents(".card").css({"box-shadow": "0 5px 8px 0 #00876C, 0 6px 20px 0 #439D94"});
	}

	// Function for if the flashcard was answered wrong - red border appears
	myApp.colorChangeWrong = () => {
		$clickedForm.parents(".card").css({"box-shadow": "0 5px 8px 0 #97000E, 0 6px 20px 0 #D56048"});
	}

	// if the correct answer - correct answer functions run
	if (answerCheck === "correct"){
		console.log("correct")	
		myApp.rightAnswer();
		countOfcorrect++;
		myApp.colorChangeCorrect();
	// If the wring answer - wrong answer functions run
	} else if (answerCheck === "wrong"){
		console.log("wrong");
		myApp.wrongAnswer();
		myApp.colorChangeWrong();
			    	
	};
	// After answer is checked - the text with correct information appears
	$answerText.removeClass('hidden');
	$('.count').text(countOfcorrect);

	};

// Function for showing results after button Show results is clicked
myApp.showResult = () => { 
	$('.results').on('click',function(){
		console.log("button works");
  	 	if (countOfcorrect >= 6){
  	 		console.log('more than 6')
  	 		$('.result1').removeClass('hidden');
  	 	} else if (countOfcorrect >= 3) {
  	 		console.log('more than 3')
  	 		$('.result2').removeClass('hidden');
  	 	} else if(countOfcorrect >= 0){
  	 		console.log('more than 0')
  	 		$('.result3').removeClass('hidden');
  	 	}

});
};

myApp.init = () => {
	// Functions run for each of flashcards
  	$('.quiz1').on('submit', function(e) {
  		e.preventDefault();
	    $clickedForm = $('.quiz1');
		answerCheck = $('.input1:checked').val();
		$answer = $('.input1:checked ~ label');
		$answerText = $('.text1');
	    formAction();
			    
	});

  	$('.quiz2').on('submit', function(e) {
  		e.preventDefault();
		$clickedForm = $('.quiz2');
		answerCheck = $('.input2:checked').val();
		$answer = $('.input2:checked ~ label');
		$answerText = $('.text2');
		formAction();

  	});
  	$('.quiz3').on('submit', function(e) {
  		e.preventDefault();
		$clickedForm = $('.quiz3');
		answerCheck = $('.input3:checked').val();
		$answer = $('.input3:checked ~ label');
		$answerText = $('.text3');
		formAction();

  	});
  	$('.quiz4').on('submit', function(e) {
  		e.preventDefault();
		$clickedForm = $('.quiz4');
		answerCheck = $('.input4:checked').val();
		$answer = $('.input4:checked ~ label');
		$answerText = $('.text4');
		formAction();

  	});
  	$('.quiz5').on('submit', function(e) {
  		e.preventDefault();
		$clickedForm = $('.quiz5');
		answerCheck = $('.input5:checked').val();
		$answer = $('.input5:checked ~ label');
		$answerText = $('.text5');
		formAction();

  	});
  	$('.quiz6').on('submit', function(e) {
  		e.preventDefault();
		$clickedForm = $('.quiz6');
		answerCheck = $('.input6:checked').val();
		$answer = $('.input6:checked ~ label');
		$answerText = $('.text6');
		formAction();

  	});
  	$('.quiz7').on('submit', function(e) {
  		e.preventDefault();
		$clickedForm = $('.quiz7');
		answerCheck = $('.input7:checked').val();
		$answer = $('.input7:checked ~ label');
		$answerText = $('.text7');
		formAction();

  	});
  	$('.quiz8').on('submit', function(e) {
  		e.preventDefault();
		$clickedForm = $('.quiz8');
		answerCheck = $('.input8:checked').val();
		$answer = $('.input8:checked ~ label');
		$answerText = $('.text8');
		formAction();

  	});
  	// Function for showing results run
  	myApp.showResult();
};
  			 
    
$(function(){
  myApp.init();
});