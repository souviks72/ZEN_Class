let body = document.body;
let wrapper = document.createElement('div');
wrapper.classList.add("wrapper");
body.appendChild(wrapper);

let form = document.createElement("form");
wrapper.appendChild(form);

let attr = {
    0:{
        "label": "First Name",
        "name": "fname"
    },
    1:{
        "label": "Last Name",
        "name": "lname"
    },
    2:{
        "label": "Address",
        "name": "address"
    },
    3:{
        "label": "State",
        "name": "state"
    },
    4:{
        "label": "Country",
        "name": "country"
    }
}

for(let i=0;i<5;i++){
    let div = document.createElement("div");
    div.classList.add("ip");

    let label = document.createElement("label");
    label.innerText = attr[i]["label"];
    label.setAttribute("name",attr[i]["label"]);
    div.appendChild(label);

    let ip = document.createElement("input");
    ip.setAttribute("type","text");
    ip.setAttribute("required",true);
    ip.setAttribute("placeholder",attr[i]["label"]);
    ip.setAttribute("name",attr[i]["name"]);
    ip.setAttribute("id",attr[i]["name"]);
    div.appendChild(ip);

    form.appendChild(div);
}

let gender = `<div class="ip">Gender
<div>
    <label for="female">Female</label>
    <input type="radio" name="gender" id="female" value="Female" required>
</div>
<div>
    <label for="male">Male</label>
    <input type="radio" name="gender" id="male" value="Male" required>
</div></div>`;

form.innerHTML += gender;

let ipF = document.createElement("div");
ipF.classList.add("ip-food");
ipF.innerText = "Choice of Food(min 2 required)";

form.append(ipF);

let food = {
    0:{
        "label": "Choice 1",
        "name": "f1"
    },
    1:{
        "label": "Choice 2",
        "name": "f2"
    },
    2:{
        "label": "Choice 3",
        "name": "f3"
    },
    3:{
        "label": "Choice 4",
        "name": "f4"
    },
    4:{
        "label": "Choice 5",
        "name": "f5"
    }
}

for(let i=0;i<5;i++){
    let label = document.createElement("label");
    label.innerText = food[i]["label"];
    label.setAttribute("name",food[i]["label"]);
    ipF.appendChild(label);

    let ip = document.createElement("input");
    ip.setAttribute("type","text");
    if(i<2)
        ip.setAttribute("required",true);
    ip.setAttribute("placeholder",food[i]["label"]);
    ip.setAttribute("name",food[i]["name"]);
    ip.setAttribute("id",food[i]["name"]);
    ipF.appendChild(ip);
}

form.innerHTML += `<input type="submit">`;

//---------------------------------------------------------
let table = document.createElement("table");
let th = document.createElement("th");
th.innerHTML = `<td>Form Data</td>`;
table.appendChild(th);

form.addEventListener('submit',function(e){
    e.preventDefault();
    let arr = [];
    for(let i=0;i<5;i++){
        let v = document.getElementById(attr[i]["name"]).value;
        arr.push(v);
    }
    let female = document.getElementById("female");
    let male = document.getElementById("male");

    let gender = female.checked? female.value : male.value;
    console.log(gender);
    console.log(arr);

    let arrF = [];
    for(let i=0;i<5;i++){
        let v = document.getElementById(food[i]["name"]).value;
        if(v.length!==0)
            arrF.push(v);
    }
    console.log(arrF);

    for(let i=0;i<5;i++){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        
        td1.innerText = attr[i]["label"];
        td2.innerText = arr[i];

        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
    table.innerHTML += `<tr><td>Choice of Food</td></tr>`;

    for(let i=0;i<arrF.length;i++){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.innerText = food[i]["label"];
        td2.innerText = arrF[i];

        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
    form.style.display = "none";
    wrapper.appendChild(table);
});









