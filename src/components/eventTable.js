import React, { Component } from "react";
import "../css/eventTable.css";

function Table({data,activeTab}) {
    return data.map((entry) => {
        console.log(entry);
        return(
            <div className="eventTableEntry">
                <div className="entryTimeStamp">
                    <div>
                        <h6>timestamp</h6>
                    </div>
                    <div>
                        {entry.timestamp}{activeTab*25000}
                    </div>
                </div>
                <div className="entry_raw">
                    <div>
                        <h6>_raw</h6>
                    </div>
                    <div>
                        {activeTab*251383}{entry._raw}{activeTab}
                    </div>
                </div>
            </div>
        );
    });
}

class EventTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="eventTableContainer">
                <Table data={this.props.data} activeTab={this.props.activeTab}/>
            </div>
        );
    };
}

export default EventTable;