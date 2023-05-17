<script setup>
import navBar from "@/components/navBar.vue"
import footerPage from '@/components/footerPage.vue'

</script>
<template>
     <navBar/>
    <div class="cartpage-structure">
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
            <div class="cartpage-order">
                <p>Your Order</p>
            </div>
        </div>
        <div class="thecartpage-picandprice">
            <div class="the-package-cartpage">
                <div class="the-package-img">
                    <img src="@/assets/pizza-dod.png" alt="">
                </div>
                <div class="the-cartpackage-text">
                   <div class="thepandtrash">
                        <p>pizza</p>
                        <img src="@/assets/trashcan.png" alt="">
                   </div>
                   <div class="the-package-andadding">
                        <p>4,000</p>
                        <div class="theplus-and-minus">
                            <p>-</p>
                            <p>+</p>
                            <p>-</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        <div class="thecartpage-picandprice">
            <div class="the-package-cartpage">
                <div class="the-package-img">
                    <img src="@/assets/pizza-dod.png" alt="">
                </div>
                <div class="the-cartpackage-text">
                   <div class="thepandtrash">
                        <p>pizza</p>
                        <img src="@/assets/trashcan.png" alt="">
                   </div>
                   <div class="the-package-andadding">
                        <p>4,000</p>
                        <div class="theplus-and-minus">
                            <p>-</p>
                            <p>+</p>
                            <p>-</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        <div class="thecartpage-picandprice">
            <div class="the-package-cartpage">
                <div class="the-package-img">
                    <img src="@/assets/pizza-dod.png" alt="">
                </div>
                <div class="the-cartpackage-text">
                   <div class="thepandtrash">
                        <p>pizza</p>
                        <img src="@/assets/trashcan.png" alt="">
                   </div>
                   <div class="the-package-andadding">
                        <p>4,000</p>
                        <div class="theplus-and-minus">
                            <p>-</p>
                            <p>+</p>
                            <p>-</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        <div class="thecartpage-picandprice">
            <div class="the-package-cartpage">
                <div class="the-package-img">
                    <img src="@/assets/pizza-dod.png" alt="">
                </div>
                <div class="the-cartpackage-text">
                   <div class="thepandtrash">
                        <p>pizza</p>
                        <img src="@/assets/trashcan.png" alt="">
                   </div>
                   <div class="the-package-andadding">
                        <p>4,000</p>
                        <div class="theplus-and-minus">
                            <p>-</p>
                            <p>+</p>
                            <p>-</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        <div class="thecart-large-btn">
            <button>Apply Promo code </button>
        </div>
        <div class="subtotal-cart">
            <div class="thesubtotal-part">
                <p>Subtotal(4 items)</p>
                <p>Delivery fee</p>
                <p>total</p>
            </div>
            <div class="thecartpage-price">
                <p>14,500</p>
                <p>1000</p>
                <p>15000</p>
            </div>
        </div>
        <div class="thecart-last-btn">
            <button class="down-cartpage">order now </button>
        </div>
    </div>
    <footerPage/>
</template>
<style>
/* .cartpage-structure{
    border:2px solid green;
} */
.top-back{
    /* border:2px solid yellow; */
    width:20%;
    display:flex;
    justify-content: space-between;
    margin-left:7%;
}
.thebackand-arror{
    display:flex;
    justify-content: space-between;
    align-content: center;
    /* border:2px solid blue; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #000000;
}
.thebackand-arror p{
    /* border:2px solid green; */
    margin:0px;
}
.cartpage-order{
    /* border:2px solid red; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #000000;
}
.cartpage-order p{
    /* border:2px solid green; */
    margin:0px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 49px;
    letter-spacing: 0.03em;
    color: #000000;
}
.thebackand-arror svg{
    /* border:2px solid green; */
    padding:0px;
    margin-top:2px;
}

/* the food part */
.thecartpage-picandprice{
    border:1px solid black;
    border-top:none;
    border-left:none;
    border-right:none;
    margin-top:60px;
}
.the-package-cartpage{
    /* border:2px solid yellow; */
    width:70%;
    /* margin:auto; */
    margin-left:17%;
    display:flex;

}
.the-cartpackage-text{
    /* border:2px solid red; */
    width:30%;
    
}
.thepandtrash{
    /* border:2px solid green; */
    display:flex;
    justify-content:space-between;
    align-content: center;
}
.thepandtrash p{
    /* border:2px solid red; */
    margin:0px;
}
.thepandtrash img{
    /* border:2px solid green; */
    width:20px;
    height: 20px;
    /* margin-top:10px; */
}
.the-package-andadding{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 60%;
}
.the-package-andadding p{
    /* border:2px solid green; */
    text-align:end;
    margin:0px;
}
.theplus-and-minus{
    border:1px solid black;
    width:80px;
    padding:5px 0px;
    display:flex;
    justify-content: space-around;
    align-content: center;
}
.the-package-img{
    /* border:2px solid yellow; */
    width:53%
}
/* the btn part */
.thecart-large-btn{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-self: center;
    margin-top:5%;
}
.thecart-large-btn button{
    /* border:2px solid red; */
    font-family: 'Work Sans';
   padding:5px 40px;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    align-content: center;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    background: rgba(255, 165, 0, 0.5);
    border: 1px solid rgba(219, 216, 216, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    /* transform: matrix(1, 0, 0, -1, 0, 0); */
}
.thecart-last-btn{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-self: center;
}
.down-cartpage{
    background: #FFA500;
    border: 1px solid rgba(219, 216, 216, 0.5);
    /* border:2px solid red; */
    font-family: 'Work Sans';
    padding:5px 80px;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    align-content: center;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom: 5%;
}
/* .thesubtotal-part{
    border:2px solid yellow;
} */
.thesubtotal-part p{
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 18px;
    letter-spacing: 0.01em;
    /* border:2px solid yellow; */
    color: #000000;
}
/* .thecartpage-price{
    border:2px solid blue;
} */
.thecartpage-price p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 13px;
    letter-spacing: 0.02em;
    color: #FFA500;
}
.subtotal-cart{
    /* border:2px solid red; */
    width:80%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin:5% 8%;
}
.subtotal-cart p{
    padding:3% 0%;

}
@media screen and (max-width: 900px){
    /* .cartpage-structure{
    border:2px solid green;
} */
.top-back{
    /* border:2px solid yellow; */
    width:40%;
    display:flex;
    justify-content: space-between;
    margin-left:7%;
}
.thebackand-arror{
    display:flex;
    justify-content: space-between;
    align-content: center;
    /* border:2px solid blue; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #000000;
}

.thebackand-arror p{
    /* border:2px solid green; */
    margin:0px;
}
.cartpage-order{
    /* border:2px solid red; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #000000;
}
.cartpage-order p{
    /* border:2px solid green; */
    margin:0px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 10px;
    letter-spacing: 0.03em;
    color: #000000;
    padding-top:10px;
}
.thebackand-arror svg{
    /* border:2px solid green; */
    padding:0px;
    margin-top:2px;
}

/* the food part */
.thecartpage-picandprice{
    border:1px solid black;
    border-top:none;
    border-left:none;
    border-right:none;
    margin-top:60px;
}
.the-package-img{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-content: center;
    
}
.the-package-img img{
    width:140px;
}
.the-package-cartpage{
    /* border:2px solid yellow; */
    width:80%;
    /* margin:auto; */
    margin-left:17%;
    display:flex;

}
.the-cartpackage-text{
    /* border:2px solid red; */
    width:30%;
    
}
.thepandtrash{
    /* border:2px solid green; */
    display:flex;
    justify-content:space-between;
    align-content: center;
}
.thepandtrash p{
    /* border:2px solid red; */
    margin:0px;
}
.thepandtrash img{
    /* border:2px solid green; */
    width:20px;
    height: 20px;
    /* margin-top:10px; */
}
.the-package-andadding{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 60%;
}
.the-package-andadding p{
    /* border:2px solid green; */
    text-align:end;
    margin:0px;
}
.theplus-and-minus{
    border:1px solid black;
    width:35px;
    padding:5px 0px;
    display:flex;
    justify-content: space-around;
    align-content: center;
    /* border:2px solid red; */
}
.the-package-img{
    /* border:2px solid yellow; */
    width:53%
}
/* the btn part */
.thecart-large-btn{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-self: center;
    margin-top:5%;
}
.thecart-large-btn button{
    /* border:2px solid red; */
    font-family: 'Work Sans';
   padding:5px 40px;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    align-content: center;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    background: rgba(255, 165, 0, 0.5);
    border: 1px solid rgba(219, 216, 216, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    /* transform: matrix(1, 0, 0, -1, 0, 0); */
}
.thecart-last-btn{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-self: center;
}
.down-cartpage{
    background: #FFA500;
    border: 1px solid rgba(219, 216, 216, 0.5);
    /* border:2px solid red; */
    font-family: 'Work Sans';
    padding:5px 60px;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    align-content: center;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom: 5%;
}
/* .thesubtotal-part{
    border:2px solid yellow;
} */
.thesubtotal-part p{
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.01em;
    /* border:2px solid yellow; */
    color: #000000;
}
/* .thecartpage-price{
    border:2px solid blue;
} */
.thecartpage-price p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.02em;
    color: #FFA500;
}
.subtotal-cart{
    /* border:2px solid red; */
    width:80%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin:5% 8%;
}
.subtotal-cart p{
    padding:3% 0%;

}
}
</style>