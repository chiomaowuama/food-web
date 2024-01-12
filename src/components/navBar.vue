<script setup>
import { ref } from "vue";

const navToggle = ref(false);
const smallscreennav = ref(false);
const isDragging = ref(false);

function startDrag() {
  isDragging.value = true;
  onDrag()
};

function stopDrag() {
  isDragging.value = false;
  
};
function onDrag() {
  if (isDragging.value) {
    const movementY = event.movementY;
    const navStyle = window.getComputedStyle(smallscreennav.value);
    const navTop =parseInt(navStyle.top);
    const navHeight = parseInt(navStyle.height);
    const windHeight = window.innerHeight;
    console.log(navHeight);
    // smallscreennav.value.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";

    // if (navTop > windHeight - navHeight) {
      // smallscreennav.value.style.top = `${windHeight - navHeight}px`;
    // }
    // console.log(navTop > windHeight - navHeight);
  }
  // console.log("hello");
}
function toggleNav(){
  navToggle.value = !navToggle.value;
}

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
          <li><RouterLink to="/loginpage">Login</RouterLink></li>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>Order now</li>
          <li>Help</li>
        </ul>
      </div>
      <!-- <div class="the-persons-name"> 
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
      </div> -->
              <!-- @mousedown="startDrag()" @mouseup="stopDrag()" @mouseleave="stopDrag()" @mousemove="onDrag()" -->
              <!-- @drag="startDrag()" @dragend="stopDrag()" @dragleave="stopDrag()" -->
      <div class="smallscreennav" ref="smallscreennav" @dragend="stopDrag()" @dragstart="onDrag()" @drag="startDrag()"  :class="{ 'open' : navToggle}" >
          <div class="nav-content">
            <div class="toggle-button" @click="toggleNav()" >
              <i class='bx bx-plus'></i>
            </div>
            <span style="--i:1;">
            <RouterLink to="/"><i class='bx bxs-home'></i></RouterLink>
          </span>
          <span style="--i:2;">
            <RouterLink to=""><i class='bx bxs-camera'></i></RouterLink>
          </span>
          <span style="--i:3;">
            <RouterLink to=""><i class='bx bxs-alarm'></i></RouterLink>
          </span>
          <span style="--i:4;">
            <RouterLink to=""><i class='bx bx-map'></i></RouterLink>
          </span>
          <span style="--i:5;">
            <RouterLink to=""><i class='bx bxs-cog'></i></RouterLink>
          </span>
          </div>
          
        </div>
    </div>
  </div>
</template>

<style>
/* body{
  overflow: hidden;
} */
/* .smallscreennav{
  border:2px solid green;
  position:absolute;
  top:300px;
  right:0;
  width:80px;
  height:300px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
}
.smallscreennav .nav-content{
  display: flex;
  align-items: center;
  justify-content: center;
  transform:rotate(-45deg)
}
.toggle-button{
  cursor:pointer;
}
.nav-content .toggle-button,
.nav-content span a{
  height:60px;
  width:60px;
  background: rgb(224, 223, 223);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:50%;
  box-shadow:0 0 20px rgba(0, 0, 0, 0.2) ;
}
.nav-content .toggle-button{
  font-size:35px ;
  color:#0e2431;
  z-index:100;
  cursor:pointer;
  transform:rotate(-225deg);
  transition: all 0.6s ease;
}
.smallscreennav.open .toggle-button{
  transform:rotate(0deg);
}
.nav-content span{
  position:absolute;
  transition: all 0.6s ease;
  opacity: 0;
}
.smallscreennav.open .nav-content span{
  transform:rotate(calc(var(--i) * (360deg/8))) translateY(120px);
  opacity: 1;
}
.nav-content span a{
  text-decoration: none;
  transform:rotate(45deg)
}
.nav-content span a i{
  font-size: 24px;
  color:#0e2431;
  transform:rotate(calc(var(--i) * (360deg/ -8)));
  opacity: 0.8;
  transition: 0.2s;
}
.nav-content span a:hover i{
  opacity: 1;
} */

/* the new nav */
.the-nav-part{
  /* border:2px solid red; */
}
/* just some extra */
.the-listdiv li a{
    /* border:2px solid green; */
    color:black;
    text-decoration: none;

}
/* work starts here */
.the-nav-part{
  /* border:2px solid red; */
}
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
  border:2px solid red;
  width:90%;
  margin:auto;
  display:grid;
  grid-template-columns: 5fr 7fr;
}
.the-title{
  border:2px solid green;
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
  border:2px solid red;
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
  .smallscreennav{
  /* border:2px solid green; */
  position:absolute;
  top:100px;
  right:0;
  width:50px;
  height:300px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
}
.smallscreennav .nav-content{
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform:rotate(-45deg); */

}
.toggle-button{
  cursor:pointer;
}
.nav-content .toggle-button,
.nav-content span a{
  height:50px;
  width:50px;
  background: rgb(224, 223, 223);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:50%;
  box-shadow:0 0 20px rgba(0, 0, 0, 0.2) ;
}
.nav-content .toggle-button{
  font-size:15px ;
  color:#0e2431;
  z-index:100;
  cursor:pointer;
  /* border:2px solid green; */
  transform:rotate(-225deg);
  transition: all 0.6s ease;
}
.smallscreennav.open .toggle-button{
  transform:rotate(0deg);
}
.nav-content span{
  position:absolute;
  transition: all 0.6s ease;
  opacity: 0;
}
.smallscreennav.open .nav-content span{
  transform:rotate(calc(var(--i) * (360deg/10))) translateY(120px);
  opacity: 1;
}
.nav-content span a{
  text-decoration: none;
  /* transform:rotate(-45deg); */
}
.nav-content span a i{
  
  font-size: 24px;
  color:#0e2431;
  transform:rotate(calc(var(--i) * (360deg/ -10)));
  opacity: 0.8;
  transition: 0.2s;
}
.nav-content span a:hover i{
  opacity: 1;
}

 /* the circle */
  body{
  margin:0px 0px;
}
.the-nav-part{
  /* border:2px solid red; */
  width:95%;
  margin:auto;
  display:grid;
  grid-template-columns: 5fr 7fr ;
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
