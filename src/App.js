import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sideBar';
import EventsViewer from './components/eventsViewer';

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
    }
    this.eventClicked = this.eventClicked.bind(this);
    this.makeActiveTab = this.makeActiveTab.bind(this);
    this.closeTab = this.closeTab.bind(this);
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
    if(this.state.activeTab === index) {
      console.log("Here");
      var nextTab;
      if(this.state.openEvents.indexOf(index) === this.state.openEvents.length-1) {
        if(this.state.openEvents.length===1) {
          nextTab = this.state.openEvents[0];
        } else {
          nextTab = this.state.openEvents[this.state.openEvents.length-2];
        }
      } else {
        nextTab = this.state.openEvents[this.state.openEvents.indexOf(index) + 1];
      }
      console.log(nextTab);
      this.setState({
        activeTab: nextTab
      });
    }
    this.setState({
      openEvents: this.state.openEvents.filter((event) => event!=index),
    });
    return;
  }

  render() {
    return (
      <div className="App">
        <EventsViewer openEvents={this.state.openEvents} closeTab={this.closeTab} activeTab={this.state.activeTab} makeActiveTab={this.makeActiveTab}/>
        <SideBar events={events} eventClicked={this.eventClicked}/>
      </div>
    );
  }
}

export default App;
