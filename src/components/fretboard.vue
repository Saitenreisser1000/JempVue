<template>
    <div id="fbBackground" :style="styles">
        <fret :fretHeight="fretHeight"></fret>
        <string :stringYDistance="stringYDistance" :dot-x-distance="dotXDistance"></string>
    </div>
</template>

<script>

    import string from "@/components/string";
    import fret from "@/components/fret";

    export default {
        name: "fretboard",
        data: function () {
            return {
                stringYDistance:30,
                fretHeight: 165,
                dotXDistance: 63,
                fbHeight: 200,
                fbWidth: 90,
                styles: {
                    'height': '165px',
                    'width' : '100px'
                }
            }
        },
        components: {
            string,
            fret
        }
    }
</script>

<style>

    #fbBackground{
        position:relative;
        margin: 50px auto;
        background-color: wheat;
        padding: 0;

        -webkit-box-shadow: 10px 10px 12px 1px rgba(0,0,0,0.52);
        -moz-box-shadow: 10px 10px 12px 1px rgba(0,0,0,0.52);
        box-shadow: 10px 10px 12px 1px rgba(0,0,0,0.52);
    }

</style>
