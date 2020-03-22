<template>
    <div id="fretContainer">
        <div class="fret" :style="styles" :key="fr" v-for="fr in fretAmount"></div>
    </div>
</template>
<script>
    import {store} from "@/Store/store";

    export default {
        props: ['fretHeight'],
        name: "fret",
        data: function() {
            return {
                fretAmount: store.getters.getFretAmount,
                styles: {
                    'height': this.fretHeight+'px'
                }
            }
        },
    }
</script>

<style scoped>
    .fret{
        margin:0;
        background-color: black;
        margin-left: 60px;
        width: 3px;
        height: 140px;
        float: left;
        box-shadow: 10px 0px 20px 5px rgba(0,0,0,0.4);
    }
</style>
