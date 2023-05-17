<template>
    <div>
        <div class="container">
            <div class="footerdiv">
                <ul>
                    <li class="headli-footer">City</li>
                    <li>lagos</li>
                    <li>Abuja</li>
                    <li>Ibadan</li>
                    <li>port harcout</li>
                    <li>Lekki phase 1</li>
                    <li>Victoria islands</li>
                    <li>Yaba</li>
                    <li>YAgege</li>
                </ul>
                <ul>
                    <li class="headli-footer">Contact</li>
                    <li>hello@megastopfood.com</li>
                </ul>
                <ul>
                    <li class="headli-footer">Explore</li>
                    <li>About</li>
                    <li>FAQS</li>
                    <li>careers</li>
                    <li>privacy policy</li>
                    <li>Tems of use </li>
                    <li>Victoria islands</li>
                    <li>Yaba</li>
                    <li>YAgege</li>
                </ul>
                <ul>
                    <li class="headli-footer">Follow Us</li>
                    <li> <img src="@/assets/instagram.png" alt="">  @megastopfood</li>
                    <li><img src="@/assets/twitter.png" alt=""> @megastopfood</li>
                    <li><img src="@/assets/facebook.png" alt="">@megastopfood</li>
                </ul>
            </div>
            <div class="last-footer-div">
                <p class="p-footer">2021 MegaStop Food-All Rights reserved.</p>
            </div>
        </div>
    </div>
</template>
<style>
.container{
    /* border:2px solid green; */
    background-color:black;
}
.footerdiv{
    /* border:2px solid red; */
    /* background-color:black; */
    color:white;
    display:flex;
    justify-content: space-around;
    align-self: center;
    width:80%;
    margin:auto;
    padding:1% 0%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.01em;
}
.footerdiv ul{
    /* border:2px solid green; */
    margin-bottom: 3%;
}
.footerdiv li{
   /* margin:10px 0px; */
   /* border:2px solid red; */
   padding:3px 0px;
   list-style: none;
}
.footerdiv img{
    width:20px;
    height:20px;
}
.headli-footer{
    /* color:green; */
    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #FFA500;


}
.last-footer-div{
    /* border:2px solid green; */
    width:80%;
    margin: auto;
    padding-bottom: 5px;

}
.p-footer{
    color:white;
    padding-left: 8%;
}
@media screen and (max-width: 900px){
    .container{
    /* border:2px solid green; */
    background-color:black;
}
.footerdiv{
    /* border:2px solid red; */
    /* background-color:black; */
    color:white;
    display:flex;
    justify-content: space-around;
    align-self: center;
    width:80%;
    margin:auto;
    padding:1% 0%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 5px;
    line-height: 8px;
    letter-spacing: 0.01em;
}
.footerdiv ul{
    /* border:2px solid green; */
    margin-bottom: 3%;
}
.footerdiv li{
   /* margin:10px 0px; */
   /* border:2px solid red; */
   padding:3px 0px;
   list-style: none;
}
.footerdiv img{
    width:15px;
    height:15px;
}
.headli-footer{
    /* color:green; */
    margin-bottom: 10px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #FFA500;


}
.last-footer-div{
    /* border:2px solid green; */
    width:80%;
    margin: auto;
    padding-bottom: 5px;

}
.p-footer{
    color:white;
    padding-left: 8%;
    font-size: 10px;
}
}
</style>