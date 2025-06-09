
let quant =document.getElementsByClassName("Quant");

let price =document.getElementsByClassName("price");

let finalPrice =document.getElementById("finalPrice");

let heart =document.querySelectorAll("i");

let del =document.querySelectorAll(".delete")

let list={
    0:1379.0,
    1:176.0,
    2:249.0}


// update counter
for(let i=0;i<quant.length;i++){
    //increment btn
    var finalprice = 1804;
    quant[i].nextElementSibling.addEventListener("click",function(){
        quant[i].value++;
        updatePrice(quant[i].value,i,finalprice);
    })
    //decrement btn
    quant[i].previousElementSibling.addEventListener("click",function(){
        if( quant[i].value > 1){
            quant[i].value--;
        }
        updatePrice(quant[i].value,i,finalprice);
    })

    //heart update
    heart[i].parentElement.addEventListener('click',function () {
        if(heart[i].style.color=="red"){
            heart[i].style.color="black";
        }else{
            heart[i].style.color="red";
        }
    })

    //delete item
    del[i].addEventListener('click',function(){
        del[i].parentNode.remove();
    })
    
}

// update price function
function updatePrice(q,i,finalprice) {
    let p=list[i];
    price[i].innerHTML=p*parseInt(q);
    price[i].innerHTML=p*parseInt(quant[i].value);
    finalprice += p*parseInt(quant[i].value);
    finalPrice.value=finalprice;
}



