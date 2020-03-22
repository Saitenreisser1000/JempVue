<template>
    <div id="stringContainer">
        <div class="string"

             :key="str+'str'"
             v-for="str in 6"
             :style="{'top': (stringYDistance*str)-25+'px'}"
        >

            <tone-dot
                    v-for="dot in getDotsPerString[str-1]"
                    :key="dot.id+'dot'"
                    :style="{'left': (dot.xPos*dotXDistance)-47 +'px', 'top': '-12px' }"
                    :dotInfo="dot"
                    :isEditable=isEditable
                    @playTone="playTone"
            >
            </tone-dot>
        </div>
        <div class="posPoints" style="left: 150px"></div>
        <div class="posPoints" style="left: 278px"></div>
        <div class="posPoints" style="left: 403px"></div>
        <div class="posPoints" style="left: 530px"></div>
        <div class="posPoints" style="left: 715px; top: 45px"></div>
        <div class="posPoints" style="left: 715px; top: 105px"></div>
        <div class="posPoints" style="left: 907px"></div>
    </div>
</template>
<script>

    import ToneDot from "@/components/toneDot";
    import { store } from "@/Store/store";
    import { mapGetters, mapActions } from "vuex"

    export default {
        props: ['stringYDistance', 'dotXDistance'],
        name: "string",

        created() {
            store.dispatch('initDots');
        },
        data: function () {
            return {
                dotActive: false,
            }
        },
        methods: {
            ...mapActions(["setDots, playTone"]),

            playTone: function(dotInfo){
                store.dispatch('playTone', dotInfo);
            }
        },
        computed: {
            ...mapGetters(['getDotsPerString', 'getEditable']),
            isEditable: function (){
                return this.getEditable
            }
        },
        components: {
            ToneDot,
        }
    }
</script>

<style scoped>

    .posPoints{
        --dot-height: 10px;
        --half-dot-height: calc(var(--dot-height)/2);
        position: absolute;
        top: calc(50% - var(--half-dot-height)) ;
        width: 10px;
        height: var(--dot-height);
        background-color: black;
        border-radius: 50px;

    }

    .string{
        margin: 0;
        position:absolute;
        background-color: black;
        height: 1px;
        width: 100%;
        box-shadow: 0 5px 9px 1px rgba(0,0,0,0.52);
    }
</style>
