<script setup>
import navBar from "@/components/navBar.vue"
import footerPage from '@/components/footerPage.vue'

</script>

<template>
  <navBar/>
  <div class="the-structures">
    <div class="expre-search">
      <p>Explore different varieties</p>
      <input type="text">
    </div>
    <div class="themini-menu">
      <ul>
        <li>All</li>
        <li>Rice</li>
        <li>spaghetti</li>
        <li>swallow</li>
        <li>ice cream</li>
        <li>Pastry</li>
      </ul>
    </div>
    <p class="little-specials">special offer today</p>
    <div class="fooddetails-price">
      <div class="bigfooddetail-div">
        <img src="@/assets/pizza-dod.png" alt="">
        <div class="name-and-plussign">
          <p>dodo pizza</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="url(#pattern0)"/>
          </mask>
          <g mask="url(#mask0_39_527)">
          <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
          </g>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
          </pattern>
          <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
          </defs>
          </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/burger-king.png" alt="">
        <div class="name-and-plussign">
          <p>burger King</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="url(#pattern0)"/>
          </mask>
          <g mask="url(#mask0_39_527)">
          <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
          </g>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
          </pattern>
          <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
          </defs>
          </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/dominos.png" alt="">
        <div class="name-and-plussign">
          <p>dominos special</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_39_527)">
            <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
     
    </div> 

    <!-- featured Restaurant  -->
    <p class="little-specials">Featured Resturant</p>
    <div class="fooddetails-price">
      <div class="bigfooddetail-div">
        <img src="@/assets/one.png" alt="">
        <div class="name-and-plussign">
          <p>dodo pizza</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="url(#pattern0)"/>
          </mask>
          <g mask="url(#mask0_39_527)">
          <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
          </g>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
          </pattern>
          <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
          </defs>
          </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/two.png" alt="">
        <div class="name-and-plussign">
          <p>burger King</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="url(#pattern0)"/>
          </mask>
          <g mask="url(#mask0_39_527)">
          <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
          </g>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
          </pattern>
          <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
          </defs>
          </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/three.png" alt="">
        <div class="name-and-plussign">
          <p>dominos special</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_39_527)">
            <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
     
    </div> 
    <!-- All Restaurant -->
    <p class="little-specials">All Restaurant</p>
    <div class="fooddetails-price push-down">
      <div class="bigfooddetail-div">
        <img src="@/assets/four.png" alt="">
        <div class="name-and-plussign">
          <p>dodo pizza</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="url(#pattern0)"/>
          </mask>
          <g mask="url(#mask0_39_527)">
          <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
          </g>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
          </pattern>
          <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
          </defs>
          </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/five.png" alt="">
        <div class="name-and-plussign">
          <p>burger King</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="url(#pattern0)"/>
          </mask>
          <g mask="url(#mask0_39_527)">
          <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
          </g>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
          </pattern>
          <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
          </defs>
          </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/six.png" alt="">
        <div class="name-and-plussign">
          <p>dominos special</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_39_527)">
            <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/seven.png" alt="">
        <div class="name-and-plussign">
          <p>dominos special</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_39_527)">
            <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/vegi-soup.png" alt="">
        <div class="name-and-plussign">
          <p>dominos special</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_39_527)">
            <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/meetpie.png" alt="">
        <div class="name-and-plussign">
          <p>dominos special</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_39_527)">
            <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/pizzathings.png" alt="">
        <div class="name-and-plussign">
          <p>dominos special</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_39_527)">
            <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/eleventh.png" alt="">
        <div class="name-and-plussign">
          <p>dominos special</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_39_527)">
            <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div>
      <div class="bigfooddetail-div">
        <img src="@/assets/twelveth.png" alt="">
        <div class="name-and-plussign">
          <p>dominos special</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_39_527" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_39_527)">
            <rect x="-5.25" y="0.25" width="34.5" height="25.25" fill="#FFA500"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_39_527" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_39_527" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVR4nO3dSzIDUQBG4YNkhrILyRIsQFkJmyGyDCuIxzrYAGMjbSSDGMQQcW8ev06fr+qO1E3re3SX7rxAkiRJkiRJ+rshcA08Ae/AbMvHO/AIjIDBCtavWh8YA1Pyi5IaU+YhekuuZbE+cLfEL75t45YNRxivYSfaPkZLrWiBId0+7fw0psBx6WLulk4ALgic81qgB5yXTqoJcFoxpyvOSifsVGykAfYr5nVBAxyWTKgJMFvDY7bJSve/5hSkFTJAmAHCDBBmgDADhBkgrI23FLbqOsQjIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgLDE8wGL7uenH3+jzyd4BIQZIMwAYQYIM0CYAcIMEJa4Dlj2/2xfF6TVMUCYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgrI3vE27V/f5FPALCDBBmgDADhBkgzABhBgiruQ5ogINffr7u1///Z2+lE2qOgJeKOV3xXDqhJsBDxZyuuN/ERgb48fXfjQ8qPr5+r3QC8AocAScVc7fZGLjZ1MZ6wIT8X91/GRMCNzZ7zL+2o8unoylwSfiu8gC4Yv7VTg35RVn3aL729ZKKc74kSZIkSZK66xOfz2UG8Qm1OAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
        </div>
        <p class="colorchange-time">&#8358; 2,000|10-20 mins</p>
      </div> 
    </div> 
    <div class="big-btn-buttom">
        <button class="btn-at-the-end">Loading more ...</button>
    </div>
  </div>
  <footerPage/>

</template>

<style>
.the-structures{
  padding:0px 20px;
}
.expre-search{
  /* border:2px solid green; */
  display:grid;
  grid-template-columns: 4fr 9fr;
  width:90%;
  margin:auto;
  margin-top:5%;
}
.expre-search p{
  /* text-align: center; */
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  /* identical to box height */
  letter-spacing: 0.02em;
  color: #000000;
}
.expre-search input{
  border:1px solid black;
  width:50%;
  padding:0px;
  margin:12px 0px;
  outline: 0px;
}
.themini-menu{
  /* border:2px solid red; */
 padding-left:18px;

}
.themini-menu ul{
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:65%;
  /* border:2px solid yellow */
}
.themini-menu li{
  list-style:none;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: #000000;

}
.themini-menu li:hover{
  background-color: #FFA500;
}
.little-specials{
  /* border:2px solid red; */
  width:91%;
  margin:auto;
  margin-top:3%; 
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: #000000;
  text-transform: capitalize;
  margin-bottom:10px;

}
/* the food aspect */
.fooddetails-price{
  /* border:2px solid red; */
  width:92%;
  margin:auto;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:3rem;
  margin-bottom:2%;
}
/* .bigfooddetail-div{
  border:2px solid yellow;
} */
.bigfooddetail-div img{
  width:100%;
  /* border:2px solid green; */
  border: 1px solid #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.name-and-plussign{
  /* border:2px solid green; */
  display:flex;
  justify-content:space-between;
  align-content:center;
  width:70%;
  /* padding:0px; */
}
.name-and-plussign p{
  /* border:2px solid red; */
  margin:0px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
}
.name-and-plussign svg{
  margin-top:3px;
  /* border:2px solid red; */
}
.colorchange-time{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #FFA500;
  /* border:2px solid red; */
  margin:0px;
}
/* .push-down{
  border:2px solid green;
} */
.big-btn-buttom{
  /* border:2px solid yellow; */
  width:90%;
  margin:auto;
  display:flex;
  justify-content:center;
  align-items:center;
}
.btn-at-the-end{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 33px;
  margin:6% 0px;
  margin-top:8%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;

}
@media screen and (max-width: 900px){
  .the-structures{
  padding:0px 20px;
}
.expre-search{
  /* border:2px solid green; */
  display:grid;
  grid-template-columns: 6fr 7fr;
  width:90%;
  margin:auto;
  margin-top:5%;
}
.expre-search p{
  /* text-align: center; */
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  /* identical to box height */
  letter-spacing: 0.02em;
  /* border:2px solid green; */

  color: #000000;
}
.expre-search input{
  border:1px solid black;
  width:50%;
  padding:0px;
  margin:12px 0px;
  outline: 0px;
}
.themini-menu{
  /* border:2px solid red; */
 padding-left:0px;

}
.themini-menu ul{
 display:flex;
 justify-content: space-between;
  align-content: center;
  margin:0px;
  width:80%;
  /* border:2px solid yellow; */
  padding-left:4%;
}
.themini-menu li{
  list-style:none;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: #000000;
  /* border:2px solid yellow */


}
.themini-menu li:hover{
  background-color: #FFA500;
}
.little-specials{
  /* border:2px solid red; */
  width:91%;
  margin:auto;
  margin-top:3%; 
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 34px;
  letter-spacing: 0.02em;
  color: #000000;
  text-transform: capitalize;
  margin-bottom:10px;
}
/* the food aspect */
.fooddetails-price{
  /* border:2px solid red; */
  width:92%;
  margin:auto;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:1rem;
  margin-bottom:2%;
}
/* .bigfooddetail-div{
  border:2px solid yellow;
} */
.bigfooddetail-div img{
  width:100%;
  /* border:2px solid green; */
  border: 1px solid #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.name-and-plussign{
  /* border:2px solid green; */
  display:flex;
  justify-content:space-between;
  align-content:center;
  width:90%;
  /* padding:0px; */
}
.name-and-plussign p{
  /* border:2px solid red; */
  margin:0px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #000000;
}
.name-and-plussign svg{
  margin-top:0px;
  width:17px;
  /* border:2px solid red; */
}
.colorchange-time{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #FFA500;
  /* border:2px solid red; */
  margin:0px;
}
/* .push-down{
  border:2px solid green;
} */
.big-btn-buttom{
  /* border:2px solid yellow; */
  width:90%;
  margin:auto;
  display:flex;
  justify-content:center;
  align-items:center;
}
.btn-at-the-end{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 33px;
  margin:6% 0px;
  margin-top:8%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;

}
}
</style>
