<template>
    <div id="uiField">
        <button class="btn" @click="clickedOne">click1</button>
        <button class="btn" @click="clickedTwo">click2</button>
        <button class="btn" @click="clickedThree">click3</button>
    </div>
</template>

<script>

    import {store} from "@/store/store";

    export default {
        name: "ui",
        methods: {
          clickedOne(){
              console.log(store.getters.getDots)

          },
          clickedTwo(){
                  store.commit('activateDot', {string: 1, bar: 3, })
          },
          clickedThree(){
                store.commit('changeColor')
          }
        },
        components: {
            // eslint-disable-next-line vue/no-unused-components
            store
        }
    }
</script>

<style>
    #uiField{
        position: relative;
        margin: 50px auto;
        width: 80%;
        height: 100px;
        border-style: solid;
        border-width: 10px;
        border-color: darkgoldenrod;
        background-color: #E9A134;
    }
    .btn{
        background-color: #0A2B4B;
        color: beige;
        float: left;
        margin: 30px;
        width: 100px;
        height: 40px;
        border-radius: 5px;
    }
    .btn:hover{
        background-color: #2C3E50;
    }

</style>
