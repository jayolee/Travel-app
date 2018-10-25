import React, { Component } from 'react';
import ImageView from './imageview.js';

import chichu0 from './images/chichu/chichu_0.jpg';
import chichu1 from './images/chichu/chichu_1.jpg';
import chichu2 from './images/chichu/chichu_2.jpg';
import chichu3 from './images/chichu/chichu_3.jpg';
import chichu4 from './images/chichu/chichu_4.jpg';
import chichu5 from './images/chichu/chichu_5.jpg';

import redpumk0 from './images/pumpkins/redPumpkin_0.jpg';
import redpumk1 from './images/pumpkins/redPumpkin_1.jpg';

import benesse0 from './images/benesse/benesse_0.jpg';
import benesse1 from './images/benesse/benesse_1.jpg';
import benesse2 from './images/benesse/benesse_2.jpg';
import benesse3 from './images/benesse/benesse_3.jpg';
import benesse4 from './images/benesse/benesse_4.jpg';

import leeUfan0 from './images/leeUfan/leeUfan_0.jpg';
import leeUfan1 from './images/leeUfan/leeUfan_1.jpg';
import leeUfan2 from './images/leeUfan/leeUfan_3.jpg';
import leeUfan3 from './images/leeUfan/leeUfan_4.jpg';

import ie0 from './images/ie/ie_0.jpg';
import ie1 from './images/ie/ie_1.jpg';
import ie2 from './images/ie/ie_2.jpg';
import ie3 from './images/ie/ie_3.jpg';
import ie4 from './images/ie/ie_4.jpg';
import ie5 from './images/ie/ie_5.jpg';

import kabocha0 from './images/pumpkins/kabocha_0.jpg';
import kabocha1 from './images/pumpkins/kabocha_1.jpg';



class DetailView extends Component {
  constructor(props) {
    super(props);

    this.chichuImgs=[chichu0, chichu1, chichu2, chichu3, chichu4, chichu5];
    this.chichuInfo={
      title:"Chichu Art Museum", 
      detail: "The Chichu Art Museum is a museum built directly into the Naoshima Island. It was designed by architect Tadao Ando. It features installations by Walter De Maria and James Turrell, as well as painted works in the Water Lilies series by Claude Monet in a room with shiny tiles.",
      url:"http://benesse-artsite.jp/en/art/chichu.html",
      img:this.props.mainImgs[4]
    };
    this.benesseImgs=[benesse0, benesse1, benesse2, benesse3, benesse4];
    this.benesseInfo={
      title: "Benesse House",
      detail: "Benesse House is both a museum and a hotel displaying contemporary art. Guests can closely interact with contemporary art at Benesse House. The museum utilize the space artistic way. The building is designed by Tadao Ando.",
      url: "http://benesse-artsite.jp/en/art/benessehouse-museum.html",
      img: this.props.mainImgs[5]
    };
    this.leeUfanImgs=[leeUfan0, leeUfan1, leeUfan2, leeUfan3];
    this.leeUfanInfo={
      title: "Lee Ufan Museum",
      detail: "Benesse House is both a museum and a hotel displaying contemporary art. Guests can closely interact with contemporary art at Benesse House. The museum utilize the space artistic way. The building is designed by Tadao Ando.",
      url: "http://benesse-artsite.jp/en/art/lee-ufan.html",
      img: this.props.mainImgs[2]
    };
    this.ieImgs=[ie0, ie1, ie2, ie3, ie4, ie5];
    this.ieInfo={
      title: "Art House Project",
      detail: "Benesse House is both a museum and a hotel displaying contemporary art. Guests can closely interact with contemporary art at Benesse House. The museum utilize the space artistic way. The building is designed by Tadao Ando.",
      url: "http://benesse-artsite.jp/en/art/arthouse.html",
      img: this.props.mainImgs[3]
    };
    this.redpumkImgs=[redpumk0, redpumk1];
    this.redpumkInfo={
      title: "Red Pumpkin",
      detail: "Benesse House is both a museum and a hotel displaying contemporary art. Guests can closely interact with contemporary art at Benesse House. The museum utilize the space artistic way. The building is designed by Tadao Ando.",
      artist: "Kusama Yayoi",
      url: "http://benesse-artsite.jp/en/art/benessehouse-museum.html",
      img: this.props.mainImgs[0]
    };
    this.kabochaImgs=[kabocha0, kabocha1];
    this.kabochaInfo={
      title: "Kabocha",
      detail: "Yayoi Kusama's Kabocha (Yellow Pumpkin) is the icon of Naoshima island. Once, it was carried by flood, but now it's back on the dock facing Benesse House.",
      artist: "Kusama Yayoi",
      url: "http://benesse-artsite.jp/en/art/benessehouse-museum.html",
      img: this.props.mainImgs[1]
    };
    this.imglist=[this.chichuImgs, this.benesseImgs,this.leeUfanImgs, this.ieImgs, this.redpumkImgs, this.kabochaImgs];
    this.infolist=[this.chichuInfo, this.benesseInfo,this.leeUfanInfo, this.ieInfo, this.redpumkInfo, this.kabochaInfo];
    this.idorder={
    redpumpkin_d: 4,
    leeufan_d: 2,
    chichu_d: 0,
    benesse_d:1,
    kabocha_d:5,
    ieproject_d:3,
  }


    this.state={
      detailview: null,
      imgsrc:null,
  }

  }
renderscreen(){
  var element = []
  if(this.state.detailview !== null){

    element.push(<div className="details" id="DetailView" >
        <ImageView onBack={this.backhandler.bind(this)} imgorder={this.state.pagenum} imgsrc={this.state.imgsrc} infolist={this.infolist} imglist={this.imglist} idnum={this.idorder} />
      </div>)
        return(element)
  }
  else{
    element.push(<div className="details" id="DetailView">
        {this.renderTop()}
        {this.renderBotTitle()}
        <div className="images">
          {this.renderImgs()}

        </div>
      </div>)
        return(element)
  }
}


backhandler(){

  this.setState({detailview: null});
}

renderImgs(){
  let id = this.props.id;
  var element= []
  var idnum=this.idorder[id];

for (var i=0; i<this.imglist[idnum].length; i++){
      var k=this.imglist[idnum][i];
        element.push(<div className="imgwrapper"  > 
                    <img src={this.imglist[idnum][i]}  onClick = {(ev) => this.setState({detailview : 1, imgsrc:k})} onBack={this.backhandler.bind(this)}/>
                     </div>
                     )
        }

  return(element)
}


renderBotTitle(){

  let id = this.props.id;
  var element= []
  var idnum=this.idorder[id];

  if(idnum==5 || idnum==4){
  element.push(<div className="details_bottom" />)}
  else{
    element.push(<div className="details_bottom">Artwork of {this.infolist[idnum].title}</div>)
  }
  return(element)
}

renderTop(){

  let id = this.props.id;
  var element= []
  var idnum=this.idorder[id];

  if(idnum==5 || idnum==4){
  element.push(
        <div className="details_top">
           <div className="Xmark" onClick = {this.props.onClose} >X</div>
          <div className="detail_img"> <img src={this.infolist[idnum].img} /></div>
          <div className="detail_paragraph" >
            <div className="detail_title" >{this.infolist[idnum].title}</div>
            <div className = "artist">Artist: {this.infolist[idnum].artist}</div>
            {this.infolist[idnum].detail}
              <a href={this.infolist[idnum].url} target="_blank">
                <div className="btn" >Learn More</div>
              </a> 
          </div>
        </div>
                     )
                   }
    else{
      element.push(
        <div className="details_top">
           <div className="Xmark" onClick = {this.props.onClose} >X</div>
          <div className="detail_img"> <img src={this.infolist[idnum].img} /></div>
          <div className="detail_paragraph" >
            <div className="detail_title" >{this.infolist[idnum].title}</div>
            {this.infolist[idnum].detail}
              <a href={this.infolist[idnum].url} target="_blank">
                <div className="btn" >Learn More</div>
              </a> 
          </div>
        </div>
                     )

    }

  return(element)
}

  
  render(){

    return (<div>
      {this.renderscreen()}
      </div>
    );
  }
}
export default DetailView


