<script setup>
import navBar from "@/components/navBar.vue"
import footerPage from '@/components/footerPage.vue'
</script>

<template>
     <navBar/>
    <div class="thebig-text">
      <h3 class="the-text">Food Delivered to your Doorsteps</h3>
      <div class="input-and-tag">
        <input type="text" class="thelong-input" placeholder="Enter your delivery address here">
        <!-- <svg width="24" class="location-tag" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="24" height="24" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_21_28" transform="scale(0.0104167)"/>
        </pattern>
        <image id="image0_21_28" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAE60lEQVR4nO2dTWhcVRTHf439Ikn9wFRR01KbokEQ0Si60I0rA60mGxfWla5daGvd6CoifoDgB9Sii1KqYmpbRayuxIUKLVbUhShUa6IUmtavNkVTm8TFnQl2yjAzb/7nnncz9wdnMwznnfO/791579zz7kAmk8lkMplMJpPpNJZ4B9AES4Eh4E5gELge6AcuBXqBeeAM8CfwK/AD8D3wGXAYOBc/5PRZDowC+4BTBJGL2F/AXmCk4jPTgNXA08BJiotez04CY0BftGwSohd4FphGL3ytTQPPAD1RMkuAEWASe+FrbQK4L0J+pWUl8BLxha+1XUC3ca6lox/4Gn/xq/YVcLVpxiViADiCv+i19jPhFndRMwhM4S92PTsOXGeWvTPXAEfxF7mR/QKsMdLAjZWUa85vZIeBFSZKOLEDf1FbtVdNlHBgFH8xi9omAz2i0k0a8349m8D4ifkiS+eE2stG42NYcglhID7xDqQIlwOn8T+L27VpDAt4XVaOgccIRbbU6QEe8Q6iVZZjU1L2shMYrSdYXQEbCVOQmrPAO8ADhKfq3ooNVj4br3xHTR8wbODXjH3oz8J3gfVNHHuAsAqmPv54ISUcWEpYClQlfg7YUiCOrcCsMI4/sL9rlHAH2jOviPhVtoljubWNWKKxBe200y77hfE8KojHnDfQJDtDmM/b5dqKL0VMOwTxnIfFXZCqnr4f+FHg5yjwvsAPGCzYWAyAqpauEk3pa63IzwIWA3CxyM+XIj9KX6tEfkxRzbfKMka1hbFd+0cYE2BzBZSx31SVpzw3iwE4I/KjbBO5SuRHldsCFgNwQuRnSOQH4DaRnymRnwUsBmBC5GdE5Ad0LYiTIj8LWAzAtyI/o8AGgZ/1wL0CPwDfiPwsYDEAB0V+lgHPCfy8iK6Wf0jkx5S1aAtgW9uI5QlxLP1txBKVY+iSngUeLxDDNrTl6GMFYnBjJ9ozb55QG2rmN2ED8J7B8XcWUsKJTegFmCcsN44Dm7lwSXIzsKfyHYtjmzRpWT21riDcM6vqQt6cBq4gkVIEhHrQASPfHnyAgfhg2xf0lqHv2LztHUARuki7L7RqExguxlteAXPA64b+Y7GdcDubJKsJc6f3WVzUZoAr5ar8D8srAEJlVNHZ4MUewntjSXMD2ifSWDYH3GighwvK3pxYttdECSduJpxR3qK2Ykl0wbXCAfxFbdY+NNLAlZtI47dgFu1yaKnYjb/AjWyXWfYlYB3wN/4i17MZmnsHIWlewF/oeva8Yd6l4TLKuWHHVCW2juBh/AWvtYdMMy4ZS4Av8Be9aoewL8uUjlsI7395iz+LrnMuOV7BfwBeNs+yxPQAP+En/gSJ9PxbMozfAKhaFpPnTeKLvztKZonQR1j4iCX+cfIWxhdwD/FK1snvhGXFa9iLvz1aNgnSTdj730r8IyyOPYxMGcKmv/Nf4PaIeSTNU+gH4MmoGSROF/ApOvE/J5GtZsrEAO39fUnVTqHZ9KMjuZ/2B+DB6FEvMtop2HV0oU3FMsIc3qr4B1lkG3B7sobQZ9qs+L8TNmrKCBmmub6iOTr8z3ksGaPxAIy5RdcBdBF2v6on/kfk+31zVhH2o6gV/zvCbueZCKzj/N6i39Bs7JFpgbsIrYRngbudYylMyvPlJOHM/5jwKlEmk8lkMplMJpPJJMF/2MHfjTuQmYwAAAAASUVORK5CYII="/>
        </defs>
        </svg> -->
      </div>
      <div class="side-by-side">
        <div class="side-text">
          <p>Find restaurants you love , and well bring your food to your doorstep.</p>
        </div>
        <div class="side-image">
          <img src="@/assets/chiecken-deeped.png" alt="">
        </div>
      </div>
      <div class="chosing-service">
        <p class="first-text">choose a service</p>
        <div class="imagesandtext">
          <div class="foodand-p">
            <img src="@/assets/102.png" alt="" >
            <p class="resturants">Restaurants</p>
            <p class="locations">Resturantt found near you</p>
          </div>
          <div class="foodand-p">
            <img src="@/assets/103.png" alt="" >
            <p class="resturants">Bukka Hut</p>
          </div>
          <div class="foodand-p">
            <img src="@/assets/104.png" alt="" >
            <p class="resturants">Cold Stone</p>
          </div>
          <div class="foodand-p">
            <img src="@/assets/105.png" alt="" >
            <p class="resturants">Dodo Pizza</p>
          </div>
          <div class="foodand-p" >
            <img src="@/assets/106.png" alt="" >
            <p class="resturants">Domino's</p>
          </div>
          <div class="foodand-p">
            <img src="@/assets/107.png" alt="" >
            <p class="resturants">Matanmi ofada Rice</p>
          </div>
          <div class="foodand-p">
            <img src="@/assets/108.png" alt="" >
            <p class="resturants">Abula (Amala)</p>
          </div>
          <div class="foodand-p">
            <img src="@/assets/109.png" alt="" >
            <p class="resturants">Chicken Republic</p>
 
          </div>
          <div class="foodand-p">
            <img src="@/assets/110.png" alt="" >
            <p class="resturants"> Mr Biggs</p>
         
          </div>
        </div>
      </div>
      <div class="doublephone-secction">
        <div class="text-and-playstore">
          <p>Download the app, get your food delivered to your doorstep.</p>
          <img src="@/assets/playstore.png" alt="">
        </div>
        <div class="thediv-for-phone">
          <div class="phone-like1">
            <div class="phonescreen">
              <div class="thetime-and-wifi">
                <div class="time">
                  <p>10:32</p>
                </div>
                <div class="networkandothers">
                  <img src="@/assets/network.png" alt="">
                  <img src="@/assets/bx_wifi.png" alt="">
                  <img src="@/assets/bat3.png" alt="">
                </div>
              </div>
            </div>
            <p class="phone-bigtext">Mega stop Food</p>
            <p class="phone-smalltexttext">Mega stop Food is based in the south west of lagos, Nigeria which specializes in deliverins your meals within 20 minutes of order</p>
            <div class="smalldot-section">
              <div class="smalldot"></div>
              <div class="smalldot"></div>
              <div class="smalldot"></div>
              <div class="smalldot"></div>
            </div>
            <button class="the-phonelike-btn">Next</button>
            <p class="theskip">skip</p>

            
          </div>
        </div>
        <div class="second-phonelike">
          <div class="thetime-and-wifi-2">
                <div class="time-2">
                  <p>10:32</p>
                </div>
                <div class="networkandothers">
                  <img src="@/assets/signal-2.png" alt="">
                  <img src="@/assets/wifi-2.png" alt="">
                  <img src="@/assets/bat3-2.png" alt="">
                </div>
          </div>
          <div class="thesearch-and-tag">
            <img src="@/assets/navigationthing.png" alt="">
            <p>Mega Stop Food</p>
            <img src="@/assets/searchbox.png" alt="">
          </div>
          <div class="food-display"> 
            <img src="@/assets/second-phone-pic.png" alt="">
          </div>
          <p class="explore">Explore Food And Snacks</p>
          <p class="choose">Choose a service</p>
          <div class="the-tiny-food">
           
            <div class="foodand-p-1">
            <img src="@/assets/102.png" alt="" >
            <p class="resturants-1">Restaurants</p>
          </div>
          <div class="foodand-p-1">
            <img src="@/assets/103.png" alt="" >
            <p class="resturants-1">Bukka Hut</p>
          </div>
          <div class="foodand-p-1">
            <img src="@/assets/104.png" alt="" >
            <p class="resturants-1">Cold Stone</p>
          </div>
          <div class="foodand-p-1">
            <img src="@/assets/105.png" alt="" >
            <p class="resturants-1">Dodo Pizza</p>
          </div>
          <div class="foodand-p-1" >
            <img src="@/assets/106.png" alt="" >
            <p class="resturants-1">Domino's</p>
          </div>
          <div class="foodand-p-1">
            <img src="@/assets/107.png" alt="" >
            <p class="resturants-1">Matanmi ofada Rice</p>
          </div>
          <div class="foodand-p-1">
            <img src="@/assets/108.png" alt="" >
            <p class="resturants-1">Abula (Amala)</p>
          </div>
          <div class="foodand-p-1">
            <img src="@/assets/109.png" alt="" >
            <p class="resturants-1">Chicken Republic</p>
          </div>
          </div>
          <p class="popular">Popular and new</p>
          <div class="newdishes">
            <div class="pizza dish">
              <p>pizza</p>
            </div>
            <div  class="jollof dish">
              <p>jellof-rice</p>
            </div>
            <div  class="spaghetti dish">
              <p>spaghetti</p>
            </div>
            <div  class="beef dish">
              <p>beef</p>
            </div>
            <div  class="moimoi dish">
              <p>moi-moi</p>
            </div>
            <div  class="poundedyam dish">
              <p>pounded yam</p>
            </div>
          </div>
          <p class="special">Special Offer</p>
          <div class="specail-offercontainer">
            <div class="specialoffer-food">
              <img src="@/assets/specialoffer.png" alt="">
            </div>
            <div class="specialoffer-text">
              <p class="specialoffer-name">Baked eggs</p>
              <p class="specialoffer-details">Baked eggs is a spicy delicacy known for is richness in iron known for  is richness in iron phosphorus and vitamin A</p>
              <p class="specialoffer-price">&#8358; 3,000</p>
            </div>
          </div>
          <div class="darkpart">
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z" fill="#FFA500"/>
            </svg>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.6602 0.990166C16.0202 -0.809834 12.7602 0.0301659 11.0002 2.09017C9.24021 0.0301659 5.98021 -0.819834 3.34021 0.990166C1.94021 1.95017 1.06021 3.57017 1.00021 5.28017C0.860213 9.16016 4.30021 12.2702 9.55021 17.0402L9.65021 17.1302C10.4102 17.8202 11.5802 17.8202 12.3402 17.1202L12.4502 17.0202C17.7002 12.2602 21.1302 9.15017 21.0002 5.27017C20.9402 3.57017 20.0602 1.95017 18.6602 0.990166ZM11.1002 15.5502L11.0002 15.6502L10.9002 15.5502C6.14021 11.2402 3.00021 8.39017 3.00021 5.50017C3.00021 3.50017 4.50021 2.00017 6.50021 2.00017C8.04021 2.00017 9.54021 2.99017 10.0702 4.36017H11.9402C12.4602 2.99017 13.9602 2.00017 15.5002 2.00017C17.5002 2.00017 19.0002 3.50017 19.0002 5.50017C19.0002 8.39017 15.8602 11.2402 11.1002 15.5502Z" fill="white" fill-opacity="0.5"/>
            </svg>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="white" fill-opacity="0.5"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle cx="12" cy="12" r="12" fill="url(#pattern0)"/>
              <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_424_157" transform="translate(0 -0.002) scale(0.004)"/>
              </pattern>
              <image id="image0_424_157" width="250" height="251" xlink:href="data:image/jpeg;base64,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"/>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <footerPage/>
</template>
<style>
.thebig-text{
  padding:0px 5%;
}
.the-text{
  /* border:2px solid red; */
  text-align: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 54px;
  letter-spacing: 0.03em;
  color: #000000;
}
.thelong-input{
  border:1px solid black;
  outline: none;;
  width:705px;
  padding:1.7% 1%;
}
.thelong-input:placeholder-shown{
  opacity: 0.5;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;

  
}
.input-and-tag{
  /* border:2px solid red; */
  position: relative;
}
.location-tag{
  /* border:2px solid green; */
  position:absolute;
  top:17px;
  left:61%;
}
/* side by side  */
.side-by-side{
  /* border:2px solid green; */
  display:grid;
  grid-template-columns: 1fr 1fr;
  margin-top:5%;
}
/* .side-text{
  border:2px solid yellow;
 

} */
.side-text p{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 33px;
  line-height: 54px;
  letter-spacing: 0.02em;
  color: #000000;
  /* border:2px solid red; */
  margin-top:0px;
  
}
/* .side-image{
  border:2px solid blue;

} */
.side-image img{
  width: 659px;
  height: 389px;
}
/* next side  */
/* .chosing-service{
  border:2px solid red;
} */
.first-text{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 44px;
  letter-spacing: 0.03em;
}
.imagesandtext{
  /* border:2px solid yellow; */
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:2.5rem;
  justify-content: center;
  align-content: center;
  
}

.foodand-p img{
  /* border:2px solid red; */
  margin-left:40%
}
.resturants{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.03em;
  margin-bottom: 0px;
  /* border:2px solid red; */
  text-align: center;
  width:50%;
  margin:auto;
}
.locations{
  /* border:2px solid green; */
  width:50%;
  margin:10px auto;
}

/* the phone like section */
.doublephone-secction{
  /* border:2px solid green; */
  margin:7% 0%;
  display:grid;
  grid-template-columns: repeat(3,1fr);
}
/* .text-and-playstore{
  border:2px solid red;
} */
.text-and-playstore p{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  margin-top:30%;
  line-height: 34px;
  letter-spacing: 0.03em;
  color: #000000;
  /* border:2px solid green; */

}
.text-and-playstore img{
  width: 255px;
  height: 153px;
  /* border:2px solid red; */
  margin:auto 0px;
}
/* .thediv-for-phone{
  border:2px solid yellow;
} */
/* .thediv-for-phone{
  border:2px solid red;
} */
.phone-like1{
  /* border:2px solid blue; */
  width:95%;
  margin:auto;
  padding-bottom: 30px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
  
  /* background-image:url("@/assets/bg-smallphone.png"); */
}
.phonescreen{
  background-image:url("@/assets/bg-smallphone.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width:100%;
  height:350px;
  border-radius: 30px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.thetime-and-wifi{
  /* border:2px solid white; */
  width:95%;
  margin:auto;
  display:grid;
  grid-template-columns:9fr 3fr;
}
.time{
  /* border:2px solid red; */
  width:50px;
}
.time p{
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 10px;
display: flex;
align-items: center;
justify-content:center;
letter-spacing: 0.01em;
color: #FFFFFF;
/* border:2px solid green; */
}
.networkandothers{
  /* border:2px solid green; */
  display:flex;
  justify-content:space-around;
  align-items:center;
}
.networkandothers img{
  /* border:2px solid green; */
  width:13px;
  

}
.phone-bigtext{
  width:100%;
  /* border:2px solid green; */
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 44px;
  letter-spacing: 0.03em;
  color: #000000;
  text-align:center;
  margin-top:30px;

}
.phone-smalltexttext{
  width:80%;
  /* border:2px solid green; */
  margin:auto;
  margin-top:35px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.03em;
  color: #000000;
}
.smalldot-section{
  /* border:2px solid yellow; */
  width:20%;
  margin:auto;
  margin-top:60px;
  display:flex;
 justify-content: space-between;
 align-content:center;
}
.smalldot{
  border:none;
  background: rgba(0, 0, 0, 0.5);
  width:0px;
  padding:5px 5px;
  border-radius:50px;
  cursor:pointer;
}
.smalldot:hover{
  background: #FFA500;
}
.the-phonelike-btn{
  background: #FFA500;
  border-radius: 20px;
  width:80%;
  padding:10px 0px;
  margin-left:10%;
  margin-top:10%;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
  border:none;
}
.theskip{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.03em;
  color: #000000;
  margin-bottom: 9%;
  margin-top: 9%;
  /* border:2px solid green; */
  text-align: center;
}
/* the second phone like */
.second-phonelike{
   /* border:2px solid blue; */
   width:90%;
  margin:auto;
  padding-bottom: 30px;
  padding:0% 2%;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
}
.thetime-and-wifi-2{
  /* border:2px solid white; */
  width:95%;
  margin:auto;
  display:grid;
  grid-template-columns:9fr 3fr;
}
.time-2{
  /* border:2px solid red; */
  width:50px;
  color:black;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
}
.thesearch-and-tag{
  /* border:2px solid green; */
  width:95%;
  margin:auto;
  display:grid;
  grid-template-columns: 1fr 13fr 1fr;
  margin-top: 0px;

}
.thesearch-and-tag img{
  /* border:2px solid green; */
  width:14px;
}
.thesearch-and-tag p{
  /* border:2px solid yellow; */
  margin:0px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 22px;
  letter-spacing: 0.03em;
  color: #000000;


}
.food-display {
  /* border:2px solid green; */
  display:flex;
  justify-content: center;
  align-content: center;
  margin-top:2%;

}
.food-display img{
  width:310px;
  /* border:2px solid green */
}
.explore{
  /* border:2px solid red; */
  padding-left:14px;
  font-family: 'Inknut Antiqua';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #C47F00;
  margin-top: 5px;
  margin-bottom: 3px;
}
.choose{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #000000;
  padding-left:14px;
  /* border:2px solid red; */
  margin-bottom: 8px;
  margin-top: 0px;
}
.the-tiny-food{
  /* border:2px solid green; */
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:0.5rem;
  margin-top:0px;
  width:90%;
  margin:auto;
}
.foodand-p-1 img{
  width:25px;
}
.foodand-p-1 p{
  font-size:8px;
}
.popular{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.01em;
  color: #000000;
  padding-left:12px;
}
/* new dishes */
.newdishes{
  /* border:2px solid green; */
  width:90%;
  margin:auto;
  display:grid;
  gap:1rem;
  grid-template-columns: 1fr 1fr 1fr;
}
.dish{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width:90px;
  height:60px;
  border-radius: 20px;
  display:flex;
 
 
}
.dish p{
  background-color:rgba(0, 0, 0, 0.418);
  color:white;
  margin-top:auto;
  margin-bottom: 0px;
  
 
}
.pizza{
  background-image:url("@/assets/pizza.png");
}
.jollof{
  background-image:url("@/assets/jollof.png");
}
.spaghetti{
  background-image:url("@/assets/spaghetti.png");
}
.beef{
  background-image:url("@/assets/beef.png");
}
.moimoi{
  background-image:url("@/assets/moimoi.png");
}
.poundedyam{
  background-image:url("@/assets/pizza.png");
}
.special{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  padding-left:12px;
  /* border:2px solid green; */
  margin-bottom:0px;
}
.specail-offercontainer{
  /* border:2px solid green; */
  display:grid;
  grid-template-columns: 40% 60%;
  margin-top:0px;
}
.specialoffer-food{
  /* border:2px solid red; */
  display:grid;
  justify-content: center;
  align-content: center;
 
}
.specialoffer-food img{
  width:90px;

}
/* .specialoffer-text{
border:2px solid yellow;
} */
.specialoffer-name{
 margin:0px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
 
}
.specialoffer-details{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin:5px;
  color: rgba(0, 0, 0, 0.5);
}
.specialoffer-price{
  font-size:10px;
}
/* darkpart */
.darkpart{
  /* border:2px solid red; */
  padding:20px;
  background-color: black;
  width:93%;
 margin-left:-8px;
 border-radius: 15px;
 border-bottom-left-radius: 25px;
 border-bottom-right-radius: 25px;
 display: flex;
 justify-content: space-around;
 align-content: center;
}
@media screen and (max-width: 900px){
  .the-text{
  /* border:2px solid red; */
  text-align: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 34px;
  letter-spacing: 0.03em;
  color: #000000;
}
.thelong-input{
  border:1px solid black;
  outline: none;;
  width:205px;
  padding:1.7% 1%;
  position: relative;
}
.thelong-input:placeholder-shown{
  opacity: 0.5;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 10px;

  
}
.input-and-tag{
  /* border:2px solid red; */
  position: relative;
}
.location-tag{
  /* border:2px solid green; */
  position:absolute;
  top:1px;
  left:57%;
  width:13px;
}
/* side by side  */
.side-by-side{
  /* border:2px solid green; */
  display:grid;
  grid-template-columns: 1fr 1fr;
  margin-top:5%;
}
/* .side-text{
  border:2px solid yellow;
 

} */
.side-text p{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #000000;
  /* border:2px solid red; */
  margin-top:0px;
  
}
/* .side-image{
  border:2px solid blue;

} */
.side-image img{
  width: 159px;
  height: 109px;
}
/* next side  */
/* .chosing-service{
  border:2px solid red;
} */
.first-text{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 44px;
  letter-spacing: 0.03em;
}
.imagesandtext{
  /* border:2px solid yellow; */
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:2rem;
  justify-content: center;
  align-content: center;
  
}

.foodand-p img{
  /* border:2px solid red; */
  margin-left:20%;
  width:60px;
}
.resturants{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 23px;
  letter-spacing: 0.03em;
  margin-bottom: 0px;
  /* border:2px solid red; */
  text-align: center;
  width:90%;
  margin:auto;
}
.locations{
  /* border:2px solid green; */
  width:90%;
  margin:10px auto;
  font-size: 10px;
  margin-top: 0px;
  text-align: center;
}



/* the phone like section */
.doublephone-secction{
  /* border:2px solid green; */
  margin:7% 0%;
  display:grid;
  grid-template-columns: 3fr 5fr 5fr;
}
/* .text-and-playstore{
  border:2px solid red;
} */
.text-and-playstore p{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  margin-top:30%;
  line-height: 10px;
  letter-spacing: 0.03em;
  color: #000000;
  /* border:2px solid green; */

}
.text-and-playstore img{
  width: 50px;
  height: 43px;
  /* border:2px solid red; */
  margin:auto 0px;
}
/* .thediv-for-phone{
  border:2px solid red;
} */
.phone-like1{
  /* border:2px solid blue; */
  width:95%;
  margin:auto;
  padding-bottom: 30px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
  
  /* background-image:url("@/assets/bg-smallphone.png"); */
}
.phonescreen{
  background-image:url("@/assets/bg-smallphone.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width:100%;
  height:220px;
  border-radius: 30px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

}
.thetime-and-wifi{
  border:2px solid green;
  width:95%;
  margin:auto;
  display:grid;
  grid-template-columns:9fr 3fr;
  margin-top:20px;
}
.time{
  /* border:2px solid red; */
  width:10px;
}
.time p{
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 8px;
line-height: 10px;
display: flex;
align-items: center;
justify-content:center;
letter-spacing: 0.01em;
color: #FFFFFF;
/* border:2px solid green; */
}
.networkandothers{
  /* border:2px solid green; */
  display:flex;
  justify-content:space-around;
  align-items:center;
}
.networkandothers img{
  /* border:2px solid green; */
  width:10px;
  

}
.phone-bigtext{
  width:100%;
  /* border:2px solid green; */
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #000000;
  text-align:center;
  margin-top:20px;

}
.phone-smalltexttext{
  width:80%;
  /* border:2px solid green; */
  margin:auto;
  margin-top:35px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 12px;
  letter-spacing: 0.03em;
  color: #000000;
}
.smalldot-section{
  /* border:2px solid yellow; */
  width:40%;
  margin:auto;
  margin-top:40px;
  display:flex;
 justify-content: space-between;
 align-content:center;
}
.smalldot{
  border:none;
  background: rgba(0, 0, 0, 0.5);
  width:0px;
  padding:3px 3px;
  border-radius:50px;
  cursor:pointer;
}
.smalldot:hover{
  background: #FFA500;
}
.the-phonelike-btn{
  background: #FFA500;
  border-radius: 20px;
  width:80%;
  padding:3px 0px;
  margin-left:10%;
  margin-top:10%;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 17px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
  border:none;
}
.theskip{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 27px;
  letter-spacing: 0.03em;
  color: #000000;
  margin-bottom: 9%;
  margin-top: 9%;
  /* border:2px solid green; */
  text-align: center;
}


/* the second phone like */
.second-phonelike{
   /* border:2px solid blue; */
   width:90%;
  margin:auto;
  padding-bottom: 30px;
  padding:0% 2%;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
}
.thetime-and-wifi-2{
  /* border:2px solid white; */
  width:95%;
  margin:auto;
  display:grid;
  grid-template-columns:9fr 3fr;
}
.time-2{
  /* border:2px solid red; */
  width:50px;
  color:black;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 8px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
}
.thesearch-and-tag{
  /* border:2px solid green; */
  width:95%;
  margin:auto;
  display:grid;
  grid-template-columns: 1fr 13fr 1fr;
  margin-top: 0px;

}
.thesearch-and-tag img{
  /* border:2px solid green; */
  width:10px;
}
.thesearch-and-tag p{
  /* border:2px solid yellow; */
  margin:0px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  text-align: center;
  line-height: 22px;
  letter-spacing: 0.03em;
  color: #000000;


}
.food-display {
  /* border:2px solid green; */
  display:flex;
  justify-content: center;
  align-content: center;
  margin-top:2%;

}
.food-display img{
  width:120px;
  /* border:2px solid green */
}
.explore{
  /* border:2px solid red; */
  padding-left:14px;
  font-family: 'Inknut Antiqua';
  font-style: normal;
  font-weight: 400;
  font-size: 5px;
  padding:0px;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #C47F00;
  margin-top: 5px;
  margin-bottom: 0px;
}
.choose{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height:8px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #000000;
  padding-left:14px;
  /* border:2px solid red; */
  margin-bottom: 8px;
  margin-top: 0px;
}
.the-tiny-food{
  /* border:2px solid green; */
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:0.5rem;
  margin-top:0px;
  width:90%;
  margin:auto;
}
.foodand-p-1 img{
  width:15px;
}
.foodand-p-1 p{
  font-size:5px;
}
.popular{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 14px;
  letter-spacing: 0.01em;
  color: #000000;
  padding-left:12px;
}
/* new dishes */
.newdishes{
  /* border:2px solid green; */
  width:90%;
  margin:auto;
  display:grid;
  gap:0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
}
.dish{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width:30px;
  height:30px;
  border-radius: 20px;
  display:flex;
 
 
}
.dish p{
  background-color:rgba(0, 0, 0, 0.418);
  color:white;
  margin-top:auto;
  margin-bottom: 0px;
  font-size:8px;
  
 
}
.pizza{
  background-image:url("@/assets/pizza.png");
}
.jollof{
  background-image:url("@/assets/jollof.png");
}
.spaghetti{
  background-image:url("@/assets/spaghetti.png");
}
.beef{
  background-image:url("@/assets/beef.png");
}
.moimoi{
  background-image:url("@/assets/moimoi.png");
}
.poundedyam{
  background-image:url("@/assets/pizza.png");
}
.special{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 17px;
  padding-left:12px;
  /* border:2px solid green; */
  margin-bottom:0px;
}
.specail-offercontainer{
  /* border:2px solid green; */
  display:grid;
  grid-template-columns: 40% 60%;
  margin-top:0px;
}
.specialoffer-food{
  /* border:2px solid red; */
  display:grid;
  justify-content: center;
  align-content: center;
 
}
.specialoffer-food img{
  width:50px;

}
/* .specialoffer-text{
border:2px solid yellow;
} */
.specialoffer-name{
 margin:0px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 13px;
 
}
.specialoffer-details{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  margin:5px;
  color: rgba(0, 0, 0, 0.5);
}
.specialoffer-price{
  font-size:10px;
}
/* darkpart */
.darkpart{
  /* border:2px solid red; */
  padding:10px;
  background-color: black;
  width:90%;
 margin-left:-4px;
 border-radius: 8px;
 border-bottom-left-radius: 25px;
 border-bottom-right-radius: 25px;
 display: flex;
 justify-content: space-around;
 align-content: center;
}
.darkpart svg{
  width:10px;
}

}
</style>
