<template>
    <div class="dot"
         :class="{ dotClicked: dotIsActive }"
         @click="onClickDot"
        :style="{'background-color': dotColor}"
    >{{dotInfo.show}}</div>

</template>

<script>
    import { store } from "@/store/store";

    export default {
        name: "toneDot",
        props: ['isActive', 'color','dotInfo'],
        data: function () {
            return {
                dotIsActive : this.dotInfo.isActive,
                dotColor: this.dotInfo.color
            }
        },
        watch: {
            isActive: function(){
                this.dotIsActive = this.dotInfo.isActive

            },

            color: function(){
                this.dotColor = this.dotInfo.color
            }

        },
        methods: {
            onClickDot(){
                this.dotIsActive = !this.dotIsActive,
                this.addToStorage()
            },

            addToStorage () {
                store.commit('addDot', {id: this.$vnode.key, active: this.dotIsActive, time: 0, color: null })

            },
        },
    }
</script>

<style scoped>
    .dot{
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
        border-style: solid;
        box-shadow: 0px 5px 9px 1px rgba(0,0,0,0.52);

    }
    .dot:hover{
        opacity: 0.6;
    }
    .dotClicked{
        opacity: 1 !important;
    }
</style>
