const quizDb = [
    {
        question: "Q.1 Which country operationalized world’s largest radio telescope?",
        a: "USA",
        b: "CHINA",
        c: "RUSSIA",
        d: "INDIA",
        ans: "ans4"
    }, {
        question: "Q.2 Which of the following is the capital of Arunachal Pradesh?",
        a: "Itanagar",
        b: " Dispur",
        c: "Imphal",
        d: "Panaji",
        ans: "ans1"
    }, {
        question: "Q.3 Which one among the following radiations carries maximum energy?",
        a: "Ultraviolet rays",
        b: "Gamma rays",
        c: "X-rays",
        d: "Infra-red rays",
        ans: "ans2"
    }, {
        question: "Q.4 What is India’s rank on EIU’s Global Democracy Index 2019?",
        a: "48th Rank",
        b: "50th Rank",
        c: "53rd Rank",
        d: "51st Rank",
        ans: "ans4"
    }
];



const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore =document.querySelector('#showScore');

let questionCount = 0;
let score=0;


//for taking data from array to question
const loadQuestion = () => {

    const quesList = quizDb[questionCount];
    question.innerHTML = quesList.question;

    option1.innerHTML = quesList.a;
    option2.innerHTML = quesList.b;
    option3.innerHTML = quesList.c;
    option4.innerHTML = quesList.d;
}
loadQuestion();

//for checking and returning if for ans choosen.
 const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

//deselecting the options
const deselectAll=()=>{
    answers.forEach((elem)=>elem.checked=false);
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer=== quizDb[questionCount].ans){
        score++;
    };
        questionCount++;
    
        deselectAll();
    if(questionCount<quizDb.length){
        loadQuestion();
    }
    else{
         showScore.innerHTML=`
         <h3>You Score ${score}/${quizDb.length}</h3>
         <button  class="btn" onClick="location.reload()">Play Again</button>
         `;

         showScore.classList.remove('scoreArea');
    }

});


