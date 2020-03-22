<template>
    <div class="dot"
         :class="{ dotClicked: isActive}"
         @click="onClickDot"
        :style="{'background-color': dotInfo.color}"
    >{{dotInfo.show}}</div>

</template>

<script>
    import { store } from "@/Store/store";

    export default {
        name: "toneDot",
        props: ['dotInfo', 'isEditable'],
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
                    this.$emit('playTone', this.dotInfo);
                    this.dotInfo.isActive = !this.dotInfo.isActive
                    this.addToStorage()
                }
            },
            addToStorage () {
                store.commit('addDot', {id: this.$vnode.key, active: this.dotInfo, time: this.getTimeFromStore()})
            },
            getTimeFromStore() {
                store.dispatch('timeCalculation')
                return store.getters.getTime
            }
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
