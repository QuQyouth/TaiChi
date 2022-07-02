let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let n = 0;
let string = `/*hello,各位好!
*让我们来画个太极图吧！
*看好喽
*准备一个div
**/
#TaiChi{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*然后把它变成一个圆*/
#TaiChi{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*一黑一白*/
#TaiChi{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*阴阳彼此消长互动，阴长则阳消，阳长则阴消,阳极生阴，阴极生阳*/
#TaiChi::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    border-radius:50%;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
#TaiChi::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

`;
let newString = ``;
let step = ()=>{
    setTimeout(()=>{
        // 开始时newString为空 
        // 当string第n个字符为回车时，将 \n 写入 newString
        if (string[n] === "\n") newString += "<br>";
        else if (string[n] === " ") newString += "&nbsp;";
        else // 当string第n个字符不为回车时，将第n个字符 写入 newString
        newString += string[n];
        demo.innerHTML = newString;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        demo.scrollTo(0, 99999);
        if (n < string.length - 1) {
            step();
            n++;
        }
    }, 0);
};
step();

//# sourceMappingURL=index.f3c84f99.js.map
