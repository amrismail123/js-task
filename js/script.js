var allProducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#addtocart")
var show = document.querySelector(".show")
var totalPrice = 0 ;
allProducts.forEach( function (item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += item.textContent + " , ";
        if (content.innerHTML != "" ){
            btn.style.display = "block";
            btn.style.color = "black"
            
        }
    }
})
btn.onclick = function (){
    show.innerHTML="total: "+ totalPrice;
}
