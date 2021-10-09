<template>
  <div>
    <div class="wrapper-mains">
      <div class="left-align">
        <h2 class="bold center" style="color:#3aac5d;">Make Commponent Step Progress in Vue.js</h2>
        <StepProgress :length="2"  @gonext="gonext" />/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 methods: {
    gonext () {
      this.items.push({
        
      })
    },
  }
}
</script>
(html comment removed:  Add "scoped" attribute to limit CSS to this component only )
<style scoped>
.wrapper-mains{
  width: 561px;
    height: auto;
    background: white;
    text-align: center;
    margin: auto;
    padding: 100px 47px 20px 61px;
}
.textarea{
    display: block;
    width: 100%;
    height: 70px;
    border-radius: 5px;
}
</style>