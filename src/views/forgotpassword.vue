<template>
    <div class="signup-structure">
        <div class="forgot-picture">
            <p>Mega stop Food</p>
        </div>
        <div class="the-signup-nav the-signup-nav-2">
            <div class="the-listdiv-3">
                <ul>
                    <li><RouterLink to="/signup">Signup</RouterLink></li>
                    <li><RouterLink to="/loginpage">login</RouterLink></li>
                    <li><RouterLink to="/Homepagepage">Home</RouterLink></li>
                
             
                <li>Order now</li>
                <li>Help</li>
                </ul>
            </div>
            <h3 class="thetopic">Recover your password</h3>
            <p class="little-comment-2">you can request password reset below .please ensure you provide a correct email adress</p>
            <form action="" class="signup-form">
              
                <div class="signup-labeland-input-2">
                    <input type="text" placeholder="chioma12198@gmail.com">
                    <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.88281 19H0.34375V1.86719H9.88281V3.625H2.33594V9.16797H9.44922V10.9023H2.33594V17.2422H9.88281V19ZM18.197 19.2344C16.572 19.2344 15.283 18.6797 14.3298 17.5703C13.3845 16.4609 12.9119 14.8125 12.9119 12.625C12.9119 10.4141 13.3962 8.74609 14.365 7.62109C15.3337 6.48828 16.6228 5.92188 18.2322 5.92188C18.9119 5.92188 19.5056 6.01172 20.0134 6.19141C20.5212 6.37109 20.9587 6.61328 21.3259 6.91797C21.6931 7.21484 22.0017 7.55469 22.2517 7.9375H22.3923C22.3611 7.69531 22.3298 7.36328 22.2986 6.94141C22.2673 6.51953 22.2517 6.17578 22.2517 5.91016V0.765625H24.197V19H22.6267L22.3337 17.1719H22.2517C22.0095 17.5547 21.7009 17.9023 21.3259 18.2148C20.9587 18.5273 20.5173 18.7773 20.0017 18.9648C19.4939 19.1445 18.8923 19.2344 18.197 19.2344ZM18.5017 17.6172C19.8767 17.6172 20.8494 17.2266 21.4197 16.4453C21.99 15.6641 22.2752 14.5039 22.2752 12.9648V12.6133C22.2752 10.9805 22.0017 9.72656 21.4548 8.85156C20.9158 7.97656 19.9314 7.53906 18.5017 7.53906C17.3064 7.53906 16.4119 8 15.8181 8.92188C15.2244 9.83594 14.9275 11.0859 14.9275 12.6719C14.9275 14.25 15.2205 15.4688 15.8064 16.3281C16.4002 17.1875 17.2986 17.6172 18.5017 17.6172ZM30.5073 6.15625V19H28.562V6.15625H30.5073ZM29.5581 1.35156C29.8784 1.35156 30.1519 1.45703 30.3784 1.66797C30.6128 1.87109 30.73 2.19141 30.73 2.62891C30.73 3.05859 30.6128 3.37891 30.3784 3.58984C30.1519 3.80078 29.8784 3.90625 29.5581 3.90625C29.2222 3.90625 28.9409 3.80078 28.7144 3.58984C28.4956 3.37891 28.3862 3.05859 28.3862 2.62891C28.3862 2.19141 28.4956 1.87109 28.7144 1.66797C28.9409 1.45703 29.2222 1.35156 29.5581 1.35156ZM39.0208 17.6406C39.3411 17.6406 39.6692 17.6133 40.0052 17.5586C40.3411 17.5039 40.6145 17.4375 40.8255 17.3594V18.8711C40.5989 18.9727 40.2825 19.0586 39.8763 19.1289C39.4778 19.1992 39.0872 19.2344 38.7044 19.2344C38.0247 19.2344 37.4075 19.1172 36.8528 18.8828C36.2981 18.6406 35.8528 18.2344 35.5169 17.6641C35.1888 17.0938 35.0247 16.3047 35.0247 15.2969V7.67969H33.1966V6.73047L35.0364 5.96875L35.8098 3.17969H36.9817V6.15625H40.7434V7.67969H36.9817V15.2383C36.9817 16.043 37.1653 16.6445 37.5325 17.043C37.9075 17.4414 38.4036 17.6406 39.0208 17.6406Z" fill="#FFA500"/>
                    </svg>

                </div>

                <button class="sign-up">Login</button>
                <div class="under-btns-login">
                    <!-- <p class="under-login-btn"> Forgot passwoord ?</p> -->
                    <p class="lastunder-login-btn"> For further support you may visit the health center or contact out customer service team</p>
                </div>
            </form>


        </div>
       
    </div>
   
</template>
<style>
.signup-structure{
    /* border:2px solid #ffff00; */
    /* min-height: 99vh; */
    display:grid;
    grid-template-columns: 1fr 1fr;
}
.forgot-picture{
    /* border:2px solid green; */
    background-image: url("@/assets/forgotbg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.forgot-picture p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 54px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    /* border:2px solid red; */
    margin-top:0%;
    padding:0px 10px;
}
/* .the-signup-nav{
    border:2px solid blue;
} */
.the-listdiv-3{
  display:flex;
  justify-content:flex-end;
  align-content:flex-end;
  padding:0px 0px;

}
.the-listdiv-3 ul{
  /* border:2px solid red; */
  display:flex;
  width:100%;
  padding:5px 0px;
  justify-content: space-around;
  align-items:last baseline;
}
.the-listdiv-3 li{
    /* border:2px solid green; */
    list-style: none;
    padding:5px 0px;
    /* font-size: 10px; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: #000000;
 
}
.the-listdiv-3 li a{
    /* border:2px solid green; */
    color:black;
    text-decoration: none;

}
.the-listdiv-3 li:hover{
  border:2px solid #FFA500;
  color:#FFA500;
  border-left: none;
  border-right: none;
  border-top: none;
}
.the-persons-name{
  /* border:2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.the-svgs{
  /* border:2px solid blue; */
  width:100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.the-svgs svg{
  /* border:2px solid yellow; */
  align-self: center;
}
/* the body parts */
.thetopic{
    /* border:2px solid red; */
    padding:0% 6%;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.02em;
    color: #000000;
    margin:4% 0%;
}
.sign-up{
    background: #FFA500;
    border: 1px solid rgba(219, 216, 216, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin:5% 0%;
    padding:15px 10px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    width:90%;
    cursor: pointer;
  
}
.little-comment-2{
    /* border:2px solid blue; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    width:85%;
    line-height: 30px;
    padding:0% 6%;
    letter-spacing: 0.015em;
    color: #000000;
    margin:4% 0%;
}
.little-comment span{
    color:#FFA500;
    border:3px solid #FFA500;
    border-left:none;
    border-right:none;
    border-top:none;
    
}
.signup-labeland-input-2{
    /* border:2px solid red; */
    position: relative;

}
.signup-labeland-input-2 svg{
    /* border:2px solid red; */
    width:30px;
    position: absolute;
    top:20px;
    left:80%;

}
.signup-labeland-input label{
    display:block;
    /* border:2px solid yellow; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 33px;
    color: #000000;
}
.signup-labeland-input-2 input{
    background: #E6E4E3;
border: 1px solid rgba(227, 224, 224, 0.5);
    width:85%;
    padding:15px;
    outline:none;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: rgba(0, 0, 0, 0.5);
    

}
.signup-form{
    /* border:2px solid yellow; */
    width:90%;
    margin:auto;
}
.the-signup-p{
    /* border:2px solid red; */
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    display:flex;
    align-content: center;

    
}
.the-signup-p svg{
    /* border:2px solid green; */
    width:25px;
    margin-top:6px;
    
  
}
.under-btns-login{
   margin-bottom: 10%;
}
.under-login-btn{
    color:#FFA500;
    /* border:2px solid red; */
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */
    letter-spacing: 0.01em;
}
.lastunder-login-btn{
    font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
text-align: center;
letter-spacing: 0.015em;
color: #000000;
}
@media screen and (max-width: 900px){
    .signup-structure{
    /* border:2px solid #ffff00; */
    /* min-height: 99vh; */
    display:grid;
    grid-template-columns: 1fr ;
    
}
.forgot-picture{
    /* border:2px solid green; */
    background-image: url("@/assets/forgotbg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 80vh;
}
.the-signup-nav-2{
    min-height: 80vh;
}
.login-picture p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 54px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    /* border:2px solid red; */
    text-align:center;
    margin-top:20%;
    
    
}
.thetopic{
    /* border:2px solid red; */
    padding:0% 6%;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 46px;
    letter-spacing: 0.02em;
    color: #000000;
    margin:4%;
}
}
</style>