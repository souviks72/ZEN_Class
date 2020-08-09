// let body = document.createElement("div");

// let wrapper = document.createElement("div");
// wrapper.classList.add("wrapper");
// body.appendChild(wrapper);

// let h3Tag = document.createElement("h3");
// wrapper.appendChild(h3Tag);

// let buttons = document.createElement("div");
// buttons.classList.add("buttons");
// wrapper.appendChild(buttons);

// let btn7 = document.createElement("button");
// btn7.innerText = 7;
// let btn8 = document.createElement("button");
// btn8.innerText = 8;
// let btn9 = document.createElement("button");
// btn9.innerText = 9;
// let btnD = document.createElement("button");
// btnD.innerText = '/';
// let btnAr = [btn7,btn8,btn9,btnD];
// buttons.append(btnAr);

// let btn4 = document.createElement("button");
// btn4.innerText = 4;
// let btn5 = document.createElement("button");
// btn5.innerText = 5;
// let btn6 = document.createElement("button");
// btn6.innerText = 6;
// let btnM = document.createElement("button");
// btnM.innerText = '*';
// btnAr = [btn4,btn5,btn6,btnM];
// buttons.append(btnAr);

// let btn1 = document.createElement("button");
// btn1.innerText = 1;
// let btn2 = document.createElement("button");
// btn2.innerText = 2;
// let btn3 = document.createElement("button");
// btn3.innerText = 3;
// let btnA = document.createElement("button");
// btnA.innerText = '+';
// btnAr = [btn1,btn2,btn3,btnA];
// buttons.append(btnAr);

// let btnZ = document.createElement("button");
// btnZ.innerText = 0;
// let btnC = document.createElement("button");
// btnC.innerText = 'C';
// let btnE = document.createElement("button");
// btnE.innerText = '=';
// let btnS = document.createElement("button");
// btnS.innerText = '-';
// btnAr = [btnZ,btnC,btnE,btnS];
// buttons.append(btnAr);

//-----------------------------------------------
let str = "";
let h3 = document.querySelector("h3");
let btns = document.querySelector(".buttons");
btns.addEventListener('click',function(e){
    let val = e.srcElement.innerText;
    str+=val;
    if(val=="C"){
        str="";
        h3.innerText="";
    }else if(val=='='){
        let oprnd = "",lhs="",rhs="",flag=0;
        for(let i=0;i<str.length-1;i++){
            let ch = str.charAt(i);
            if(ch=='+'||ch=='-'||ch=='*'||ch=='/'){
                flag = 1;
                oprnd = ch;
            }else{
                if(flag===0)
                    lhs+=ch;
                else
                    rhs+=ch;  
            }
                      
        }
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        let ans = 0;
        if(oprnd=='+'){
            ans = lhs + rhs;
        }
         if(oprnd=='-'){
            ans = lhs - rhs;
        }
        else if(oprnd=='*'){
            ans = lhs * rhs;
        }
        else if(oprnd=='/'){
            ans = lhs / rhs;
        }
        h3.innerText = ans;
        str="";
    }else{
        h3.innerText = str;
    }
});