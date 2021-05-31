
function getData()
{
     let price =document.querySelector("#amount").value;
     let rate =document.querySelector("#roi").value;
     let timeperiod =document.querySelector("#time").value;
     return [price,rate,timeperiod]
     
}
function currencycomma(x)
{
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
       { lastThree = ',' + lastThree;}
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res
}
function calculation()
{

    let x=getData();
    let price =x[0];
    let rate=x[1];
    let time=x[2];
    let i= rate/1200;
    let n= time *12;
    let future_val = price * (     ( Math.pow( 1 + i,n ) -1 ) / i      ) * ( i + 1 );
    future_val = Math.round(future_val);
    let invested= price * n;
    let returns = future_val - invested;

    document.querySelector("#invested_value").value=invested;
    document.querySelector("#estm_returns").value=returns;
    document.querySelector("#total_returns").value=future_val;
 
    document.querySelector("#invested_value").innerHTML=currencycomma(invested);
    document.querySelector("#estm_returns").innerHTML=currencycomma(returns);
    document.querySelector("#total_returns").innerHTML=currencycomma(future_val);
}


function PriceValueSlider()
{
    var slider = document.getElementById("myRange");
    var output = document.getElementById("amount");
    output.value=slider.value;
    calculation();

}

function PriceValueInput()
{
    var textboxinput=document.getElementById("amount");

    if(textboxinput.value > 200000 )
    {
        textboxinput.value = 200000;
    }
    if(textboxinput.value <= -1)
    {
        textboxinput.value = 500;
    }
    if (typeof textboxinput.value === 'string' || textboxinput.value instanceof String)
    {
        textboxinput.value == 500;
    }
    var slider = document.getElementById("myRange");
    slider.value=textboxinput.value;
    
    calculation();
}

function RateValueSlider()
{
    var slider = document.getElementById("myRangeRate");
    var textboxinput = document.getElementById("roi");
    textboxinput.value=slider.value;
    calculation();

}

function RateValueInput()
{
    var textboxinput=document.getElementById("roi");
    if(textboxinput.value > 30 )
    {
        textboxinput.value = 30;
    }
    if(textboxinput.value <= -1)
    {
        textboxinput.value = 10;
    }
    var slider = document.getElementById("myRangeRate");
    slider.value=textboxinput.value;
    calculation();
}
function TimeValueSlider()
{
    var slider = document.getElementById("myRangeTime");
    var textboxinput = document.getElementById("time");
    textboxinput.value=slider.value;
    calculation();

}

function TimeValueInput()
{
    var textboxinput=document.getElementById("time");
    if(textboxinput.value > 30 )
    {
        textboxinput.value = 30;
    }
    if(textboxinput.value <= -1)
    {
        textboxinput.value = 3;
    }
    var slider = document.getElementById("myRangeTime");
    slider.value=textboxinput.value;
    calculation();
}
