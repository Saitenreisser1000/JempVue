import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        dotContainer: [[
            {id: '1,1', xPos: 0, show: 'E', isActive: false, color: 'blue'},
            {id: '1,1', xPos: 1, show: 'F', isActive: false, color: 'yellow'},
            {id: '1,2', xPos: 2, show: 'F#', isActive: false, color: 'blue'},
            {id: '1,3', xPos: 3, show: 'G', isActive: false, color: 'green'},
            {id: '1,4', xPos: 4, show: 'G#', isActive: false, color: 'blue'},
            {id: '1,5', xPos: 5, show: 'A', isActive: false, color: 'blue'},
            {id: '1,6', xPos: 6, show: 'Bb', isActive: false, color: 'blue'},
            {id: '1,7', xPos: 7, show: 'B', isActive: false, color: 'blue'},
            {id: '1,8', xPos: 8, show: 'C', isActive: false, color: 'blue'},
            {id: '1,9', xPos: 9, show: 'C#', isActive: false, color: 'blue'},
            {id: '1,10', xPos: 10, show: 'D', isActive: false, color: 'blue'},
            {id: '1,11', xPos: 11, show: 'D#', isActive: false, color: 'blue'},
            {id: '1,12', xPos: 12, show: 'E', isActive: false, color: 'blue'},
            {id: '1,13', xPos: 13, show: 'F', isActive: false, color: 'blue'},
            {id: '1,14', xPos: 14, show: 'F#', isActive: false, color: 'blue'},
            {id: '1,15', xPos: 15, show: 'G', isActive: false, color: 'blue'},
            {id: '1,16', xPos: 16, show: 'G#', isActive: false, color: 'blue'},
        ],
        [
            {id: '2,1', xPos: 0, show: 'H', isActive: false, color: 'blue'},
            {id: '2,1', xPos: 1, show: 'C', isActive: false, color: 'blue'},
            {id: '2,2', xPos: 2, show: 'C#', isActive: false, color: 'blue'},
            {id: '2,3', xPos: 3, show: 'D', isActive: false, color: 'green'},
            {id: '2,4', xPos: 4, show: 'D#', isActive: false, color: 'blue'},
            {id: '2,5', xPos: 5, show: 'E', isActive: false, color: 'blue'},
            {id: '2,6', xPos: 6, show: 'F', isActive: false, color: 'blue'},
            {id: '2,7', xPos: 7, show: 'F#', isActive: false, color: 'blue'},
            {id: '2,8', xPos: 8, show: 'G', isActive: false, color: 'blue'},
            {id: '2,9', xPos: 9, show: 'G#', isActive: false, color: 'blue'},
            {id: '2,10', xPos: 10, show: 'A', isActive: false, color: 'blue'},
            {id: '2,11', xPos: 11, show: 'Bb', isActive: false, color: 'blue'},
            {id: '2,12', xPos: 12, show: 'B', isActive: false, color: 'blue'},
            {id: '2,13', xPos: 13, show: 'C', isActive: false, color: 'blue'},
            {id: '2,14', xPos: 14, show: 'C#', isActive: false, color: 'blue'},
            {id: '2,15', xPos: 15, show: 'D', isActive: false, color: 'blue'},
            {id: '2,16', xPos: 16, show: 'D#', isActive: false, color: 'blue'},
        ],
        [
            {id: '3,1', xPos: 0, show: 'E', isActive: false, color: 'blue'},
            {id: '3,1', xPos: 1, show: 'F', isActive: false, color: 'blue'},
            {id: '3,2', xPos: 2, show: 'F#', isActive: false, color: 'blue'},
            {id: '3,3', xPos: 3, show: 'G', isActive: false, color: 'green'},
            {id: '3,4', xPos: 4, show: 'G#', isActive: false, color: 'blue'},
            {id: '3,5', xPos: 5, show: 'A', isActive: false, color: 'blue'},
            {id: '3,6', xPos: 6, show: 'Bb', isActive: false, color: 'blue'},
            {id: '3,7', xPos: 7, show: 'B', isActive: false, color: 'blue'},
            {id: '3,8', xPos: 8, show: 'C', isActive: false, color: 'blue'},
            {id: '3,9', xPos: 9, show: 'C#', isActive: false, color: 'blue'},
            {id: '3,10', xPos: 10, show: 'D', isActive: false, color: 'blue'},
            {id: '3,11', xPos: 11, show: 'D#', isActive: false, color: 'blue'},
            {id: '3,12', xPos: 12, show: 'E', isActive: false, color: 'blue'},
            {id: '3,13', xPos: 13, show: 'F', isActive: false, color: 'blue'},
            {id: '3,14', xPos: 14, show: 'F#', isActive: false, color: 'blue'},
            {id: '3,15', xPos: 15, show: 'G', isActive: false, color: 'blue'},
            {id: '3,16', xPos: 16, show: 'G#', isActive: false, color: 'blue'},
        ],
        [
            {id: '4,1', xPos: 0, show: 'E', isActive: false, color: 'blue'},
            {id: '4,1', xPos: 1, show: 'F', isActive: false, color: 'blue'},
            {id: '4,2', xPos: 2, show: 'F#', isActive: false, color: 'blue'},
            {id: '4,3', xPos: 3, show: 'G', isActive: false, color: 'green'},
            {id: '4,4', xPos: 4, show: 'G#', isActive: false, color: 'blue'},
            {id: '4,5', xPos: 5, show: 'A', isActive: false, color: 'blue'},
            {id: '4,6', xPos: 6, show: 'Bb', isActive: false, color: 'blue'},
            {id: '4,7', xPos: 7, show: 'B', isActive: false, color: 'blue'},
            {id: '4,8', xPos: 8, show: 'C', isActive: false, color: 'blue'},
            {id: '4,9', xPos: 9, show: 'C#', isActive: false, color: 'blue'},
            {id: '4,10', xPos: 10, show: 'D', isActive: false, color: 'blue'},
            {id: '4,11', xPos: 11, show: 'D#', isActive: false, color: 'blue'},
            {id: '4,12', xPos: 12, show: 'E', isActive: false, color: 'blue'},
            {id: '4,13', xPos: 13, show: 'F', isActive: false, color: 'blue'},
            {id: '4,14', xPos: 14, show: 'F#', isActive: false, color: 'blue'},
            {id: '4,15', xPos: 15, show: 'G', isActive: false, color: 'blue'},
            {id: '4,16', xPos: 16, show: 'G#', isActive: false, color: 'blue'},
        ],
        [
            {id: '5,1', xPos: 0, show: 'E', isActive: false, color: 'blue'},
            {id: '5,1', xPos: 1, show: 'F', isActive: false, color: 'blue'},
            {id: '5,2', xPos: 2, show: 'F#', isActive: false, color: 'blue'},
            {id: '5,3', xPos: 3, show: 'G', isActive: false, color: 'green'},
            {id: '5,4', xPos: 4, show: 'G#', isActive: false, color: 'blue'},
            {id: '5,5', xPos: 5, show: 'A', isActive: false, color: 'blue'},
            {id: '5,6', xPos: 6, show: 'Bb', isActive: false, color: 'blue'},
            {id: '5,7', xPos: 7, show: 'B', isActive: false, color: 'blue'},
            {id: '5,8', xPos: 8, show: 'C', isActive: false, color: 'blue'},
            {id: '5,9', xPos: 9, show: 'C#', isActive: false, color: 'blue'},
            {id: '5,10', xPos: 10, show: 'D', isActive: false, color: 'blue'},
            {id: '5,11', xPos: 11, show: 'D#', isActive: false, color: 'blue'},
            {id: '5,12', xPos: 12, show: 'E', isActive: false, color: 'blue'},
            {id: '5,13', xPos: 13, show: 'F', isActive: false, color: 'blue'},
            {id: '5,14', xPos: 14, show: 'F#', isActive: false, color: 'blue'},
            {id: '5,15', xPos: 15, show: 'G', isActive: false, color: 'blue'},
            {id: '5,16', xPos: 16, show: 'G#', isActive: false, color: 'blue'},
        ],
        [
            {id: '6,1', xPos: 0, show: 'E', isActive: false, color: 'blue'},
            {id: '6,1', xPos: 1, show: 'F', isActive: false, color: 'blue'},
            {id: '6,2', xPos: 2, show: 'F#', isActive: false, color: 'blue'},
            {id: '6,3', xPos: 3, show: 'G', isActive: false, color: 'green'},
            {id: '6,4', xPos: 4, show: 'G#', isActive: false, color: 'blue'},
            {id: '6,5', xPos: 5, show: 'A', isActive: false, color: 'blue'},
            {id: '6,6', xPos: 6, show: 'Bb', isActive: false, color: 'blue'},
            {id: '6,7', xPos: 7, show: 'B', isActive: false, color: 'blue'},
            {id: '6,8', xPos: 8, show: 'C', isActive: false, color: 'blue'},
            {id: '6,9', xPos: 9, show: 'C#', isActive: false, color: 'blue'},
            {id: '6,10', xPos: 10, show: 'D', isActive: false, color: 'blue'},
            {id: '6,11', xPos: 11, show: 'D#', isActive: false, color: 'blue'},
            {id: '6,12', xPos: 12, show: 'E', isActive: false, color: 'blue'},
            {id: '6,13', xPos: 13, show: 'F', isActive: false, color: 'blue'},
            {id: '6,14', xPos: 14, show: 'F#', isActive: false, color: 'blue'},
            {id: '6,15', xPos: 15, show: 'G', isActive: false, color: 'blue'},
            {id: '6,16', xPos: 16, show: 'G#', isActive: false, color: 'blue'},
        ]],
        dots: [],
        fretAmount: 15,
    },
    mutations: {

        setFrets () {

            this.fretAmount = 15;
        },

        addDot (state, dott) {
            //adds removes dots to the dotsarray
            if(dott.active){
                state.dots.push(dott);
            }else{
                state.dots = state.dots.filter(dot => dott.id !== dot.id )
            }
            console.log(this.state.dots)
        },

        activateDot(state, payload){
            let self = this
            this.state.dotContainer[payload.string][payload.bar].isActive = true;
            this.state.dotContainer[payload.string][payload.bar].color = payload.color
            if(payload.remove){
                setInterval(function(){
                    self.state.dotContainer[payload.string][payload.bar].isActive = false;
                }, payload.remove)
            }
        },

        deactivateDot(string, bar){
            this.dotContainer[string][bar].isActive = false
        },

        changeColor(){

        }
    },
    getters: {
        getFretAmount: state => {
            return state.fretAmount
        },

        getDotContainer: state => {
            return state.dotContainer
        },

        getDots: state => {
            return state.dots
        }
    }

})
