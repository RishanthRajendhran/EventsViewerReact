import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sideBar';
import EventsViewer from './components/eventsViewer';
import data from "./data.js";
import EventTable from './components/eventTable';

var events = [];
for(var i=0;i<100;i++) {
    events.push("Events Type " + i );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        openEvents : [],
        activeTab: 0,
        data: []
    }
    this.eventClicked = this.eventClicked.bind(this);
    this.makeActiveTab = this.makeActiveTab.bind(this);
    this.closeTab = this.closeTab.bind(this);
    this.closeAllTabs = this.closeAllTabs.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: data
    });
  }

  closeAllTabs() {
    this.setState({
      openEvents: []
    });
  }

  eventClicked(index) {
      this.makeActiveTab(index);
      if(this.state.openEvents.includes(index)) {
        return;
      }
      this.setState(prevState => ({
          openEvents: [...prevState.openEvents, index]
        }))
      return;
  }

  makeActiveTab(index) {
    this.setState({
      activeTab: index
    });
  }

  closeTab(index) {
    if(!this.state.openEvents.includes(index)) {
      return;
    }
    if(this.state.activeTab == index) {
      var nextTab;
      if(this.state.openEvents.indexOf(index) == this.state.openEvents.length-1) {
        if(this.state.openEvents.length==1) {
          nextTab = this.state.openEvents[0];
        } else {
          nextTab = this.state.openEvents[this.state.openEvents.length-2];
        }
      } else {
        nextTab = this.state.openEvents[this.state.openEvents.indexOf(index) + 1];
      }
      this.setState({
        activeTab: nextTab
      });
    }
    this.setState({
      openEvents: this.state.openEvents.filter((event) => event!= index),
    });
    return;
  }

  render() {
    return (
      <div className="App">
        <EventsViewer openEvents={this.state.openEvents} closeAllTabs={this.closeAllTabs} closeTab={this.closeTab} activeTab={this.state.activeTab} makeActiveTab={this.makeActiveTab}/>
        <div className="sidebarTableContainer">
          <div>
            <SideBar events={events} eventClicked={this.eventClicked}/>
          </div>
          <div>
            {this.state.openEvents.length ? <EventTable data={this.state.data} activeTab={this.state.activeTab}/> : <div></div>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
