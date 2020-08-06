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

    componentDidUpdate() {
        var tabOptions = document.getElementsByClassName("eventsOption");
        tabOptions = Array.from(tabOptions);
        tabOptions.forEach((tabOption) => tabOption.style.backgroundColor = "lightgray");
        var activeTabOption = tabOptions.filter((tabOption) => tabOptions.indexOf(tabOption)==this.props.activeTab)[0];
        if(activeTabOption) {
            activeTabOption.style.backgroundColor = "azure";
            activeTabOption.scrollIntoViewIfNeeded(activeTabOption.preventDefault);
        }
    }

    componentWillUpdate() {
        var tabOptions = document.getElementsByClassName("eventsOption");
        tabOptions = Array.from(tabOptions);
        var activeTabOption = tabOptions.filter((tabOption) => tabOptions.indexOf(tabOption)==this.props.activeTab)[0];
        if(activeTabOption) {
            activeTabOption.style.backgroundColor = "lightgray";
        }
    }

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