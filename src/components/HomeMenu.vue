<template>
    <div class="container p-0">
        <img class="transparent" src="../assets/bg-1.jpg" alt=""  style="width:100%;">
        <div class="top-left pl-4 pr-4 pt-2"> 
            <h3 class="text-black" ><b>Expresso Based</b></h3>
        </div>
        <div class="menu">
            <ol class="text-black">
                <li>ESPRESSO SINGLE/DOUBLE</li>
                <li>CAPPUCINO</li>
                <li>MOCHACHINO</li>
                <li>LONG BLACK</li>
                <li>AMERICANO</li>
                <li>KOPI SUSU</li>
                <li>KOPI GULA AREN</li>
                <li>KOPI PANDAN</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeMenu",

}
</script>

<style>
.text-position {
    text-align: center;
}
 
.container {
  position: relative;
  text-align: center;
  color: white;
}

.text-black {
    color: black;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 32px;
  background-color: #f1f2f6;
  opacity: 0.8;
}

.menu {
  position: absolute;
  top: 60px;
  left: 32px;
  background-color: #f1f2f6;
  /* opacity: 0.8; */
}

.transparent {
    opacity :0.7;
}

</style>