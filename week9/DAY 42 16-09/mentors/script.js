let studentForm = document.querySelector('#student-form');
let mentorForm = document.querySelector('#mentor-form')
let nameSt = document.querySelector('#name-st');
let emailSt = document.querySelector('#email-st');
let nameMt = document.querySelector('#name-mt');
let emailMt = document.querySelector('#email-mt');

let studentList = document.querySelector('.students-list');
let mentorList = document.querySelector('.mentors-list');
let assigned = document.querySelector('.assigned');

let students = [];
let mentors = [];
let mentee = [];
let assignedStudents = [];
window.addEventListener('load',async (e)=>{
    try{
        const response = await (await fetch('https://mentor-api-zen.herokuapp.com/mentor')).json();
        mentee = [...response];        
        mentee.forEach(mentor=>{
            console.log(mentor)
            let h5 = document.createElement("h5");
            h5.innerText = mentor.name;
            assigned.appendChild(h5);
            let ul = document.createElement("ul");
            if(mentor.students){
                mentor.students.forEach(st=>{
                    let li = document.createElement("li");
                    li.innerText = st.name;
                    assignedStudents.push([st._id,st.name]);
                    ul.appendChild(li);
                });
                
                assigned.appendChild(ul);
            }
            
        })
    }catch(err){
        alert(err);
        console.log(err);
        e.preventDefault();
    }
})

studentForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    let name = nameSt.value;
    let email = emailSt.value;
    let data = {name,email};
    try{
        const response = await fetch('https://mentor-api-zen.herokuapp.com/student', {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
        });
        let student = await response.json();
        console.log(student);
        let li = document.createElement("li");
        li.innerHTML = `${student.name} ${student.email}`;
        studentList.appendChild(li);
    }catch(err){
        alert("Error adding student");
        console.log(err);
    }       
});

mentorForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    let name = nameMt.value;
    let email = emailMt.value;
    console.log(name,email);
    let data = {name,email};
    try{
        const response = await fetch('https://mentor-api-zen.herokuapp.com/mentor', {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
        });
        let mentor = await response.json();
        console.log(mentor);
        let li = document.createElement("li");
        li.innerHTML = `${mentor.name} ${mentor.email}`;
        mentorList.appendChild(li);
    }catch(err){
        alert("Error adding student");
        console.log(err);
    }      
});