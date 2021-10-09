<template>
  <div class="root">
     <div class="container">
          <ul class="progressbar">
            <li :class="[length >= 1 ? activeClass : disableClass]" :key="i"> </li>
            <li :class="[length>=2 ? activeClass : disableClass]" :key="i"> </li>
            <li :class="[length>=3 ? activeClass : disableClass]" :key="i"> </li>
            <li :class="[length>=4 ? activeClass : disableClass]" :key="i"> </li>
          </ul>
          <div class="page1" v-if="length==1">
            PAGE 1
            <button class="bg-light" @click="gonext">
              next
            </button>
          </div>
          <div class="page3" v-if="length==2">
            PAGE 2
             <button class="bg-light" @click="goback">
              back
            </button>
            <button class="bg-light" @click="gonext">
              next
            </button>
          </div>
          <div class="page3" v-if="length==3">
            PAGE 3
             <button class="bg-light" @click="goback">
              back
            </button>
            <button class="bg-light" @click="gonext">
              next
            </button>
          </div>
          <div class="page3" v-if="length==4">
            PAGE 4
             <button class="bg-light" @click="goback">
              back
            </button>
            <button class="bg-light" @click="gonext">
              submit
            </button>
          </div>
      </div>
  </div>
</template>
<script>
export default {

  data () {
    return {
      length:1,
      isActive: false ,
      activeClass: 'active',
      disableClass: 'disable'
    }
  },
  methods: {
    goback () {
      if (this.length <= 4 && this.length >= 2 ) {
      this.length = this.length - 1
      }
    },
    gonext () {
      if (this.length <= 3 || this.length <= 1 ) {
        this.length = this.length + 1
      }
    }
  }
}
</script>

(html comment removed:  Add "scoped" attribute to limit CSS to this component only )
<style scoped>
.bg-light {
  background: lightgray;
}

ul {
  list-style-type: none;
}
.container{
     width: 35%;
    position: absolute;
    z-index: 1;
    margin-top: 20px;
}
.progressbar{
  counter-reset: step;
}
.progressbar li{
  float: left;
  width: 14.28%;
  position: relative;
  text-align: center;
}
.progressbar li:before{
  content:counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 27px;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: bold;
}
.progressbar li:after{
  content: '';
  position: absolute;
  width:100%;
  height: 3px;
  background: #979797;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar li.active:before{
 border-color: #3aac5d;
 background: #3aac5d;
 color: white
}
.progressbar li.active:after{
 background: #3aac5d;
}
.progressbar li.active - li:after{
 background: #3aac5d;
}
.progressbar li.active - li:before{
border-color: #3aac5d;
background: #3aac5d;
color: white
}
.progressbar li:first-child:after{
 content: none;
}
.disableClass {
  background-color: blue;
}
</style>