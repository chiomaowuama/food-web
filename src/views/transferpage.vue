<script setup>
import navBar from "@/components/navBar.vue"
</script>
<template>
     <navBar/>
    <div>
        <div class="top-back-3">
            <div class="thebackand-arror-3">
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
            <div class="cartpage-order-3">
                <p>Bank Transfer</p>
            </div>
        </div>
        <div class="transfer-amount">
            <P class="the-amount-text">Amount</P>
            <P class="the-amount-transfer">15,000</P>
        </div>
        <div class="the-dark-msg">
            <p>1.Click on the orange area to copy your unique naration.</p>
            <p>2. make sure yo use this naration above for the transfer.</p>
            <p>3. money must be transfered from your own account,else money will be returned by the marchant.</p>
        </div>
        <div class="theaccess-andcopy">
            <div class="access">
                <h3>Access Bank</h3>
                <p>account Number</p>
                <p>Account name</p>
            </div>
            <div class="copy">
                <p class="main-copy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_104_146)">
                <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_104_146">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg> copy</p>
                <p class="colored-transfer">1234567891</p>
                <p class="megastop-transfer">Megastop Food</p>
            </div>
        </div>
        <p class="maximum"> maximum is 1,000,000 and minimum is 1000</p>
        <button class="proceed">Proceed to checkout</button>
    </div>
</template>
<style>
.top-back-3{
    /* border:2px solid yellow; */
    width:25%;
    display:flex;
    justify-content: space-between;
    margin-left:7%;
    margin-top:3%;
}
.thebackand-arror-3{
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
    width:25%;
}
.thebackand-arror-3 p{
    /* border:2px solid green; */
    margin:0px;
    
}
.cartpage-order-3{
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
.cartpage-order-3 p{
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
.thebackand-arror-3 svg{
    /* border:2px solid green; */
    padding:0px;
    margin-top:2px;

    /* width:0px; */
}
/* the firstpart */
.transfer-amount{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: space-between;
    align-content: center;
    width:40%;
    margin-left:20%;
    margin-top:2%;
}
.the-amount-text{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #000000;
    /* border:2px solid red; */

}
.the-amount-transfer{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size:18px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #FFA500;
    /* border:2px solid red; */

}
/* dark part */
.the-dark-msg{
    /* border:2px solid yellow; */
    width:60%;
    padding:10px 0%;
    /* display:flex;
    justify-content: center;
    align-content: center; */
    /* text-align: center; */
    margin:auto;
    margin-top:1%;
    border:2px solid #E5E4E3;
    background: #E5E4E3;

}
.the-dark-msg p{
    margin:50px 30px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #000000;
    /* border:2px solid green; */
}
/* copy */
.theaccess-andcopy{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: space-between;
    align-content: center;
    width:55%;
    margin:auto;
    padding:30px;
}
.main-copy{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size:18px;
    line-height: 25px;
    letter-spacing: 0.03em;
    color: #000000;
}
.colored-transfer{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 33px;
    letter-spacing: 0.03em;
    color: #FFA500;
}
.megastop-transfer{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #000000;
}
/* .access{
    border:2px solid blue;
} */
.access h3{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 34px;
    letter-spacing: 0.03em;
    color: #000000;

}
.access p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #000000;
}
/* text */
.maximum{
    width:57%;
    margin:auto;
    /* border:2px solid green; */
    padding:18px;
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    /* font-size: 24px; */
    line-height: 23px;
    /* letter-spacing: 0.03em; */
    color: #000000;
    margin-top:auto;
}
.proceed{
    
background: #FFA500;
border: 1px solid rgba(219, 216, 216, 0.5);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
margin:5% 30%;
padding:10px 10px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 25px;
letter-spacing: 0.01em;
color: #FFFFFF;
width:40%
/* transform: matrix(1, 0, 0, -1, 0, 0); */
}
@media screen and (max-width: 900px){
    .top-back-3{
    /* border:2px solid yellow; */
    width:40%;
    display:flex;
    justify-content: space-between;
    margin-left:7%;
    margin-top:3%;
}
.thebackand-arror-3{
    display:flex;
    justify-content: space-between;
    align-content: center;
    /* border:2px solid blue; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #000000;
    width:40%;
}
.thebackand-arror-3 p{
    /* border:2px solid green; */
    margin:0px;
    
}
.cartpage-order-3{
    /* border:2px solid red; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #000000;
    text-transform:capitalize;
}
.cartpage-order-3 p{
    /* border:2px solid green; */
    margin:0px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #000000;
}
.thebackand-arror-3 svg{
    /* border:2px solid green; */
    padding:0px;
    margin-top:2px;

    /* width:0px; */
}
/* the firstpart */
.transfer-amount{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: space-between;
    align-content: center;
    width:40%;
    margin-left:20%;
    margin-top:2%;
}
.the-amount-text{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.03em;
    color: #000000;
    /* border:2px solid red; */

}
.the-amount-transfer{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size:15px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #FFA500;
    /* border:2px solid red; */

}
/* dark part */
.the-dark-msg{
    /* border:2px solid yellow; */
    width:60%;
    padding:10px 0%;
    /* display:flex;
    justify-content: center;
    align-content: center; */
    /* text-align: center; */
    margin:auto;
    margin-top:1%;
    border:2px solid #E5E4E3;
    background: #E5E4E3;

}
.the-dark-msg p{
    margin:30px 30px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 0.02em;
    color: #000000;
    /* border:2px solid green; */
}
/* copy */
.theaccess-andcopy{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: space-between;
    align-content: center;
    width:55%;
    margin:auto;
    padding:30px;
}
.main-copy{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size:13px;
    line-height: 25px;
    letter-spacing: 0.03em;
    color: #000000;
}
.colored-transfer{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 33px;
    letter-spacing: 0.03em;
    color: #FFA500;
}
.megastop-transfer{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #000000;
}
/* .access{
    border:2px solid blue;
} */
.access h3{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #000000;

}
.access p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #000000;
}
/* text */
.maximum{
    width:57%;
    margin:auto;
    /* border:2px solid green; */
    padding:18px;
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 23px;
    /* letter-spacing: 0.03em; */
    color: #000000;
    margin-top:auto;
}
.proceed{
    
background: #FFA500;
border: 1px solid rgba(219, 216, 216, 0.5);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
margin:5% 30%;
padding:10px 10px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 25px;
letter-spacing: 0.01em;
color: #FFFFFF;
width:40%
/* transform: matrix(1, 0, 0, -1, 0, 0); */
}
}
</style>