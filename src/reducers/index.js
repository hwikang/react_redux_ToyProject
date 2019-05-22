import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
        {
            title:'Bad Guy',
            duration : '4:05'
        },
        {
            title:'No Brainer',
            duration : '3:35'
        },
        {
            title:'All Star',
            duration : '2:55'
        },
        {
            title:'Macarena',
            duration : '1:45'
        }
    ]
};
                                        //default
const selectedSongReducer = (selectedSong=null , action) =>{
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
}

//요놈 export
export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
});