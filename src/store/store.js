import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        toneNames: [
            {id: 0, name: 'E'},
            {id: 1, name: 'F'},
            {id: 2, name: 'F#'},
            {id: 3, name: 'G'},
            {id: 4, name: 'G#'},
            {id: 5, name: 'A'},
            {id: 6, name: 'Bb'},
            {id: 7, name: 'B'},
            {id: 8, name: 'C'},
            {id: 9, name: 'C#'},
            {id: 10, name: 'D'},
            {id: 11, name: 'D#'}
        ],

        dotContainer : [],
        dotsPerString: [],
        dotsClicked: [],

        fretAmount: 15,
        isEditable: true,
        dotColor: '#CD5C5C'
    },
    mutations: {

        setColor(state, payload) {
            state.dotColor = payload
        },

        setDots (state) {
            this.fretAmount = 15;
            for(let i = 0; i < (state.fretAmount)*6; i++){
                state.dotContainer.push({id: i, xPos: i, show: state.toneNames[i % 12].name, isActive: false, color: state.dotColor});
            }

            for(let j = 0; j < 6; j++) {
                state.dotsPerString[j] = new Array(this.fretAmount);
                for (let i = 0; i < state.fretAmount; i++) {
                    state.dotsPerString[j][i] = state.dotContainer[i+(j*this.fretAmount)];
                    state.dotsPerString[j][i].xPos = i;
                    switch(j){
                        case 1: state.dotsPerString[1][i].show = state.toneNames[(i+7) % 12].name;  break;
                        case 2: state.dotsPerString[2][i].show = state.toneNames[(i+3) % 12].name; break;
                        case 3: state.dotsPerString[3][i].show = state.toneNames[(i+10) % 12].name; break;
                        case 4: state.dotsPerString[4][i].show = state.toneNames[(i+5) % 12].name; break;
                        case 5: state.dotsPerString[5][i].show = state.toneNames[(i) % 12].name; break;
                    }
                }
            }
        },

        addDot (state, dott) {
            //adds removes dots to the dotsarray
            if(dott.active){
                state.dotsClicked.push(dott);
            }else{
                state.dotsClicked = state.dotsClicked.filter(dot => dott.id !== dot.id )
            }
        },

        activateDot(state, payload){
            state.dotsPerString[payload.string][payload.bar].isActive = true;
        },
        deactivateDot(state, payload){
            state.dotsPerString[payload.string][payload.bar].isActive = false
        },
        setEditable(state, payload){
            state.isEditable = payload
        },
        changeColorString(state, payload){
            state.dotsPerString[payload.string].forEach(dot => dot.color = payload.color)
        },
        changeColor(state, payload){
            state.dotsPerString[0][0].color = payload.color;
        },
        changeColorAll(state, payload){
            state.dotContainer.forEach(dot => dot.color = payload.color)
        }
    },

    actions:  {
        setDots ({commit}) {
            commit('setDots')
        },
        setColor ({commit}, payload) {
            commit('setColor', payload)
        },
        //string, bar
        activateDot({commit}, payLoad){
            commit('activateDot', payLoad)
        },
        setEditable({commit}, payLoad){
            commit('setEditable', payLoad)
        },
        changeColorString({commit}, payLoad){
            commit('changeColorString', payLoad)
        },
        changeColor({commit}, payLoad){
            commit('changeColorString', payLoad)
        },
        changeColorAll({commit}, payLoad){
            commit('changeColorAll', payLoad)
        }
    },

    getters: {
        getEditable: state => {
            return state.isEditable
        },
        getFretAmount: state => {
            return state.fretAmount
        },
        getDots: state => {
            return state.dotsClicked
        },
        getDotsPerString: (state) => {
            return state.dotsPerString
        },
        getColor:(state) => {
            return state.dotColor
        }
    }
});
