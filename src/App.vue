<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'app',

}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body{
  height: 100%;
}
#app {
  height: 100%;
}

.btn {
  width: 30px;
  height: 30px;
  border: 1px solid rgb(241, 142, 142);
  border-radius: 50%;
  background-color: crimson;
  opacity: 0.4;
}
.eidt {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 162, 255, 0.897);
  border-radius: 50%;
  background-color: blue;
  opacity: 0.4;
}
</style>
