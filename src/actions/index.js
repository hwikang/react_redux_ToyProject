//import 할것을 위해
//import actions from '../actions' 
//이런식으로만 하면 actions/index.js 를 자동으로 부름 
export const selectSong = song =>{
    return {
        type:"SONG_SELECTED" , 
        payload: song
    };
};
// named export - 여러개를 export 가능하게함
// import 하는 데서 import {selectSong} from '../actions'