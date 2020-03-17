<template>
    <div id="uiField">
        <button class="btn" @click="clickedOne">Blue</button>
        <button class="btn" @click="clickedTwo">Green</button>
        <button class="btn" @click="clickedThree">Red</button>
        <label class="switch">
            <input type="checkbox" @change="editable()" checked>
            <span class="slider round"></span>
        </label>
        <div class="control-group">
            <label class="control control-radio">
                Red
                <input type="radio" v-model="selectedColor" value="red" name="radio" checked="checked" />
            </label>
            <label class="control control-radio">
                Blue
                <input type="radio" v-model="selectedColor" value="blue" name="radio" />
            </label>
            <label class="control control-radio">
                Green
                <input type="radio" v-model="selectedColor" value="green" name="radio" />
            </label>
            <label class="control control-radio">
                Yellow
                <input type="radio" v-model="selectedColor" value="yellow" name="radio" />
            </label>
            <div>Selected: {{selectedColor}}</div>
        </div>
    </div>
</template>

<script>

    import { store } from "@/store/store";

    export default {
        name: "ui",
        data: function() {
            return {
                isEditable: true,
                selectedColor: '#CD5C5C'
            }
        },

        created: function(){
            store.dispatch('setColor', this.selectedColor)
        },

        watch: {
            selectedColor: function(){
                store.dispatch('setColor', this.selectedColor);
                return this.selectedColor;
            }
        },

        methods: {
          clickedOne(){
               store.dispatch('changeColor', {string: 4, bar: 5, color: this.selectedColor})
          },
          clickedTwo(){
              //store.dispatch('changeColorString', {string: 0, color: "yellow"})
              store.dispatch('activateDot', {string: 0, bar: 5})
          },
          clickedThree(){
              store.dispatch('changeColorAll', {color: this.selectedColor})
          },
          editable(){
              this.isEditable = !this.isEditable;
              store.dispatch('setEditable', this.isEditable)
          }
        },
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
        background-color: #2196F3;
        color: beige;
        float: left;
        margin: 30px;
        width: 100px;
        height: 40px;
        border-radius: 5px;
    }
    .btn:hover{
        background-color: #0A2B4B;
    }

    .switch {
        top: 30%;
        float: left;
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

</style>
