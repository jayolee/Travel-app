import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './About.js';
import DetailView from './detailPage.js';
import map from './images/map.png';
import pin from './images/pin.png';


import redPumpkinImg from './images/redpumpkin.png';
import kabochaImg from './images/kabocha.png';
import leeufanImg from './images/leeufan.png';
import ieImg from './images/ieproject.png';
import chichuImg from './images/chichu.png';
import benesseImg from './images/benesse.png';

import logo from './images/logo.svg';





class App extends Component {
  constructor(props) {
    super(props);
    this.mainImglist=[redPumpkinImg,kabochaImg,leeufanImg,ieImg,chichuImg,benesseImg];
    this.state = {
      page: 0,
      curid:null,
    }
    
  }




  renderPageView() {
      if(this.state.detail !== null){
    if(this.state.page === 7)
      return <About onClose = {this.handler.bind(this)} />
    if(this.state.page === 1)
      return <DetailView onClose={this.handler.bind(this)} id={this.state.curid} mainImgs={this.mainImglist}/>
    
}
  }

   handler() {
        
       this.setState({page: null});
    }

  render() {

    return (
      <div className="App">
        <div className="header">
          <div className="logo"> 
		        <img src={logo} alt="logo" /> 
          </div>
            <div className="about btn" onClick = {(ev) => this.setState({page: 0})}>ABOUT
           <div className="dashline" />
          </div>
        </div>
        <div className="main">
          <div className="maps"> 
            <div className="mapwrapper">
              <img src={map} alt="map"/>

               <div className="pin" id="redpumpkin" onClick = {(ev) => this.setState({page : 1, curid:"redpumpkin_d"})} > <img src={pin} />
                <div className="pinshadow" />
              </div>
              <div className="pin" id="leeufan" onClick = {(ev) => this.setState({page: 1, curid:"leeufan_d"})}> <img src={pin} />
                <div className="pinshadow" />
              </div>
              <div className="pin" id="chichu" onClick = {(ev) => this.setState({page: 1, curid:"chichu_d"})}> <img src={pin} />
               <div className="pinshadow" />
              </div>
              <div className="pin" id="benesse" onClick = {(ev) => this.setState({page: 1, curid:"benesse_d"})}> <img src={pin} />
               <div className="pinshadow" />
              </div>
               <div className="pin" id="kabocha" onClick = {(ev) => this.setState({page: 1, curid:"kabocha_d"})}> <img src={pin} />
                <div className="pinshadow" />
              </div>
              <div className="pin" id="ieproject" onClick = {(ev) => this.setState({page: 1, curid:"ieproject_d"})}> <img src={pin} />
               <div className="pinshadow" />
               </div>
            </div>
            <div className="title">
              <div className="smaller">Artwork of</div>
              <div className="bigger">Naoshima</div>
              Naoshima is an island in the Seto Inland Sea, Japan. It’s known for its modern art museums, architecture, and sculptures. The six places here are selected based on my experience in the island.
             </div>
          </div>
        </div>
        {this.renderPageView()};

      </div>
	
    );
  }
}

export default App;
