import React from 'react'
import {connect} from 'react-redux';

const SongDetail = ({song}) =>{
    //console.log("thisprops=",props);
    if(!song){return <div>select a song</div>}
    return(
    <div>
        <h3>{song.title}</h3>
        <p> Duration : {song.duration}</p>
    </div>
    )
}

const mapStateToProps = (state) =>{   
    return {song : state.selectedSong}
}
//이러면 mapstatetoprops의 리턴값이 songdetail의 prop으로들어감
export default connect(mapStateToProps)(SongDetail);