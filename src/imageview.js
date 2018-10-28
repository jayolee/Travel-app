import React, { Component } from 'react';



class ImageView extends Component {
  constructor(props) {
    super(props);
      this.chichuImgInfo=[{
      artist: "Walter De Maria",
      title: "Time/Timeless/No Time, 2004",
      url:"https://www.flickr.com/photos/eager/5298571342",
    },
    {
      artist: "Walter De Maria",
      title: "Time/Timeless/No Time, 2004",
      url:"https://www.flickr.com/photos/telstar/204536034/in/photolist-XGN46Z-24jAfAu-8WgEoC-7bQcHn-24jAfpN-6FuBr1-j7jH5-275mwVc-6G2LeR-j5irm-6MhW49-8nt7Xc-8nwdWq-8nt5Mp-8nt64p-8nwfom-8nt73P-8nt6uX-95dxZY-95dxws-8nwfa5-9yiu3W-ojQ7Ho-95atpB-Xj5J55-6EYKgu-95dyL3-95atF6-iHrVQQ-h1XegA-j5gX4-7nAigX-iHp91V-8nt7Ma-9aX8VW-8byXUo-iHnURT-8nt6Ne-iHpSS7-9aXaz5-j5h4T-iHrTJA-iBLjiH-7rNCNp-iHrVVj-GoP2FE-iHopMM-4JU6jb-8nwjxE-U5FPL8",
    },
    {
      artist: "Tadao Ando",
      title: "Chichu Art Museum",
      url:"https://www.flickr.com/photos/eager/5298571342",
    },
    {
      artist: "Tadao Ando",
      title: "Chichu Art Museum",
      url:"https://www.flickr.com/photos/mctrent/4837430315/in/photolist-8nt6uX-8nwfa5-9yiu3W-275mx8M-7bQcHn-j5irm-6FuBr1-24jAfUq-24jAfAu-8WgEoC-6G2LeR-24jAfpN-j7jH5-XGN46Z-6MhW49-jj7ao9-8oa1hy-8nwgaU-8o93zz-95dxZY-95dxws-275mwVc-6EYKgu-95atpB-j5gX4-Xj5J55-iHrVQQ-95dyL3-95atF6-iHp91V-j5h4T-iHnURT-iHpSS7-7nAigX-iHrTJA-iBLjiH-h1XegA-9aX8VW-8nt7Ma-9aXaz5-8ocdGE-48F4pv-7WrNRn-amruS-ojQ7Ho-8nt6Ne-7rNCNp-iHopMM-8byXUo-GoP2FE",
    },
    {
      artist: "Claude Monet",
      title: "Water Lilies series",
      url:"http://www.cgarchitect.com/2017/11/memories-from-japan",
    },
    {
      artist: "Claude Monet",
      title: "Water Lilies series",
      url:"https://www.flickr.com/photos/simno/4887378879",
    },
    ];
    this.benesseImgInfo=[{
      artist: "Kan Yasuda",
      title: "The Secret of the Sky, 1996",
      url:"https://www.flickr.com/photos/telstar/204530817/",
    },
    {
      artist: "Richard Long",
      title: "Inland Sea Driftwood Circle, 1997",
      url:"https://www.flickr.com/photos/garrettziegler/41216890104/",
    },
    {
      artist: "Bruce Nauman",
      title: "100 Live and Die, 1984",
      url:"https://www.flickr.com/photos/johsgrd/14507211785/",
    },
    {
      artist: "Benesse House",
      title: "Inside of Benesse House",
      url:"https://www.flickr.com/photos/garrettziegler/28063943698/",
    },
    {
      artist: "Yanagi Yukinori",
      title: "Banzai Corner, 1991",
      url:"https://www.flickr.com/photos/garrettziegler/28063954908/",
    },
  
    ];
    this.leeUfanImgInfo=[{
      artist: "Lee Ufan",
      title: "Relatum - Point,Line,Plane, 2010",
      url:"https://www.flickr.com/photos/jasonschlabach/17305837590/",
    },
    {
      artist: "Lee Ufan",
      title: "Relatum - Point,Line,Plane, 2010",
      url:"https://www.flickr.com/photos/8057065@N04/15608746321/",
    },
    {
      artist: "Lee Ufan",
      title: "Relatum - A Signal, 2010",
      url:"https://www.flickr.com/photos/brunovanbesien/35329752146/in/photolist-275mwAV-26TG2bP-UAXVLm-ojJEqa-VPYdrG-9r8PBb-9r5Qwe-9r8P27-24jAfif-9r5PUV-Xj5Ge1-Xj5F7m-bJX3rZ-zfNUY6-e3zaa9-BYJBqz-iBKYt3-M3i9BZ",
    },
    {
      artist: "Lee Ufan",
      title: "Relatum - A Signal, 2010",
      url:"https://www.flickr.com/photos/brunovanbesien/40248141680/",
    },
    ];
    this.ieImgInfo=[{
      artist: "Art House Project",
      title: "Haisha",
      url:"https://www.flickr.com/photos/shingo/8337170167/",
    },
    {
      artist: "Art House Project",
      title: "Inside of Haisha",
      url:"https://www.flickr.com/photos/hakodx/436469300/",
    },
    {
      artist: "Honmura District",
      title: "Street of Honmura",
      url:"https://www.flickr.com/photos/atsushi-nishio/2846950271/",
    },
    {
      artist: "Honmura District",
      title: "Wall Art",
      url:"https://www.flickr.com/photos/garrettziegler/41935421061/",
    },
    {
      artist: "Honmura District",
      title: "Ando Museum",
      url:"https://www.flickr.com/photos/chinnian/11562974103/",
    },
    {
      artist: "Tatsuo Miyajima",
      title: "Sea of Time, 1998",
      url:"https://www.flickr.com/photos/26516532@N08/21196793523/",
    },
    ];
    this.redpumpInfo=[{
      artist: "Yayoi Kusama",
      title: "Red Pumpkin, 1994",
      url:"https://www.flickr.com/photos/bryansjs/29998198135/",
    },
    {
      artist: "Yayoi Kusama",
      title: "Red Pumpkin, 1994",
      url:"https://www.flickr.com/photos/sergejf/36561263811//",
    },
    ];
    this.kabochaImgInfo=[{
      artist: "Yayoi Kusama",
      title: "Kabocha(Yellow Pumpkin), 1994",
      url:"https://www.flickr.com/photos/tagchan_stream/8709620467/",

    },
    {
      artist: "Yayoi Kusama",
      title: "Kabocha(Yellow Pumpkin), 1994",
      url:"https://www.flickr.com/photos/cotaro70s/10284060785/in/photolist-gELuYR-7r7KaY-7oZ4WR-ycDX2-e3tu88-ycDXb-9mVtBa-4ZaeqE-9mYxg5-9FWW3F-GHJrS7-7nAigX-gELoFm-XGN2Xr-AHx9Cg-GHJtpA-Bm4ZM6-5YMPju-5YHzvP-4CibYY-5YN2qo-6HLTTJ-5uVExL-7oHRyq-5YMP2w-5VzK9H-H7jxp-ahSmfR-5YHxQX-qddRn7-5YMMwJ-5YMJaQ-H7jDT-7oHRGC-BMiiXv-5EWiZf-w3Rdj2-7r3QFg-6Ksco6-e3zafo-5YHMGZ-e3ttZx-5VzJXv-8tsu4q-8tsu4d-8U75Md-8tsu47-6KwjFL-bJGiUi-XGNbKr",

    }]
    this.infolist=[this.chichuImgInfo, this.benesseImgInfo, this.leeUfanImgInfo, this.ieImgInfo, this.redpumpInfo, this.kabochaImgInfo];
    this.state={
      currentNum : this.props.imgorder,
  }
}


  renderImg(){
    var id= this.props.idnum[this.props.iddata];
    var idorder=this.state.currentNum;
    return <div className="imgwrapper_zoom"> <img src={this.props.imglist[id][idorder]} /> </div>
   
  }


  renderDetail(){

    var id= this.props.idnum[this.props.iddata];
    var element=[];
    var idorder=this.state.currentNum;

    element.push(<div className="detail_infowrap">
    <div className="imgdes"><b>{this.infolist[id][idorder].artist}</b><br />
      <i>{this.infolist[id][idorder].title}</i></div>
      <a href={this.infolist[id][idorder].url} target="_blank">
    <div className="imgsource">Image Source</div> 
    </a>
   </div>)
   
return(element)
  }



  renderArrows(){
    var id= this.props.idnum[this.props.iddata];
    var element=[];
    var idorder=this.state.currentNum;

    if (idorder == 0){
      element.push(
      <div className="detail_wrapper" >
      <svg className="icon" height="60" width="26" >
        <path d="M26 5 L12 30 L26 60" fill="none" opacity="0" stroke-width="3"/>
      </svg>
    
    {this.renderImg()}
      
      <svg className="icon right" height="60" width="26" onClick = {(ev) => {this.setState({currentNum: this.state.currentNum+1}); }}>
        <path d="M26 5 L12 30 L26 60" fill="none" stroke-width="3"/>
      </svg>
    </div>
    )
    }
    else if(idorder == this.infolist[id].length-1){
      element.push(
      <div className="detail_wrapper" >
      <svg className="icon" height="60" width="26" onClick = {(ev) => this.setState({currentNum: this.state.currentNum-1})}>
        <path d="M26 5 L12 30 L26 60" fill="none" stroke-width="3"/>
      </svg>
    
    {this.renderImg()}
      
      <svg className="icon right" height="60" width="26" >
        <path d="M26 5 L12 30 L26 60" fill="none" opacity="0" stroke-width="3"/>
      </svg>
    </div>
    )}
    else{
      element.push(
      <div className="detail_wrapper" >
      <svg className="icon" height="60" width="26" onClick = {(ev) => this.setState({currentNum: this.state.currentNum-1})}>
        <path d="M26 5 L12 30 L26 60" fill="none" stroke-width="3"/>
      </svg>
    
        {this.renderImg()}
      
      <svg className="icon right" height="60" width="26" onClick = {(ev) => this.setState({currentNum: this.state.currentNum+1})}>
        <path d="M26 5 L12 30 L26 60" fill="none"  stroke-width="3"/>
      </svg>
    </div>
    )
    }
    return element;
  }
  
  render(){

    return (
      
    <div >
      
    <div className="Xmark" onClick = {this.props.onBack}>
    
      <svg className="icon" height="50" width="30">
        <path d="M30 10 L10 30 L30 50" fill="none" stroke="#797979" stroke-width="3"/>
      </svg>
    </div>
    {this.renderArrows()}
  {this.renderDetail()}
    
    <div className="dashline_main">
   
    </div>
    
    
   </div>
	
    );
  }
}

export default ImageView;
