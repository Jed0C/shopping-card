
let list={
    'q1':1379.0,
    'q2':176.0,
    'q3':249.0}

// update counter
document.querySelectorAll('.Item').forEach(item =>{
    let quant =item.querySelectorAll('.Quant');
    let price =item.querySelectorAll(".price");
    let minus =item.querySelectorAll('.minus-btn');
    let plus =item.querySelectorAll('.plus-btn');
    let heart =item.querySelectorAll(".like");
    let del =item.querySelectorAll(".delete");
    let finalPrice =document.getElementById("finalPrice");

    let i=1;
    //updatePrice function
    function updatePrice(){
        price[0].innerHTML=parseFloat(item.querySelectorAll('.Quant')[0].value)*list[quant[0].getAttribute("id")];
        console.log(price[0].innerHTML);
        updateTotal();
    }
    //increment btn
    plus[0].addEventListener('click',()=>{
        i++;
        quant[0].value=i;
        updatePrice();
    })
    //decrement btn
    minus[0].addEventListener("click",function(){
        if( i > 1){
            i--;
            quant[0].value = i;
        }
        updatePrice();
    })
    //heart update
    heart[0].addEventListener('click',function () {
        if(heart[0].childNodes[0].style.color=="red"){
            heart[0].childNodes[0].style.color="black";
        }else{
            heart[0].childNodes[0].style.color="red";
        }
    })
    //delete item
    del[0].addEventListener('click',function(){
        del[0].parentNode.remove();
        updateTotal();
    })
    
    updateTotal();
})

function updateTotal() {
    let total = 0;
    document.querySelectorAll('.Item').forEach(item =>{
        let price = parseInt(item.querySelectorAll('.price')[0].innerHTML);
        let quantity = parseFloat(item.querySelectorAll('.Quant')[0].value);
        total+= price* quantity;
    })
    
    finalPrice.value = total.toFixed(2);
}