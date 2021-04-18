var discount = document.getElementById("discount");
var billingDiscount = document.querySelectorAll("billing__discount");
var w = window.innerWidth;
//this is for the discount part (25% discount)
if (w < 501){
    if(discount.innerHTML != "25%"){
     discount.innerHTML = "25%";
    }
}

window.addEventListener("resize", function(event) {
    var w = window.innerWidth;
   if (w < 501){
       if(discount.innerHTML != "25%"){
        discount.innerHTML = "25%";
       }
       
   }
   else if( w > 500){
    if(discount.innerHTML == "25%"){
        discount.innerHTML = "25% discount";
       }
   }
})

//this is for the toggle button
var toggle = document.getElementById("toggle");
//this is for the slider
//range
var range = document.getElementById("myRange");

    //price
var price = document.getElementById("price");
    //time
var time = document.getElementById("time");
    //page views
var pageViews = document.getElementById("pageViews");

function componentFunction(){
    var rValue = range.value;
    //setting the percentage for the background
    var multi = range.value * 25;
    //changing the background
    var color = 'linear-gradient(to right, hsl(174, 77%, 80%) ' + multi + '%, hsl(224, 65%, 95%) ' + multi + '%)';
    range.style.background = color;
    console.log(rValue);
    if(toggle.checked == false){
        time.innerHTML = "/month";
        if(rValue == 0){
            price.innerHTML = "$8.00";
            pageViews.innerHTML = "10K pageviews";
        }
        else if(rValue == 1){
            price.innerHTML = "$12.00";
            pageViews.innerHTML = "50K pageviews";
        }
        else if(rValue == 2){
            price.innerHTML = "$16.00";
            pageViews.innerHTML = "100K pageviews";
        }
        else if(rValue == 3){
            price.innerHTML = "$24.00";
            pageViews.innerHTML = "500k pageviews";
        }
        else if(rValue == 4){
            price.innerHTML = "$36.00";
            pageViews.innerHTML = "1M pageviews";
        }
    }
    else {
        time.innerHTML = "/year";
        if(rValue == 0){
            var priceValue =  8*12 - (8 * 12)*0.25;
            price.innerHTML = "$" + priceValue + ".00" ;
            pageViews.innerHTML = "10K pageviews";
        }
        else if(rValue == 1){
            var priceValue =  12*12 - (12 * 12)*0.25;
            price.innerHTML = "$" + priceValue + ".00" ;
            pageViews.innerHTML = "50K pageviews";
        }
        else if(rValue == 2){
            var priceValue =  16*12 - (16 * 12)*0.25;
            price.innerHTML = "$" + priceValue + ".00" ;
            pageViews.innerHTML = "100K pageviews";
        }
        else if(rValue == 3){
            var priceValue =  24*12 - (24 * 12)*0.25;
            price.innerHTML = "$" + priceValue + ".00" ;
            pageViews.innerHTML = "500k pageviews";
        }
        else if(rValue == 4){
            var priceValue =  36*12 - (36 * 12)*0.25;
            price.innerHTML = "$" + priceValue + ".00" ;
            pageViews.innerHTML = "1M pageviews";
        }
    }
}
range.addEventListener('input', function(){
    componentFunction();
})

toggle.addEventListener('input', function(){
    componentFunction();
})