let z=0,pts=0;

let body = document.body;
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);
//---------------------------------------------------------
let containerMain = document.createElement("div");
containerMain.classList.add("container-fluid");
container.appendChild(containerMain);

let playQuiz = document.createElement("h1");
playQuiz.innerText = "Quick Quiz";
playQuiz.classList.add("h1");
containerMain.appendChild(playQuiz);

let playBtn = document.createElement("button");
//playBtn.setAttribute("href","game.html");
playBtn.innerText = "Play";
playBtn.classList.add(`btn`);
playBtn.classList.add('btn-primary');
playBtn.classList.add('btn-1');
containerMain.appendChild(playBtn);

let scoreBtn = document.createElement("button");
//scoreBtn.setAttribute("href","score.html");
scoreBtn.innerHTML = "High Scores"
scoreBtn.classList.add("btn");
scoreBtn.classList.add("btn-primary");
scoreBtn.classList.add("btn-1");
containerMain.appendChild(scoreBtn);

//----------------------------------------------------------------
playBtn.addEventListener('click',async function(e){
    containerMain.style.display = "none";
    try{
        let {results} = await(await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')).json();
        let quiz = [];
        results.forEach(res =>{
            let obj = {};
            obj.q = res.question;
            obj.ans = res.correct_answer;
            let inc = res.incorrect_answers;
            let mcq = {};
            mcq[Math.floor(Math.random()*4)] = obj.ans;
            let j=0;
            for(let i=0;i<4;i++){
                if(i in mcq)
                    continue;
                else
                    mcq[i] = inc[j++];
            }
            obj.options = mcq;
            quiz.push(obj);
        });
        
        let containerGame = document.createElement("div");
        containerGame.classList.add("container-fluid");
        container.appendChild(containerGame);

        let gRow1 = document.createElement("div");
        gRow1.classList.add("row");
        gRow1.classList.add('row1');
        containerGame.appendChild(gRow1);
        //QUESTION NUMBER
        let qDiv = document.createElement("div");
        qDiv.classList.add("qDiv");
        let p = document.createElement("p");
        p.setAttribute("id","progressText");
        p.innerHTML = `Question 1/10`;
        qDiv.appendChild(p);
        gRow1.appendChild(qDiv);
        //QUESTION NUMBER PROGRESS BAR
        let qRange = document.createElement("input");
        qDiv.appendChild(qRange);
        qRange.setAttribute("type","range");
        qRange.setAttribute("min",0);
        qRange.setAttribute("max",10);
        qRange.setAttribute("value",1);
        qRange.disabled = true;
        //SCORE CARD
        let scoreDiv = document.createElement("div");
        scoreDiv.classList.add('scoreDiv');
        let sc = document.createElement("p");
        sc.innerText = 'Score';
        scoreDiv.appendChild(sc);
        let score = document.createElement("p");
        score.innerText = 0;
        scoreDiv.appendChild(score);
        gRow1.appendChild(scoreDiv);
        

        //QEUSTIONS CONTAINER
        let containerQ = document.createElement("div");
        containerQ.classList.add("containerQ");
        containerGame.appendChild(containerQ);
        // //QUESTIONS
        
        let questions = [];
        for(let j=0;j<10;j++){
            questions.push(qGen(quiz[j]));
        }    
        i = startGame(0,0,quiz,questions,containerQ,score,qRange,p);
        if(z==10){
            containerGame.style.display = "none";
            let scoreBoard = document.createElement("div");
            scoreBoard.innerHTML = `<h1>Score: ${pts}</h1>`;
            container.appendChild(scoreBoard);
        }
        
    }catch(err){
        console.log(err);
        alert("There was some error");
        location.reload();
    }
    

});

function startGame(i,points,quiz,questions,parent,score,qRange,p){
    if(i==10){
        z=i;
        pts=points;
        return;
    }
        
    parent.appendChild(questions[i]);
    qRange.value=i+1;
    p.innerHTML = `Question ${i+1}/10`;
    let choices = Array.from(document.getElementsByClassName('option'));
    choices.forEach(choice=>{
        choice.addEventListener('click',function(e){
            if(e.target.lastChild.innerText == quiz[i].ans){
                points +=10;   
                score.innerText = points;             
                console.log(points);
            }else{
                console.log("wrong",quiz[i].ans);
            }
            parent.removeChild(questions[i]);
            startGame(i+1,points,quiz,questions,parent,score,qRange,p);
        });
    })
}

function qGen(obj){
    let question = document.createElement("div");
    
    let q = document.createElement("p");
    let abcd = ["A","B","C","D"];
    q.innerText  = obj.q;
    question.appendChild(q);
    for(i in obj.options){
        let opt = document.createElement("div");
        opt.classList.add("option");
        let optBtn = document.createElement("button");
        optBtn.classList.add("btn-primary");
        optBtn.classList.add("btn");
        optBtn.classList.add("optBtn");
        optBtn.innerText = abcd[i];
        optBtn.disabled = true;
        opt.appendChild(optBtn);

        let mcq = document.createElement("p");
        mcq.classList.add("mcq");
        mcq.innerText = obj.options[i];
        opt.appendChild(mcq);
        question.appendChild(opt);
    }
    
    return question;
}