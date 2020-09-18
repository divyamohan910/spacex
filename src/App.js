import React, { Component } from 'react';
import './App.css';

class App extends Component {

     constructor(props) {
            super(props);
            this.state={
                items:[],
                isLoaded: false
            }
        }

        componentDidMount(){
            fetch('https://api.spacexdata.com/v3/launches?limit=100')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
        }

    render(){
        var items= this.state.items;
        console.log('items on console',items[0]);
        if(!this.state.isLoaded){
           return <div>loading...</div>
        }
        
  else {
    return (
    <div className="App">
    <h1>SpaceX Launch Programs</h1>
      <div className="wrapper">
      <div className="sidebar">
      <div className="sidebarmenu">
      <h3 className="filters">Filters</h3>
      <p className="launchyear">Launch year</p>
      <div className="launchyearcontainer">
      <button className="buttongreen">2006</button>
      <button className="buttongreen">2007</button>
      <button className="buttongreen">2008</button>
      <button className="buttongreen">2009</button>
      <button className="buttongreen">2010</button>
      <button className="buttongreen">2011</button>
      <button className="buttongreen">2012</button>
      <button className="buttongreen">2013</button>
      <button className="buttongreen">2014</button>
      <button className="buttongreen">2015</button>
      <button className="buttongreen">2016</button>
      <button className="buttongreen">2017</button>
      <button className="buttongreen">2018</button>
      <button className="buttongreen">2019</button>
      <button className="buttongreen">2020</button>
      </div>
      <p className="launchyear">Successful Launch</p>
      <button className="buttongreen">True</button>
      <button className="buttongreen">False</button>
      <p className="launchyear">Successful Landing</p>
       <button className="buttongreen">True</button>
      <button className="buttongreen">False</button>
      </div>
      </div>
      <div className="maincontent">

           {this.state.items.map(item => (
        // <p>{item.flight_number}</p>
        <div className="Card">
                <img src={item.links.mission_patch} alt="spaceimg" />
                <h4 className="launchname">{item.mission_name}</h4>
                <p className="cardboldtext">Mission Ids:</p>
           {item.mission_id.length>0 ? <ul className="cardtextfont">
                           <li>{item.mission_id}</li>
                       </ul>: <p className="cardtextfont1">Null</p>}
                <p className="cardboldtext">Launch Year:</p>
                <p className="cardtextfont1">{item.launch_date_utc.substring(0,4)}</p>
                <p className="cardboldtext">Successful Launch:</p>
                <p className="cardtextfont1">{item.launch_success ? "true" : "false"}</p>
           
                <p className="cardboldtext">Successful Landing:</p>
                <p className="cardtextfont1">{item.launch_failure_details ? "true" : "false"}</p>
                </div> 
        ))};
                
      </div>      
    </div>
    </div>
  );
}
}
}

export default App;
