  const quizDB = [
  {
    question: "Q1:Which JavaScript method is used to write HTML output?",
    a: "document.write()",
    b: "document.output()",
    c: "console.log()",
    d: "document.writeHTML()",
    ans : "ans1"
},
{
question: "Q2: JavaScript is the programming language of the ",

a: "Desktop",
b: "Mobile",
c: "Web",
d: "Server",
ans : "ans3"
},
{
    question: "Q3: Which type of JavaScript language is _____?",
    a: "Object-oriented",
    b: "Object-based",
    c: "Functional programming",
    d: "All of the above",
    ans : "ans2"
},
{
    question: "Q4: In which HTML element, we put the JavaScript code?",
    a: "<javascript>...</javascript>",
    b: "<js>...</js>",
    c: "<script>...</script>",
    d: "<css>...</css>",
    ans : "ans3"
},
{
    question: "Q5:Which JavaScript method is used to write into an alert box?", 
    a: "window.alertHTML()",
    b: "window.alert()",
    c: "window.alertContent()",
    d: "window.alertBox()",
    ans: "ans2"
}
  ];
  const question = document.querySelector('.question');
  const option1 = document.querySelector('#option1');
  const option2 = document.querySelector('#option2');
  const option3 = document.querySelector('#option3');
  const option4 = document.querySelector('#option4');
  const submit = document.querySelector('#submit');
  const answers = document.querySelectorAll('.answer');

  const showscore = document.querySelector('#showscore');

  let questionCount = 0;
  let score = 0;
   const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
   }

  loadQuestion();

    const getCheckeAnswer = ()=>{
        let answer;
        answers.forEach((curAnsElem) => {
            if(curAnsElem.checked){
                answer = curAnsElem.id;
            }
            
        });
        return answer;
    };
    const deselectAll = () => {
        answers.forEach((curAnsElem) => curAnsElem.checked = false);

    }
 

  submit.addEventListener('click',() => {
    const checkedAnswer = getCheckeAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

   deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    } 
    else{

        showscore.innerHTML = `<h3>you Scored ${score}/${quizDB.length} </h3>  
          <button class="btn" onclick="location.reload()"> Play again</button>`;
    
          showscore.classList.remove('showarea');
    }

   
  });




