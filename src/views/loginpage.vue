<template>
    <div class="signup-structure">
        <div class="login-picture">
            <p>Mega stop Food</p>
        </div>
        <div class="the-signup-nav">
            <div class="the-listdiv-3">
                <ul>
                    <li><RouterLink to="/signup">Signup</RouterLink></li>
                    <li><RouterLink to="/loginpage">login</RouterLink></li>
                    <li><RouterLink to="/Homepagepage">Home</RouterLink></li>
                
             
                <li>Order now</li>
                <li>Help</li>
                </ul>
            </div>
            <h3 class="thetopic">Welcome back!</h3>
            <p class="little-comment">Log back into your Megastop food account</p>
            <form action="" class="signup-form">
              
                <div class="signup-labeland-input">
                    <label for="">Email Addres</label>
                    <input type="text" placeholder="Enter your email here">
                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0667 0H3.01176C2.213 0 1.44694 0.316071 0.882126 0.87868C0.31731 1.44129 0 2.20435 0 3V13C0 13.7956 0.31731 14.5587 0.882126 15.1213C1.44694 15.6839 2.213 16 3.01176 16H17.0667C17.8654 16 18.6315 15.6839 19.1963 15.1213C19.7611 14.5587 20.0784 13.7956 20.0784 13V3C20.0784 2.20435 19.7611 1.44129 19.1963 0.87868C18.6315 0.316071 17.8654 0 17.0667 0V0ZM16.394 2L10.0392 6.75L3.68439 2H16.394ZM17.0667 14H3.01176C2.74551 14 2.49016 13.8946 2.30189 13.7071C2.11361 13.5196 2.00784 13.2652 2.00784 13V3.25L9.43686 8.8C9.61064 8.92982 9.822 9 10.0392 9C10.2564 9 10.4678 8.92982 10.6416 8.8L18.0706 3.25V13C18.0706 13.2652 17.9648 13.5196 17.7765 13.7071C17.5883 13.8946 17.3329 14 17.0667 14Z" fill="black" fill-opacity="0.5"/>
                    </svg>
                </div>
                <div class="signup-labeland-input">
                    <label for=""> Password</label>
                    <input type="text" placeholder="Enter your password here">
                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" fill="black" fill-opacity="0.5"/>
                    </svg>

                </div>

                <button class="sign-up">Login</button>
                <div class="under-btns-login">
                    <p class="under-login-btn"> Forgot passwoord ?</p>
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
.login-picture{
    /* border:2px solid green; */
    background-image: url("@/assets/loginbg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
.little-comment{
    /* border:2px solid blue; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
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
.signup-labeland-input{
    /* border:2px solid red; */
    position: relative;

}
.signup-labeland-input svg{
    /* border:2px solid red; */
    position: absolute;
    top:50px;
    left:83%;
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
.signup-labeland-input input{
    border: 1px solid rgba(0, 0, 0, 0.5);
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
.login-picture{
    /* border:2px solid green; */
    background-image: url("@/assets/forgotpbg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
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