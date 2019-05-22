import React , {Component} from 'react';
import {connect} from 'react-redux';
//action creator
import {selectSong} from '../actions';
class SongList extends Component{
    renderList(){
       // console.log("props=",this.props)
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() =>this.props.selectSong(song)}>
                            select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>                 
            );
        })                  
    }

    render(){
        //this.props ===={songs:state.songs}
        //console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
   }

}
                    //reducers
                    //클릭할떄마다 계속 re run 함
const mapStateToProps = (state) =>{
   // console.log("songlist state=",state);
    return {songs:state.songs};
}

//action creator를 connect()에 연결
//action creatr는 두번째 매개변수로들어감
export default connect(mapStateToProps,{
    selectSong:selectSong
})(SongList);

//=== export default connect(mapStateToProps,{selectSong})(SongList);
//이러면 action creator도 prop으로 보내줌
