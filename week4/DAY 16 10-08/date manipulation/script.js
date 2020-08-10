let body = document.body;
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
body.appendChild(wrapper);
// form....................................
let form = document.createElement("form");

let label = document.createElement("label");
label.setAttribute("for","dob");
label.innerText = "Enter Date of Birth";

let inp = document.createElement('input');
inp.setAttribute("type","date");
inp.setAttribute("name","dob");
inp.setAttribute("id","inp");
inp.setAttribute("required",true);

let submit = document.createElement("input");
submit.setAttribute("type","submit");
submit.setAttribute("id","submit");

form.appendChild(label);
form.appendChild(inp);
form.appendChild(submit);
wrapper.appendChild(form);
///DISPLAY...................................
let display = document.createElement("div");

let arr = [];
let h3Text = {
    0: "Day Count",
    1: "Year Difference",
    2: "Month Difference:",
    3: "Minutes Difference:",
    4: "Seconds Difference:",
    5: "Milliseconds Difference:"
}

for(let i=0;i<6;i++){
    let data = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerText = h3Text[i];
    let p = document.createElement("p");
    p.classList.add(`${i}`);
    p.innerText = "Answer: ";
    data.appendChild(h3);
    data.appendChild(p);
    display.appendChild(data);
}

wrapper.appendChild(display);

//-----------------------------------------

form.addEventListener('submit',function(e){
    e.preventDefault();
    let date = new Date(inp.value);
    let d = new Date();

    let ans = {};

    let yearCount = d.getFullYear() - date.getFullYear();
    let monthCount = yearCount*12 + (d.getMonth()-date.getMonth());
    let milCount = d-date;
    let secCount = Math.floor(milCount/1000);
    let minCount = Math.floor(secCount/60);
    let hourCount = Math.floor(minCount/60);
    let dayCount = Math.floor(hourCount/24);

    let pList = document.querySelectorAll('p');
    pList.forEach((p,indx) => {
        switch(indx){
            case 0: p.innerText += dayCount;
                    break;
            case 1: p.innerText += yearCount;
                    break;
            case 2: p.innerText += monthCount;
                    break;
            case 3: p.innerText += minCount;
                    break;
            case 4: p.innerText += secCount;
                    break;
            case 5: p.innerText += milCount;
                    break;
            default: break;
        }
        
    });
})

