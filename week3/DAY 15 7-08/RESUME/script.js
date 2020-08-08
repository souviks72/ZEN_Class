let body = document.body;

let wrapper = document.createElement("div");
wrapper.classList.add('wrapper');
body.appendChild(wrapper);

let header = document.createElement("div");
header.classList.add('header');
let imgDiv = document.createElement("div");
imgDiv.classList.add("img");
let img = document.createElement("img");
img.setAttribute("src","images/profile.jpg");
imgDiv.appendChild(img);
let name = document.createElement("div");
name.classList.add("name");
let nameH1 = document.createElement("h1");
nameH1.innerText = "Net Ninja";
name.appendChild(nameH1);
header.appendChild(imgDiv);
header.appendChild(name);
wrapper.appendChild(header);


let contact = document.createElement("div");
contact.classList.add("contact");
contact.innerText = "N. Damen Avenue CHicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com";
wrapper.appendChild(contact);

let main = document.createElement("div");
main.classList.add("main");
wrapper.appendChild(main);

let left = document.createElement("div");
left.classList.add("left");
main.appendChild(left);

//profile
let profile = document.createElement("div");
profile.classList.add("profile");
left.appendChild(profile);

let head = document.createElement("div");
head.classList.add("head");
profile.appendChild(head);

let icon = document.createElement("div");
icon.classList.add("icon");
let img2 = document.createElement("img");
img2.setAttribute("src","images/profile-icon.png");
icon.appendChild(img2);
let heading = document.createElement("div");
heading.classList.add("heading");
let sub1 = document.createElement("h3");
sub1.innerText="Profile";
heading.appendChild(sub1);
head.appendChild(icon);
head.appendChild(heading);

let data = document.createElement("div");
let pData = document.createElement("p");
pData.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor maxime reiciendis saepe, laborum nihil dolorem explicabo quod quasi, facere amet nobis necessitatibus. Culpa voluptatem consequuntur vel hic, officia fuga cupiditate?";
data.appendChild(pData);
profile.appendChild(data);

//SKILLS SECTION

let skillProfile = document.createElement("div");
skillProfile.classList.add("skill-profile");

let head2 = document.createElement("div");
head2.classList.add("head");

let icon2 = document.createElement("div");
icon2.classList.add("icon");
let img3 = document.createElement("img");
img3.setAttribute("src","images/skills.jpg");
icon2.appendChild(img3);

let heading2 = document.createElement("div");
let h3Heading2 = document.createElement("h3");
h3Heading2.innerText="Skills"

heading2.appendChild(h3Heading2);
head2.appendChild(icon2);
head2.appendChild(h3Heading2);

skillProfile.appendChild(head2);

let technical = document.createElement("div");
technical.classList.add("technical");

technical.innerHTML = `<h4>Technical Skills</h4>
<div class="skills">
    <div class="skill-group">
        <label >Javascript</label>
        <input type="range" min=0 max="10" value="8">
    </div>
    <div class="skill-group">
        <label>HTML</label>
        <input type="range" min=0 max="10" value="7">
    </div>
    <div class="skill-group">
        <label>CSS</label>
        <input type="range" min=0 max="10" value="7">
    </div>  
</div>`;

skillProfile.appendChild(technical);

let additional = document.createElement("div");
additional.classList.add("additional");

additional.innerHTML = `<div class="additional">
<h4>Additional Skills</h4>
<div class="skills">                           
    <div class="skill-group">
        <label>Product Management</label>
        <input type="range" min=0 max="10" value="7">
    </div>
    <div class="skill-group">
        <label>Fund Raising</label>
        <input type="range" min=0 max="10" value="7">
    </div>
    <div class="skill-group">
        <label>Recruitment</label>
        <input type="range" min=0 max="10" value="7">
    </div>
    <div class="skill-group">
        <label>Sales</label>
        <input type="range" min=0 max="10" value="7">
    </div>
    
</div>
</div>`;
skillProfile.appendChild(additional);
left.appendChild(skillProfile);

//right side
let right = document.createElement("div");
right.classList.add("right");
main.appendChild(right);

let workProfile = document.createElement("div");
workProfile.classList.add("profile")
let workHead = document.createElement("div");
workHead.classList.add("head");
let workIcon = document.createElement("icon")
workIcon.classList.add("icon");
let workHeading = document.createElement("div");
workHeading.classList.add("heading");
workHeading.innerHTML = "<h3>Work Experience</h3>";
workHead.appendChild(workIcon);
workHead.appendChild(workHeading);

workProfile.appendChild(workHead);

let workData = document.createElement("div");
workData.classList.add("data");

let desc = document.createElement("div");
desc.classList.add("desc");
desc.innerHTML = `<div>
<h4>Event Manager</h4>
<h4>C3 Presents Washinton DC</h4>
</div>
<div class="date">
<h4>03/2014 - 02/2017</h4>
</div>
`;

let list = document.createElement("div");
list.classList.add("lsit");
list.innerHTML = `<ul>
<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, error provident aspernatur magnam impedit facere fugit dolore, voluptatem ipsa, quo quisquam quam voluptatum harum architecto nisi sint maiores ullam officiis.</li>
<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, error provident aspernatur magnam impedit facere fugit dolore, voluptatem ipsa, quo quisquam quam voluptatum harum architecto nisi sint maiores ullam officiis.</li>
<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, error provident aspernatur magnam impedit facere fugit dolore, voluptatem ipsa, quo quisquam quam voluptatum harum architecto nisi sint maiores ullam officiis.</li>
</ul>`;
workData.appendChild(desc);
workData.appendChild(list);
workProfile.appendChild(workData);
right.appendChild(workProfile);


//education

workProfile = document.createElement("div");
workProfile.classList.add("profile")
workHead = document.createElement("div");
workHead.classList.add("head");
workIcon = document.createElement("icon")
workIcon.classList.add("icon");
workHeading = document.createElement("div");
workHeading.classList.add("heading");
workHeading.innerHTML = "<h3>Education</h3>";
workHead.appendChild(workIcon);
workHead.appendChild(workHeading);

workProfile.appendChild(workHead);

workData = document.createElement("div");
workData.classList.add("data");

desc = document.createElement("div");
desc.classList.add("desc");
desc.innerHTML = `<div>
<h4>Javascript Developer</h4>
<h4>GUVI</h4>
</div>
<div class="date">
<h4>03/2014 - 02/2017</h4>
</div>
`;

list = document.createElement("div");
list.classList.add("lsit");
list.innerHTML = `<ul>
<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, error provident aspernatur magnam impedit facere fugit dolore, voluptatem ipsa, quo quisquam quam voluptatum harum architecto nisi sint maiores ullam officiis.</li>
<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, error provident aspernatur magnam impedit facere fugit dolore, voluptatem ipsa, quo quisquam quam voluptatum harum architecto nisi sint maiores ullam officiis.</li>
<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, error provident aspernatur magnam impedit facere fugit dolore, voluptatem ipsa, quo quisquam quam voluptatum harum architecto nisi sint maiores ullam officiis.</li>
</ul>`;
workData.appendChild(desc);
workData.appendChild(list);
workProfile.appendChild(workData);
right.appendChild(workProfile);