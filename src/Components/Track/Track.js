import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Track.css';

class Track extends React.Component {
    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this)
    }
    //used in a search, results of the search isRemoval is set to false (hence + to add to playlist)
    //if the song is already added to the playlist, isRemoval is true (hence - added to the playlist)
    renderAction(){
        if(this.props.isRemoval){
            return <button className='Track-action' onClick={this.removeTrack}>-</button>
        } else {
            return <button className='Track-action' onClick={this.addTrack}>+</button>
        }
    }

    addTrack() {
        //checks if the track's id already exists or not
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track)
    }
    
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p> {this.props.track.artist} | {this.props.track.album} </p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track;