<script setup>

</script>

<template>
  <div class="navigations">
    <div class="the-nav-part">
      <div class="the-title">
        <h3>Mega Stop Food</h3>
      </div>
      <div class="the-listdiv">
        <ul>
          <li><RouterLink to="/signup">Signup</RouterLink></li>
          <li><RouterLink to="/loginpage">login</RouterLink></li>
          <li><RouterLink to="/Homepagepage">Home</RouterLink></li>
          <li>Order now</li>
          <li>Help</li>
        </ul>
      </div>
      <div class="the-persons-name"> 
        <div class="the-svgs">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="black"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="black"/>
          </svg>
          <p class="the-name">Amirat Akinola</p>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="black"/>
          </svg>
      </div>
      </div>
    </div>
  </div>
</template>

<style>
/* just some extra */
.the-listdiv li a{
    /* border:2px solid green; */
    color:black;
    text-decoration: none;

}
/* work starts here */
body{
  margin:0px 0px;
}
.the-nav-part{
  /* border:2px solid red; */
  width:90%;
  margin:auto;
  display:grid;
  grid-template-columns: 2fr 5fr 2fr;
}
.the-title{
  /* border:2px solid green; */
  text-align:center;
}
.the-title h3{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 28px;
  letter-spacing: 0.03em;
  /* border:2px solid red; */
  color: #000000;
}
.the-listdiv{
  display:flex;
  justify-content:flex-end;
  align-content:flex-end;
  padding:0px 0px;

}
.the-listdiv ul{
  /* border:2px solid red; */
  display:flex;
  width:90%;
  padding:5px 0px;
  justify-content: space-around;
  align-items:last baseline;
}
.the-listdiv li{
  /* border:2px solid green; */
  list-style: none;
  padding:5px 0px;
 
}
.the-listdiv li:hover{
  border:2px solid #FFA500;
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
@media screen and (max-width: 900px){
  body{
  margin:0px 0px;
}
.the-nav-part{
  /* border:2px solid red; */
  width:95%;
  margin:auto;
  display:grid;
  grid-template-columns: 2fr 5fr 2fr;
  margin-top:10px;
}
.the-title{
  /* border:2px solid green; */
  text-align:center;
}
.the-title h3{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 0.03em;
  color: #000000;
  /* border:2px solid green; */
  text-align:center;
}
.the-listdiv{
  display:flex;
  justify-content:flex-end;
  align-content:flex-end;
  padding:0px 0px;
  /* border:2px solid blue; */

}
.the-listdiv ul{
  /* border:2px solid red; */
  display:flex;
  width:100%;
  padding:5px 0px;
  margin:0px;
  justify-content: space-around;
  align-items:last baseline;

}
.the-listdiv li{
  /* border:2px solid green; */
  list-style: none;
  padding:5px 0px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 9px;
  letter-spacing: 0.01em;


 
}
.the-listdiv li:hover{
  border:4px solid #FFA500;
  border-left: none;
  border-right: none;
  border-top: none;
}
.the-persons-name{
  /* border:2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 7px;
  line-height: 8px;
  letter-spacing: 0.01em;
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
  width:10px;
}
}
</style>
