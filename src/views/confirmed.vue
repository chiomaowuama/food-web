<template>
    <div class="confirmed-structure">
        <div class="done-image">
            <img src="@/assets/donemark.png" alt="">
        </div>
        <p class="success">Successful</p>
        <p class="the-confirmed-text">thank you for choosing Megastop food your transaction is successful</p>
        <div class="the-done-btn">
            <button>Done</button>
        </div>
    </div>
</template>
<style >

.confirmed-structure{
    /* border:2px solid yellow; */
   min-height: 100vh;
   display:grid;
   justify-content: center;
   align-content: center;
  
   
   
}
.done-image{
    /* border:2px solid green; */
  
    /* width:50%; */
    display:flex;
    justify-content: center;
    align-content: center;
}
.the-confirmed-text{
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;

}
.success{
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    /* display: flex; */
    /* align-items: center; */
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;

}
.the-done-btn{
    /* border:2px solid red; */
    display:flex;
justify-content: center;
}
.the-done-btn button{
    background: #FFA500;
border: 1px solid rgba(219, 216, 216, 0.5);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding: 2% 30%;
align-self: center;
font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;

color: #FFFFFF;

/* transform: matrix(1, 0, 0, -1, 0, 0); */
}
@media screen and (max-width: 900px){
    .the-confirmed-text{
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;

}
}
</style>