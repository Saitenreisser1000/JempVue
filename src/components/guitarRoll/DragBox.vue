<template>
    <vue-draggable-resizable
            class="dragBox"

            :onDragStart="onDragStartCallback"
            @dragstop="dragStop"

            axis="x"

            :onResizeStart="onResizeStartCallback"
            @resizestop="resizeStop"

            :handles="['mr']"
            :parent="true"

            :grid="[10,5]"
            :min-width="10"
            :max-width="200"

            :h="40"
            :w=width
            :x=xPos
            :y=yPos
    >
    </vue-draggable-resizable>
</template>

<script>
    import Vue from 'vue'
    import VueDraggableResizable from 'vue-draggable-resizable'
    import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

    Vue.component('vue-draggable-resizable', VueDraggableResizable);

    export default {
        props: ['xPos', 'yPos', 'newkey', 'boxWidth', 'strNr'],
        data: function () {
            return {
                dragStartValues: {},
                posX: this.xPos,
                width: this.boxWidth,
            }
        },
        watch: {
            boxWidth: function () {
                this.width = this.boxWidth
            }
        },

        methods: {
            // eslint-disable-next-line no-unused-vars
            onDragStartCallback: function(){
                this.dragResizeStart = {
                    startX: this.xPos,
                    startWidth: this.width
                }
            },

            // eslint-disable-next-line no-unused-vars
            dragStop: function (x) {
                this.posX = x;
                this.$emit('updateXPos', this.posX, this.width, this.newkey, this.strNr, this.dragResizeStart);
            },

            // eslint-disable-next-line no-unused-vars
            onResizeStartCallback: function(){
                this.dragResizeStart = {
                    startX: this.xPos,
                    startWidth: this.width
                }
            },

            // eslint-disable-next-line no-unused-vars
            resizeStop: function (x, y, width) {
                this.width = width;
                this.$emit('updateXPos', this.posX, this.width, this.newkey, this.strNr, this.dragResizeStart)
            },
        },
    }
</script>

<style>
    .dragBox {
        background-color: darkcyan;
        opacity: 0.7;
        border-style: solid;
        border-width: 2px;
        border-radius: 5px;
        z-index: 500
    }

    .dragBox moved {
        background-color: darkgray;
    }
</style>
