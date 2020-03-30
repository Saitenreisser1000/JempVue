
import A1 from "../assets/audio/AcousticGuitarA1.mp3";
import A2 from "../assets/audio/AcousticGuitarA2.mp3";
import A3 from "../assets/audio/AcousticGuitarA3.mp3";
import A4 from "../assets/audio/AcousticGuitarA4.mp3";
import B1 from "../assets/audio/AcousticGuitarB1.mp3";
import B2 from "../assets/audio/AcousticGuitarB2.mp3";
import B3 from "../assets/audio/AcousticGuitarB3.mp3";
import B4 from "../assets/audio/AcousticGuitarB4.mp3";
import Bb1 from "../assets/audio/AcousticGuitarBb1.mp3";
import Bb2 from "../assets/audio/AcousticGuitarBb2.mp3";
import Bb3 from "../assets/audio/AcousticGuitarBb3.mp3";
import Bb4 from "../assets/audio/AcousticGuitarBb4.mp3";
import C2 from "../assets/audio/AcousticGuitarC2.mp3";
import C3 from "../assets/audio/AcousticGuitarC3.mp3";
import C4 from "../assets/audio/AcousticGuitarC4.mp3";
import C5 from "../assets/audio/AcousticGuitarC5.mp3";
import Db2 from "../assets/audio/AcousticGuitarCshrp2.mp3";
import Db3 from "../assets/audio/AcousticGuitarCshrp3.mp3";
import Db4 from "../assets/audio/AcousticGuitarCshrp4.mp3";
import Db5 from "../assets/audio/AcousticGuitarCshrp5.mp3";
import D2 from "../assets/audio/AcousticGuitarD2.mp3";
import D3 from "../assets/audio/AcousticGuitarD3.mp3";
import D4 from "../assets/audio/AcousticGuitarD4.mp3";
import D5 from "../assets/audio/AcousticGuitarD5.mp3";
import Eb2 from "../assets/audio/AcousticGuitarDshrp2.mp3";
import Eb3 from "../assets/audio/AcousticGuitarDshrp3.mp3";
import Eb4 from "../assets/audio/AcousticGuitarDshrp4.mp3";
import E1 from "../assets/audio/AcousticGuitarE1.mp3";
import E2 from "../assets/audio/AcousticGuitarE2.mp3";
import E3 from "../assets/audio/AcousticGuitarE3.mp3";
import E4 from "../assets/audio/AcousticGuitarE4.mp3";
import F1 from "../assets/audio/AcousticGuitarF1.mp3";
import F2 from "../assets/audio/AcousticGuitarF2.mp3";
import F3 from "../assets/audio/AcousticGuitarF3.mp3";
import F4 from "../assets/audio/AcousticGuitarF4.mp3";
import Gb1 from "../assets/audio/AcousticGuitarFshrp1.mp3";
import Gb2 from "../assets/audio/AcousticGuitarFshrp2.mp3";
import Gb3 from "../assets/audio/AcousticGuitarFshrp3.mp3";
import Gb4 from "../assets/audio/AcousticGuitarFshrp4.mp3";
import G1 from "../assets/audio/AcousticGuitarG1.mp3";
import G2 from "../assets/audio/AcousticGuitarG2.mp3";
import G3 from "../assets/audio/AcousticGuitarG3.mp3";
import G4 from "../assets/audio/AcousticGuitarG4.mp3";
import Ab1 from "../assets/audio/AcousticGuitarGshrp1.mp3";
import Ab2 from "../assets/audio/AcousticGuitarGshrp2.mp3";
import Ab3 from "../assets/audio/AcousticGuitarGshrp3.mp3";
import Ab4 from "../assets/audio/AcousticGuitarGshrp4.mp3";


import { Sampler } from "tone"

export class Player{
    constructor(){
        this.samplerinit();
    }

    samplerPlay(dotInfo){
        this._sampler.triggerAttack(dotInfo.show+dotInfo.octave)
    }

    samplerinit() {
        this._sampler = new Sampler(
            {
                A1, A2, A3, A4,
                B1, B2, B3, B4,
                Bb1, Bb2, Bb3, Bb4,
                C2, C3, C4, C5,
                Db2, Db3, Db4, Db5,
                D2, D3, D4, D5,
                Eb2, Eb3, Eb4,
                E1, E2, E3, E4,
                F1, F2, F3, F4,
                Gb1, Gb2, Gb3, Gb4,
                G1, G2, G3, G4,
                Ab1, Ab2, Ab3, Ab4,
            },
            {
            "release": 1,
        }).toMaster();
    }
}






