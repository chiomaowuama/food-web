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
                <p>payment</p>
            </div>
        </div>
        <div class="diferentcards">
            <img src="@/assets/paypal.png" alt="">
            <img src="@/assets/visa1.png" alt="">
            <img src="@/assets/master1.png" alt="">
            
        </div>
        <div class="the-cardpart-structure">
            <form action="" class="cardpart-form">
                <label for="" class="cardpart-label">Credit Card Number</label>
                <input type="text" placeholder="Enter card number here" class="cardpart-input">
                <label for="" class="cardpart-label">Credit Card Number</label>
                <input type="text" placeholder="Enter card number here" class="cardpart-input">
                <div class="cardpart-labeland-input">
                    <div class="cardpart-each-land1">
                        <label for="" class="cardpart-label-2">Exp Date</label>
                        <input type="text" placeholder="Choose Year">
                    </div>
                    <div class="cardpart-each-land1">
                        <label for="" class="cardpart-label-2"> CVV</label>
                        <input type="text" placeholder="1234">
                    </div>
                    <div class="the-save-card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.75 3.25V20.75H3.25V3.25H20.75ZM20.75 0.75H3.25C1.875 0.75 0.75 1.875 0.75 3.25V20.75C0.75 22.125 1.875 23.25 3.25 23.25H20.75C22.125 23.25 23.25 22.125 23.25 20.75V3.25C23.25 1.875 22.125 0.75 20.75 0.75Z" fill="black"/>
                        </svg>
                        <p>save this card</p>

                    </div>
                </div>
                <div class="thecardpart-btn">
                        <button class="proceed-1">Proceed to checkout</button>
                    </div>
            </form>
        </div>
    </div>
</template>
<style>
/* thetop div */
.diferentcards{
    /* border:2px solid yellow; */
    width:40%;
    margin:0% 21%;
    display:flex;
    justify-content: space-around;
    align-content: center;
}
.diferentcards img{
    width:90px;
}
/* the next part */
.the-cardpart-structure{
    /* border:2px solid red; */
    display: flex;
    justify-content: center;
    align-content: center;
}
.cardpart-form{
    /* border:2px solid yellow; */
    width:50%;
    /* margin:auto; */
    padding:10px 10px;
    


  

}
.cardpart-label{
    display:block;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 44px;
    letter-spacing: 0.03em;
    width:100%;
    color: #000000;
    /* border:2px solid blue; */

    
}
.cardpart-labeland-input{
    /* border:2px solid green; */
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1rem;
    width:95%;
    
    

}
.cardpart-input{
    border: 1px solid rgba(0, 0, 0, 0.5);
    width:80%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    padding:0px 5%;
    line-height: 34px;
    letter-spacing: 0.03em;
    color: #000000;
    margin-bottom: 5%;
    outline: none;

}
.cardpart-label-2{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.03em;
    width:100%;
    color: #000000;
    /* border:2px solid blue; */
}
/* .cardpart-each-land1 input{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    padding:0px 5%;
    line-height: 34px;
    letter-spacing: 0.03em;
    color: #000000;
    margin-bottom: 5%;
   
} */
.cardpart-each-land1 input{
    /* border:2px solid yellow; */
    width:80%;
    font-size: 15px;
    padding:5px 5%;
    line-height: 24px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    outline: none;
   
    
}
.the-save-card{
    /* border:2px solid green; */
    display:flex;
    justify-content: space-around;
    align-content: center;
    width:45%;
}
/* .the-save-card p{
    border:2px solid green;
    margin:none;
} */
.the-save-card svg{
    margin-top:8%;
    /* border:2px solid red; */
    width:15px
}
/* btn */
.proceed-1{
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
    width:40%;
    cursor: pointer;
}
@media screen and (max-width: 900px){
    /* the cards part */
    /* thetop div */
.diferentcards{
    /* border:2px solid yellow; */
    width:45%;
    margin:0% 21%;
    display:flex;
    justify-content: space-around;
    align-content: center;
}
.diferentcards img{
    width:40px;
}
    /* the structure */
    .the-cardpart-structure{
    /* border:2px solid red; */
    display: flex;
    justify-content: center;
    align-content: center;
    }
    .cardpart-form{
        /* border:2px solid yellow; */
        width:50%;
        /* margin:auto; */
        padding:10px 10px;
        


    

    }
    .cardpart-label{
        display:block;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 44px;
        letter-spacing: 0.03em;
        width:100%;
        color: #000000;
        /* border:2px solid blue; */

        
    }
    .cardpart-labeland-input{
        /* border:2px solid green; */
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:1rem;
        width:95%;
        
        

    }
    .cardpart-input{
        border: 1px solid rgba(0, 0, 0, 0.5);
        width:90%;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        padding:0px 5%;
        line-height: 34px;
        letter-spacing: 0.03em;
        color: #000000;
        margin-bottom: 5%;
        outline: none;

    }
    .cardpart-label-2{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.03em;
        width:100%;
        color: #000000;
        /* border:2px solid blue; */
    }
    /* .cardpart-each-land1 input{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        padding:0px 5%;
        line-height: 34px;
        letter-spacing: 0.03em;
        color: #000000;
        margin-bottom: 5%;
    
    } */
    .cardpart-each-land1 input{
        /* border:2px solid yellow; */
        width:80%;
        font-size: 10px;
        padding:5px 5%;
        line-height: 14px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        outline: none;
    
        
    }
    .the-save-card{
        /* border:2px solid green; */
        display:flex;
        justify-content: space-around;
        align-content: center;
        width:100%;
        font-size: 10px;
    }
    /* .the-save-card p{
        border:2px solid green;
        margin:none;
    } */
    .the-save-card svg{
        margin-top:8%;
        /* border:2px solid red; */
        width:15px
    }
    .proceed-1{
        background: #FFA500;
        border: 1px solid rgba(219, 216, 216, 0.5);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin:3% 7%;
        padding:10px 10px;
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        width:80%
    }
}
</style>
