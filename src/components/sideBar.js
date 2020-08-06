import React, { Component } from "react";
import "../css/sideBar.css";


function EventDisplay({events,eventClicked}) {    
    return events.map((event,index) => {
        return(
            <div key={index} className="eventsOption" onClick={() => eventClicked(index)}>
                {event}
             </div>
        );
    });
}

class SideBar extends Component {

    render() {
        return(
            <div className="sideBarContainer">
                <div className="eventsSideBar">
                    <EventDisplay events = {this.props.events} eventClicked = {this.props.eventClicked}/>
                </div>
            </div>
        );
    }
}

export default SideBar;