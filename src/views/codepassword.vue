<template>
    <div class="signup-structure">
        <div class="codepart-picture">
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
            <h3 class="thetopic">Reset password</h3>
            <p class="little-comment">insert your new Megastop food password </p>
            <form action="" class="signup-form downward" >
                <div class="thecode-forgot">
                    <input class="code-input" type="text">
                    <input class="code-input" type="text">
                    <input class="code-input" type="text">
                    <input class="code-input" type="text">
                </div>
                
                <button class="sign-up">Change password</button>
                <p class="little-comment commeting">Didnt recieve the verification code? Request a new code in  <span>10 seconds</span></p>
                <p class="lastunder-login-btn"> For further support you may visit the health center or contact out customer service team</p>
            </form>


        </div>
       
    </div>
   
</template>
<style>
.downward{
    /* border:2px solid red; */
    padding: 5% 0%;

}
.signup-structure{
    /* border:2px solid #ffff00; */
    /* min-height: 99vh; */
    display:grid;
    grid-template-columns: 1fr 1fr;
}
.codepart-picture{
    /* border:2px solid green; */
    background-image: url("@/assets/kabardthing.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.codepart-picture p{
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
/* thecodedpart */
.thecode-forgot{
    /* border:2px solid red; */
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-content: center;
}
.code-input{
    border:1px solid black;
    width:10%;
    padding:20px 10px;
    outline:none;
}
.commeting{
    /* border:2px solid red; */
    text-align: center;
   
}
/* thecodedpart */
.thecode-forgot{
    /* border:2px solid red; */
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-content: center;
}
.code-input{
    border:1px solid black;
    width:10%;
    padding:20px 10px;
    outline:none;
}
.commeting{
    /* border:2px solid red; */
    text-align: center;
   
}
@media screen and (max-width: 900px){
    .signup-structure{
    /* border:2px solid #ffff00; */
    /* min-height: 99vh; */
    display:grid;
    grid-template-columns: 1fr ;
    
}
.forgotpic-picture{
    /* border:2px solid green; */
    background-image: url("@/assets/kabardthing.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
}
.signup-picture p{
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