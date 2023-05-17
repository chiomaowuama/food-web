<script setup>
import navBar from "@/components/navBar.vue"
// import footerPage from '@/components/footerPage.vue'
</script>
<template>
    <navBar/>
    <div>
        <div class="top-back-2">
            <div class="thebackand-arror-2">
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
                <p>how would you like to make payment</p>
            </div>
        </div>
        <div class="payment-method">
            <p  class="select-payment"> select your payment option</p>
            <div class="thepayment-div">
                <p>pay with debit card</p>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" fill="black"/>
                </svg>
            </div>
            <div class="thepayment-div">
                <p>Bank transfer</p>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" fill="black"/>
                </svg>
            </div>
        </div>
    </div>
  
</template>
<style>
.top-back-2{
    /* border:2px solid yellow; */
    width:40%;
    display:flex;
    justify-content: space-between;
    margin-left:7%;
}
.thebackand-arror-2{
    display:flex;
    justify-content: space-between;
    align-content: center;
    /* border:2px solid blue; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #000000;
    width:13%;
}
.thebackand-arror-2 p{
    /* border:2px solid green; */
    margin:0px;
}
.cartpage-order-2{
    /* border:2px solid red; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #000000;
    text-transform:capitalize;
}
.cartpage-order-2 p{
    /* border:2px solid green; */
    margin:0px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 39px;
    letter-spacing: 0.03em;
    color: #000000;
}
.thebackand-arror-2 svg{
    /* border:2px solid green; */
    padding:0px;
    margin-top:2px;
}
/* the select side  */
.select-payment{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #000000;
    padding:0px 13%;
    /* border:2px solid yellow; */

}
.thepayment-div{
    /* border:2px solid black; */
    display:flex;
    justify-content: space-between;
    padding:0px 30px;
    width:40%;
    margin:5% 13%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: #000000;
    background: #E6E4E3;
    border: 1px solid rgba(227, 224, 224, 0.5);

}
.thepayment-div svg{
    /* border:2px solid blue; */
    margin:20px 3%;
}
@media screen and (max-width: 900px){
    .top-back-2{
    /* border:2px solid yellow; */
    width:60%;
    display:flex;
    justify-content: space-between;
    margin-left:7%;
}
.thebackand-arror-2{
    display:flex;
    justify-content: space-between;
    align-content: center;
    /* border:2px solid blue; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #000000;
    width:18%;
}
.thebackand-arror-2 p{
    /* border:2px solid green; */
    margin:0px;
}
.cartpage-order-2{
    /* border:2px solid red; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 10px;
    letter-spacing: 0.03em;
    color: #000000;
    text-transform:capitalize;
}
.cartpage-order-2 p{
    /* border:2px solid green; */
    margin:0px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.03em;
    color: #000000;
}
.thebackand-arror-2 svg{
    /* border:2px solid green; */
    padding:0px;
    margin-top:2px;
}
/* the select side  */
.select-payment{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #000000;
    padding:0px 13%;
    /* border:2px solid yellow; */

}
.thepayment-div{
    /* border:2px solid black; */
    display:flex;
    justify-content: space-between;
    padding:0px 20px;
    width:40%;
    margin:5% 13%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.01em;
    color: #000000;
    background: #E6E4E3;
    border: 1px solid rgba(227, 224, 224, 0.5);

}
.thepayment-div svg{
    /* border:2px solid blue; */
    margin:20px 3%;
}
}
</style>