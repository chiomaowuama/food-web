<script setup>
import navBar from "@/components/navBar.vue"
</script>
<template>
    <navBar/>
    <div class="cart-structure">
        <div class="the-top-line">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_47_891" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_47_891" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA2klEQVR4nO3SMQ7CMBBFwQUOTcvRaDgTJVRIATkQS/EukBnJTQrL+i8RAAAAAAAAAAAAAAAAz07VD9iyU0Tcqh+xVY/xBSgwHV+AZK/jC5CoNb4ASebGFyDBu/EFGOzT+AIMtGR8AQZZOr4AA/SML8DKesd3VvxBjV8YwPiFAYyfGGDfCHBtfCPZMer/lH89IvxKgAgRygNE9EdggJ4IDLI0AgMticBgnyKQ4F0EksxFIFErAsleI1BgGoEijwh0OKx41yUidhFxXvFOAAAAAAAAAAAAAACAr3cH6SbnSh0WURQAAAAASUVORK5CYII="/>
            </defs>
            </svg>
            <p> Back</p>
        </div>
        <div class="picturepart">
            <img src="@/assets/biggestpic.png" alt="">
        </div>
        <div class="thebottom-cart">
            <div class="thefood-name-cart">
                <h3>Jollof Rice Combo</h3>
                <p>jollof rice</p>
                <p>tillapia fish</p>
                <p>Gizzard</p>
                <p>Plantain</p>
            </div>
            <div class="thenumber-cart">

                <p class="theprice-cart">10,000</p>
                <div class="theplus-cart">
                    <div class="numbersadded">
                        <p>-</p>
                        <p>1</p>
                        <p>-</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
.cart-structure{
    padding:0px 20px;
    /* border:2px solid red; */
    margin-bottom:5%;
}
.the-top-line{
    /* border:2px solid green; */
    display:flex;
    gap:0.5rem;
    width:90%;
    margin:auto;
}
.the-top-line svg{
    /* border:2px solid green; */
    margin-top:10px;
}
.picturepart{
    /* border:2px solid blue; */
    width:90%;
    margin: auto;
}
.picturepart img{
    width:80%;
    /* margin: auto; */
}
/* the bottom of the cart */
.thebottom-cart{
    /* border:2px solid green; */
    display:grid;
    grid-template-columns: 1fr 1fr;
    width:75%;
    /* margin:auto; */
    margin-left:4%;
    margin-top:5%;
   
}
/* .thefood-name-cart{
    border:2px solid red;
} */
.thefood-name-cart h3{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 44px;
    letter-spacing: 0.03em;
    color: #000000;
    margin-top: 0px;
}
.thefood-name-cart p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 13px;
    letter-spacing: 0.03em;

    color: #000000;
}
.thenumber-cart{
    /* border:2px solid yellow; */
    display:grid;
    grid-template-columns: 7fr 5fr;
   
    /* height:30%; */
}
/* .thenumber-cart p{
    border:2px solid yellow;
} */
/* .theprice-cart{ 
} */
.theplus-cart{
    /* border:2px solid blue; */
    padding-left: 10px;
    margin:5% 0px;
}
.numbersadded{
   border:1px solid black;
   display:flex;
   justify-content: space-around;
   align-content: center;
   padding:8px;
   width:80px;
  

}
.theplus-cart p{
    /* border:2px solid yellow; */
    margin:0px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #000000;
    padding:0px;
}
.theprice-cart {
    /* border:2px solid red; */
    text-align: end;
    margin:10px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #FFA500;
}

@media screen and (max-width: 900px){
    .cart-structure{
    padding:0px 20px;
    /* border:2px solid red; */
    margin-bottom:5%;
    }
    .the-top-line{
        /* border:2px solid green; */
        display:flex;
        gap:0.5rem;
        width:90%;
        margin:auto;
    }
    .the-top-line svg{
        /* border:2px solid green; */
        margin-top:10px;
    }
    .picturepart{
        /* border:2px solid blue; */
        width:90%;
        margin: auto;
    }
    .picturepart img{
        width:90%;
        height:120px;
        /* margin: auto; */
    }
    /* the bottom of the cart */
    .thebottom-cart{
        /* border:2px solid green; */
        display:grid;
        grid-template-columns: 1fr 1fr;
        width:90%;
        /* margin:auto; */
        margin-left:4%;
        margin-top:5%;
    
    }
    /* .thefood-name-cart{
        border:2px solid red;
    } */
    .thefood-name-cart h3{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        letter-spacing: 0.03em;
        color: #000000;
        margin-top: 0px;
        /* border:2px solid yellow; */
    }
    .thefood-name-cart p{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        letter-spacing: 0.03em;
        /* border:2px solid green; */
        color: #000000;
    }
    .thenumber-cart{
        /* border:2px solid yellow; */
        display:grid;
        grid-template-columns: 7fr 5fr;
    
        /* height:30%; */
    }
    /* .thenumber-cart p{
        border:2px solid yellow;
    } */
    /* .theprice-cart{ 
    } */
    .theplus-cart{
        /* border:2px solid blue; */
        padding-left: 10px;
        margin:5% 0px;
    }
    .numbersadded{
    border:1px solid black;
    display:flex;
    justify-content: space-around;
    align-content: center;
    padding:8px;
    width:80px;
    

    }
    .theplus-cart p{
        /* border:2px solid yellow; */
        margin:0px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 14px;
        letter-spacing: 0.02em;
        color: #000000;
        padding:0px;
    }
    .theprice-cart {
        /* border:2px solid red; */
        text-align: end;
        margin:10px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 33px;
        letter-spacing: 0.02em;
        color: #FFA500;
    }
}
</style>