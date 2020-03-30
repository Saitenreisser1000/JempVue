import Vuex from 'vuex';
import Vue from 'vue';
import { Player } from "@/Store/player";
import Tone from 'tone'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        player: new Player(),

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
        dotColor: '',
        timeCounter: 0,

        rollPoints: []
    },
    mutations: {

        setColor(state, color) {
            state.dotColor = color;

            //allocated color for not active dots
            let dots = state.dotContainer.filter(dot => !dot.isActive);
            dots.forEach(dot => dot.color = color)
        },

        initDots (state) {
            this.fretAmount = 15;
            for(let i = 0; i < (state.fretAmount)*6; i++){
                state.dotContainer.push({id: i, xPos: i, string: 0, tone: state.toneNames[i % 12].name + parseInt(i / 12), show: state.toneNames[i % 12].name, octave: parseInt((i+4) / 12)+3,
                    isActive: false, color: state.dotColor});
            }

            for(let j = 0; j < 6; j++) {
                state.dotsPerString[j] = new Array(this.fretAmount);
                for (let i = 0; i < state.fretAmount; i++) {
                    state.dotsPerString[j][i] = state.dotContainer[i+(j*this.fretAmount)];
                    state.dotsPerString[j][i].xPos = i;
                    switch(j){
                        case 1: state.dotsPerString[1][i].show = state.toneNames[(i+7) % 12].name;
                                state.dotsPerString[1][i].string = 1;
                                state.dotsPerString[1][i].octave = parseInt((i+11) / 12)+2
                                break;
                        case 2: state.dotsPerString[2][i].show = state.toneNames[(i+3) % 12].name;
                                state.dotsPerString[2][i].string = 2;
                                state.dotsPerString[2][i].octave = parseInt((i+7) / 12)+2;
                                break;
                        case 3: state.dotsPerString[3][i].show = state.toneNames[(i+10) % 12].name;
                                state.dotsPerString[3][i].string = 3;
                                state.dotsPerString[3][i].octave = parseInt((i+2) / 12)+2;
                                break;
                        case 4: state.dotsPerString[4][i].show = state.toneNames[(i+5) % 12].name;
                                state.dotsPerString[4][i].string = 4;
                                state.dotsPerString[4][i].octave = parseInt((i+9) / 12)+1;
                                break;
                        case 5: state.dotsPerString[5][i].show = state.toneNames[(i) % 12].name;
                                state.dotsPerString[5][i].string = 5;
                                state.dotsPerString[5][i].octave = parseInt((i+4) / 12)+1;
                                break;
                    }
                }
            }
        },

        scheduleSong(state){
            let notes = state.dotsClicked;

            for(let i = 0; i < notes.length; i++) {
                Tone.Transport.schedule(function(){
                    store.dispatch('activateDot', {string: notes[i].active.string, bar: notes[i].active.xPos, payload: notes[i]})
                },notes[i].time);
            }

            store.dispatch('clearAll')

            Tone.Transport.seconds = 0;
            Tone.Transport.start()
        },

        addDot (state, dott) {
            //adds removes dots to the dotsarray
            if(dott.active){
                state.dotsClicked.push(dott);
            }else{
                state.dotsClicked = state.dotsClicked.filter(dot => dott.id !== dot.id )
            }
        },

        activateDot(state, stringBar){
            state.dotsPerString[stringBar.string][stringBar.bar].isActive = true;
            store.dispatch('playTone', stringBar.payload.active)
            //Todo clean up stringBar.payload.active construct
        },
        deactivateDot(state, payload){
            state.dotsPerString[payload.string][payload.bar].isActive = false
        },
        clearAll(state, payload){
            state.timeCounter = payload;
            state.dotsClicked = [];

            state.dotContainer.forEach(dot => dot.isActive = false);
            //state.dotContainer.forEach(dot => dot.color = state.dotColor)
        },
        setEditable(state, isEditable){
            state.isEditable = isEditable
        },

        //color set/change
        changeColorString(state, stringInfo){
            state.dotsPerString[stringInfo.string].forEach(dot => dot.color = stringInfo.color)
        },
        changeColorDot(state, changeInfo){
            let dot = state.dotContainer.filter(aDot => aDot.id === changeInfo.id)
            dot[0].color = changeInfo.color;
        },
        changeColorAll(state, color){
            state.dotContainer.forEach(dot => dot.color = color)
        },

        timeCalculation(state) {
            //TODO return time instead of timeCounter
            state.timeCounter++;
        },
        playTone(state, dotInfo){
            state.player.samplerPlay(dotInfo)
        },
        addRollPoint(state, position){
            state.rollPoints.push(position)
        }
    },

    actions:  {
        initDots ({commit}) {
            commit('initDots')
        },

        //color set/change functions
        setColor ({commit}, color) {
            commit('setColor', color)
        },
        changeColorString({commit}, dotInfo){
            commit('changeColorString', dotInfo)
        },
        changeColorDot({commit}, change){
            commit('changeColorDot', change)
        },
        changeColorAll({commit}, color){
            commit('changeColorAll', color)
        },

        //dot edit
        activateDot({commit}, stringBar){
            //string, bar
            commit('activateDot', stringBar)
        },
        clearAll({commit}, payload){
            commit('clearAll', payload)
        },
        setEditable({commit}, isEditable){
            commit('setEditable', isEditable)
        },


        timeCalculation({commit}){
            commit('timeCalculation')
        },
        playTone({commit}, dotInfo){
            commit('playTone', dotInfo)
        },
        scheduleTones({commit}){
            commit('scheduleSong')
        },

        //*******guitar roll*************//
        addRollPoint({commit}){
            commit('addRollPoint', {xPos: 10, yPos: 10})
        },
        removeRollPoint(){

        }
    },

    getters: {
        getTime: state => {
            return "0:"+ state.timeCounter
        },
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
        },
        getDotContainer:(state) => {
            return state.dotContainer
        },
        getAllRollPoints:(state) => {
            return state.rollPoints
        }
    }
});
