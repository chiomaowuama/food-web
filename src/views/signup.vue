<template>
    <div class="signup-structure">
        <div class="signup-picture">
            <p>Mega stop Food</p>
        </div>
        <div class="the-signup-nav">
            <div class="the-listdiv-3">
                <ul>
                    <li><RouterLink to="/signup">Signup</RouterLink></li>
                    <li><RouterLink to="/loginpage">login</RouterLink></li>
                    <li><RouterLink to="/">Home</RouterLink></li>
                <li>Order now</li>
                <li>Help</li>
                </ul>
            </div>
            <h3 class="thetopic">Sign Up</h3>
            <p class="little-comment">Already have an account? <span>Login here </span></p>
            <form action="" class="signup-form">
                <div class="signup-labeland-input">
                    <label for="">Name</label>
                    <input type="text" placeholder="Enter your name here">
                </div>
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
                <div class="signup-labeland-input">
                    <label for="">Re-enter Password</label>
                    <input type="text" placeholder="Enter your password here">
                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" fill="black" fill-opacity="0.5"/>
                    </svg>

                </div>
                <div class="the-signup-p"><svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1H35C36.6368 1 38.1814 1.5587 39.299 2.51662C40.4118 3.47044 41 4.72803 41 6V30C41 31.272 40.4118 32.5296 39.299 33.4834C38.1814 34.4413 36.6368 35 35 35H7C5.36316 35 3.81861 34.4413 2.70104 33.4834C1.58824 32.5296 1 31.272 1 30V6C1 4.72803 1.58824 3.47044 2.70104 2.51662C3.81861 1.5587 5.36316 1 7 1ZM37.3007 32.1735C37.9382 31.627 38.3333 30.8498 38.3333 30V6C38.3333 5.15023 37.9382 4.37299 37.3007 3.82653C36.6679 3.28415 35.8385 3 35 3H7C6.16148 3 5.33207 3.28415 4.69929 3.82653C4.06175 4.37299 3.66667 5.15023 3.66667 6V30C3.66667 30.8498 4.06175 31.627 4.69929 32.1735C5.33207 32.7158 6.16148 33 7 33H35C35.8385 33 36.6679 32.7158 37.3007 32.1735Z" fill="#231F20" stroke="#3E3B3B" stroke-width="2"/>
                    <path d="M17.8069 20.0326L14.6774 16.5604C14.2968 16.1413 13.7376 15.869 13.1228 15.8034C12.508 15.7377 11.888 15.8841 11.3991 16.2104C10.9102 16.5366 10.5925 17.0159 10.516 17.5429C10.4394 18.0698 10.6102 18.6013 10.9908 19.0204L16.6608 25.2404C16.8805 25.4787 17.1607 25.671 17.4801 25.8027C17.7995 25.9344 18.1497 26.002 18.5041 26.0004C18.8604 25.9996 19.2119 25.9289 19.5314 25.7937C19.8509 25.6585 20.1301 25.4624 20.3474 25.2204L17.8069 20.0326ZM17.8069 20.0326L17.7308 20.1189L18.4808 20.7804L19.2236 20.1109L19.1466 20.0254L26.4188 11.7804H27.2774H27.3008L17.8069 20.0326ZM28.0507 11.4418L28.1656 11.3116C28.3624 11.1538 28.6311 11.036 28.9454 10.9997C29.3429 10.9538 29.7312 11.0485 30.0203 11.2374C30.3064 11.4244 30.4483 11.6685 30.4826 11.887C30.5161 12.1002 30.4561 12.3393 30.2636 12.5557L30.2633 12.5561L19.6034 24.5522C19.6029 24.5527 19.6024 24.5533 19.6019 24.5538C19.4892 24.6788 19.3343 24.7913 19.1417 24.8728C18.9482 24.9547 18.7289 24.9999 18.502 25.0004L18.4995 25.0004C18.2739 25.0014 18.0551 24.9581 17.8613 24.8782C17.6683 24.7987 17.5122 24.688 17.3976 24.5643L11.731 18.348C11.7309 18.3479 11.7308 18.3477 11.7306 18.3476C11.5367 18.1338 11.475 17.8972 11.5056 17.6867C11.5369 17.4712 11.6738 17.2292 11.9541 17.0422C12.2377 16.8529 12.6214 16.7555 13.0167 16.7977C13.4114 16.8399 13.7359 17.0117 13.9361 17.2315C13.9364 17.2319 13.9368 17.2323 13.9372 17.2327L17.7379 21.4498L18.4888 22.283L19.2307 21.4418L28.0507 11.4418Z" fill="#231F20" stroke="#3E3B3B" stroke-width="2"/>
                    </svg>
                    <p> by signing up you argree to recieve updates and special offers</p>
                </div>
                <button class="sign-up">Sign up</button>
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
.signup-picture{
    /* border:2px solid green; */
    background-image: url("@/assets/signupbg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
@media screen and (max-width: 900px){
    .signup-structure{
    /* border:2px solid #ffff00; */
    /* min-height: 99vh; */
    display:grid;
    grid-template-columns: 1fr ;
    
}
.signup-picture{
    /* border:2px solid green; */
    background-image: url("@/assets/signupbg.png");
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