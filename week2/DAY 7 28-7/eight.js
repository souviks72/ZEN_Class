var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
]
   function chksecurityQuestions(securityQuestions,question,ans) {
    let flag = 0;
    securityQuestions.forEach(q=>{
        if(q.question === question){
            if(q.expectedAnswer === ans){
                flag = 1;
                break;
            }else{
                break;
            }
        }
    });
    if(flag === 1)
        return true;
    else
        return false; 
   }
   //Test case1:
   var ques = 'What was your first pet’s name?';
   var ans  =  'FlufferNutter';
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // true