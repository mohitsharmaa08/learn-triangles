const quizForm = document.getElementById("quiz-form");
const message = document.getElementById("message");

const answers = ["90","right angled","scalene", "both","180"];

function updateMessage(msg){
    message.innerText = msg;
}

function checkAnswers(values){
    let score = 0;
    console.log({values});
    answers.forEach( ans => {
            if(values.includes(ans)){
                score += 50;
            }else{
                score  -=50;
            }
    });

    updateMessage(`Your score is: ${score}`);
}

function onFormSubmit(event){
    updateMessage("");
    let data = new FormData(quizForm);
    let isAnswered1 = data.has('question1');
    let isAnswered2 = data.has('question2');
    let isAnswered3 = data.has('question3');
    let isAnswered4 = data.has('question4');
    let isAnswered5 = data.has('question5');

    console.log(data.has('question1'),data.has('question2'));

    if(isAnswered1 && isAnswered2 && isAnswered3 && isAnswered4 && isAnswered5){
        checkAnswers([...data.values()]);
    }else{
        updateMessage("Answers all quesitons...");        
    }
}

quizForm.addEventListener("submit",onFormSubmit);