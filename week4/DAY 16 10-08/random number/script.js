let body = document.body;
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

let btn = document.createElement("button");
btn.innerText = "Generate";
let h3 = document.createElement("h3");
wrapper.appendChild(btn);
wrapper.appendChild(h3);
body.appendChild(wrapper);
var st = "";

btn.addEventListener('click',function(){
    fun("h");
    h3.innerText = st;
})



function fun(s){
    if(s.length===9){
        st = s;
        st = st.substring(1);
        return;
    }
    
    let x = Math.floor(Math.random()*10)
    if(s.indexOf(x)===-1){
        s+=x;
        if(x===0 && s.length===1)
            s="";
    }
        
    fun(s);
}

fun("h");
console.log(st.substring(1));