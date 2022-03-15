<template>
    <div class="container p-0">
        <img class="transparent-8" src="../assets/bgc-image.jpg" style="width:100%;">
        <div class="centered"> 
            <h1 class="text-white" >Rintis Coffee</h1>
            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeTitle",

}
</script>

<style>
.text-position {
    text-align: center;
}

.line-up {
      animation: anim-lineUp ease-out infinite !important;
}
@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

 
.container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.transparent-8 {
    opacity :0.85;
}

</style>