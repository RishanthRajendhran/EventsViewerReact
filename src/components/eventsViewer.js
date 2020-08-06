import React, {Component} from "react";
import "../css/eventsViewer.css";

class EventsViewer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() { 
        var tabs = document.getElementsByClassName("eventTab");
        tabs = Array.from(tabs);
        if(tabs.length === 0)
            return;
        var curTab;
        curTab = tabs.filter(tab => tab.innerText.match(/(\d+)/)[0] == this.props.activeTab)[0];
        if(curTab) {
            curTab.classList.add("active");
        console.log(curTab.innerText);

        }

        tabs.filter(tab => tab.innerText.match(/(\d+)/)[0] != this.props.activeTab).forEach((tab) => tab.classList.remove("active"));
    }

    render() {
        return(
            <div className="navBar">
                <div>
                    <h2>
                        Events Viewer
                    </h2>
                </div>
                <div className="eventsViewerTabs">
                    {this.props.openEvents.map((event,index) => {
                        return(
                            <div key={index} className="eventTab">
                                <div className = "tabName" onClick={() => this.props.makeActiveTab(event)}>
                                    Event Type {event}
                                </div>
                                <div className = "tabClose" onClick={() => this.props.closeTab(event)}>
                                    x
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default EventsViewer;