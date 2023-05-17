<script setup>
import navBar from "@/components/navBar.vue"
import footerPage from '@/components/footerPage.vue'
</script>
<template>
     <navBar/>
    <div>
        <div class="top-back">
            <div class="thebackand-arror">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="24" height="24" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_47_891" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_47_891" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA2klEQVR4nO3SMQ7CMBBFwQUOTcvRaDgTJVRIATkQS/EukBnJTQrL+i8RAAAAAAAAAAAAAAAAz07VD9iyU0Tcqh+xVY/xBSgwHV+AZK/jC5CoNb4ASebGFyDBu/EFGOzT+AIMtGR8AQZZOr4AA/SML8DKesd3VvxBjV8YwPiFAYyfGGDfCHBtfCPZMer/lH89IvxKgAgRygNE9EdggJ4IDLI0AgMticBgnyKQ4F0EksxFIFErAsleI1BgGoEijwh0OKx41yUidhFxXvFOAAAAAAAAAAAAAACAr3cH6SbnSh0WURQAAAAASUVORK5CYII="/>
                </defs>
                </svg>
                <p>back</p>
            </div>
            <div class="cartpage-order-2">
                <p>Billing Address</p>
            </div>
        </div>
        <div class="full-paymentpage">
            <form action="" class="fullpayment-form">
                <label for="" class="">Full name</label>
                <input type="text" placeholder="Enter your name here" class="input-paymentpage">
                <label for="">Email</label>
                <input type="text" placeholder="Enter your email here" class="input-paymentpage">
                <label for="">Adress</label>
                <input type="text" placeholder="Enter your address here" class="input-paymentpage">
                <label for="">city</label>
                <input type="text" placeholder="Enter your address here" class="input-paymentpage">
                <label for="">state</label>
                <input type="text" placeholder="Lagos" class="input-paymentpage">
                <label for="">zip code</label>
                
                <input type="text" placeholder="100001" class="short-input-payment">
                <button>proceed to payment</button>
            </form>
        </div>
    </div>
    <footerPage/>
</template>
<style>
.cartpage-order-2{
    /* border:2px solid red; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 10px;
    letter-spacing: 0.03em;
    color: #000000;
}
/* .full-paymentpage{
    border:2px solid red;
} */
.fullpayment-form{
    /* border:2px solid blue; */
    width:50%;
    margin:auto;
}
.fullpayment-form label{
    display:block;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20spx;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #000000;
    margin-top:5%;
}
.input-paymentpage{
    box-sizing: border-box;

/* position: absolute; */
width: 100%;
margin-top:2%;
padding:2% 15px;
/* padding-left:30px; */
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 20px;
outline:none;
letter-spacing: 0.03em;
color: #000000;
border: 1px solid rgba(0, 0, 0, 0.5);
}
.short-input-payment{
    padding:2% 15px;
    display:block;

}
.fullpayment-form button{
    background: #FFA500;
    border: 1px solid rgba(219, 216, 216, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding:15px 40px;
    width: 100%;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-top:10%;
    margin-bottom:30%;
    /* transform: matrix(1, 0, 0, -1, 0, 0); */
}
@media screen and (max-width: 900px){
    .cartpage-order-2{
    /* border:2px solid red; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0.03em;
    color: #000000;
}
/* .full-paymentpage{
    border:2px solid red;
} */
.fullpayment-form{
    /* border:2px solid blue; */
    width:50%;
    margin:auto;
}
.fullpayment-form label{
    display:block;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20spx;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #000000;
    margin-top:5%;
}
.input-paymentpage{
    box-sizing: border-box;

/* position: absolute; */
    width: 100%;
    margin-top:2%;
    padding:2% 15px;
    /* padding-left:15px; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    outline:none;
    letter-spacing: 0.03em;
    color: #000000;
    border: 1px solid rgba(0, 0, 0, 0.5);
}
.short-input-payment{
    padding:2% 10%;
    display:block;

}
.fullpayment-form button{
    background: #FFA500;
    border: 1px solid rgba(219, 216, 216, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding:15px 40px;
    width: 100%;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-top:10%;
    margin-bottom:30%;
    /* transform: matrix(1, 0, 0, -1, 0, 0); */
}

}
</style>