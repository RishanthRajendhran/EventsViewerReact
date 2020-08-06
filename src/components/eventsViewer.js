import React, {Component} from "react";
import "../css/eventsViewer.css";

class EventsViewer extends Component {

    componentDidUpdate() { 
        var tabs = document.getElementsByClassName("toHide");
        tabs = Array.from(tabs);
        if(this.props.openEvents.length>=9) {
            tabs.forEach((tab) => tab.style.display = "none");
        } else {
            tabs.forEach((tab) => tab.style.display = "inline");
        }
        tabs = document.getElementsByClassName("eventTab");
        tabs = Array.from(tabs);
        if(tabs.length == 0)
            return;
        var curTab;
        curTab = tabs.filter(tab => tab.innerText.match(/(\d+)/)[0] == this.props.activeTab)[0];
        if(curTab) {
            curTab.classList.add("active");
        }
        //In case of overflow due to large number of tabs, scrollIntoView will help scroll automatically such that the active tab is visible
        curTab.scrollIntoView();
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
                <div id="closeAllTabs" onClick={this.props.closeAllTabs}>
                    <h6>
                        Close all tabs
                    </h6>
                </div>
                <div className="eventsViewerTabs">
                    {this.props.openEvents.map((event,index) => {
                        return(
                            <div key={index} className="eventTab">
                                <div className = "tabName" onClick={() => this.props.makeActiveTab(event)}>
                                    <span className="toHide">Event Type </span><span>{event}</span>
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