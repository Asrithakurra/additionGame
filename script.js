function restart(){
    let a=Math.ceil(Math.random()*100);
    let b=Math.ceil(Math.random()*100);
    document.getElementById("num1").textContent=a;
    document.getElementById("num2").textContent=b;

}
function check(){
    let inpval=document.getElementById("inputValue").value;
    let n1=parseInt(document.getElementById("num1").textContent);
    let n2=parseInt(document.getElementById("num2").textContent);

    if(parseInt(inpval)===(n1+n2)){
        document.getElementById("para").textContent="correct";
        document.getElementById("para").style.backgroundColor="green";
    }
    else{
        document.getElementById("para").textContent="incorrect";
        document.getElementById("para").style.backgroundColor="red";
    }
}