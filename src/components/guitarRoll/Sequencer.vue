<template>
    <div id="outerFrame" >
        <div id="seqFrame" :style="styleObject" :bind="width">
            <Columns v-bind:key="n +'n'" v-for="n in 25" :height="240" :colWidth="colWidth" ></Columns>
            <DragBox
                    v-for="str in stringList"

                    :strings="str.str"
                    :strNr="str.strNr"

                    :key="str.id"
                    :newkey="str.id"

                    :y-pos="(str.strNr-1)*40"
                    :x-pos="str.xPos"

                    :boxWidth=str.boxWidth
                    @updateXPos="updateXPos"
            >g</DragBox>

        </div>
        <button class="buttons" :key=btns v-for="btns in 6" @click="createNewBox(btns)">string:{{btns}}</button>
        <button class="buttons" @click="reset()">reset</button>
    </div>
</template>

<script>
    import DragBox from "./DragBox";
    import Columns from "./Columns.vue";

    export default {
        props:['width'],
        data: function () {
            return {
                styleObject: {
                  width: '2000px',
                },
                boxWidth: 20,
                instancePos: 0,
                positionAdd: 40,

                colWidth: 40,
                id: 0,

                stringList: [],
            };

        },

        methods: {

            createNewBox(strNr) {
                this.stringList.push({id: this.id, strNr, boxWidth: this.boxWidth, xPos: this.instancePos});
                this.instancePos += this.positionAdd;
                this.id++;
            },

            updateXPos(xPos, width, key, strNr, dragResizeStart){
                let el = this.stringList.find(el => el.id === key);

                //update new values after dragging/resizing
                el.xPos = xPos;
                el.boxWidth = width;

                let changedOnActiveString = this.stringList.filter(el => el.strNr === strNr && el.id !== key);

                for(let box of changedOnActiveString){
                    //set position size back to start
                    if(!this.isPosFree(box, {leftBorder: xPos, width: width})){

                        //needs to be delayed otherwise position of active element will not remove
                        setTimeout(() => {
                            el.xPos = dragResizeStart.startX;
                            el.boxWidth = dragResizeStart.startWidth;
                        }, 10);

                        break;
                    }
                }
            },
            isPosFree(box, newBox){
                return !(box.xPos < newBox.leftBorder + newBox.width && box.xPos > newBox.leftBorder ||
                    box.xPos + box.boxWidth < newBox.leftBorder + newBox.width && box.xPos + box.boxWidth > newBox.leftBorder ||
                    box.xPos <= newBox.leftBorder && box.xPos + box.boxWidth >= newBox.leftBorder + newBox.width);

            },
        },
        components: {DragBox, Columns}
    }
</script>

<style scoped>

    #outerFrame{
        margin: auto;
        width: 80%;
        overflow-x: auto;
    }

    #seqFrame{
        z-index: 100;
        height: 240px;
        border: 3px solid black;
        border-radius: 5px;
        position: relative;
    }

    .buttons{
        margin:10px;
        height:50px;
        width:80px;
    }
</style>
