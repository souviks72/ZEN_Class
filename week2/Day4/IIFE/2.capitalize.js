(function(s){
    let arr = s.split(' ');
    let ar2 = arr.map(a => a.charAt(0).toUpperCase()+a.substring(1));
    s = ar2.join(' ');
    console.log(s);
})("hello world i am a geek");