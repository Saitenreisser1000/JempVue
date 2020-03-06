<template>
    <div id="stringContainer">
        <div class="string"
             :key="str+'str'"
             v-for="str in 6"
             :style="{'top': (stringDistance*str)-25+'px'}">

            <tone-dot
                    v-for="dot in dotContainer[str-1]"
                    :key="dot.id+str"
                    :style="{'left': (dot.xPos*dotXDistance)-47 +'px', 'top': '-12px' }"
                    :show="dot.show"
                    :is-active="dot.isActive"
                    :color="dot.color"
                    :dotInfo="dot"
            >
            </tone-dot>
        </div>
    </div>
</template>
<script>

    import ToneDot from "@/components/toneDot";
    import { store } from "@/store/store";

    export default {
        props: ['stringYDistance', 'dotXDistance'],
        name: "string",
        data: function() {
            return {
                stringDistance: this.stringYDistance,
                dotDistance: this.dotXDistance,
                dotContainer: store.getters.getDotContainer,
                dots: store.getters.getFretAmount,
                dotActive: false

            }
        },

        components: {
            ToneDot
        }
    }
</script>

<style scoped>
    #stringContainer{
    }
    .string{
        margin: 0;
        position:absolute;
        background-color: black;
        height: 2px;
        width: 100%;
        box-shadow: 0px 5px 9px 1px rgba(0,0,0,0.52);
    }
</style>
