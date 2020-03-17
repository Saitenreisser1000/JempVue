<template>
    <div class="dot"
         :class="{ dotClicked: isActive || dotIsActive }"
         @click="onClickDot"
        :style="{'background-color': dotInfo.color}"
    >{{dotInfo.show}}</div>

</template>

<script>
    import { store } from "@/store/store";

    export default {
        name: "toneDot",
        props: ['dotInfo', 'isEditable'],
        data: function () {
            return {
                dotIsActive : this.dotInfo.isActive,
            }
        },
        computed: {
            isActive: function(){
                return this.dotInfo.isActive
            },
            getEditable: function(){
                return this.isEditable
            }
        },
        methods: {
            onClickDot(){
                if(this.getEditable) {
                    this.dotIsActive = !this.dotIsActive;
                    this.dotInfo.color = store.getters.getColor;
                    this.addToStorage()
                }
            },
            addToStorage () {
                store.commit('addDot', {id: this.$vnode.key, active: this.dotIsActive, time: 0})
            },
        },
    }
</script>

<style scoped>
    .dot{
        z-index: 5;
        cursor: pointer;
        text-align: center;
        opacity: 0;
        position: absolute;
        top: 1px;
        height: 24px;
        width: 24px;
        background-color: indianred;
        border-radius: 50%;
        border-color: black;
        border-width: 1px;
        border-style: solid;
        box-shadow: 0 5px 9px 1px rgba(0,0,0,0.52);

    }
    .dot:hover{
        opacity: 0.6;
    }
    .dotClicked{
        opacity: 1 !important;
    }
</style>
