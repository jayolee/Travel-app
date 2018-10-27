import React, { Component } from 'react';
import aboutImg from './images/about.png';
class About extends Component {
  constructor(props) {
    super(props);
  }
	
	render(){
		return(<div>
			 <div class="detailWrapper" />
			<div className="about-wrap">
  			<div className="about-roll" >
   				 <div className="about_title">Artwork of Naoshima</div>
   			 	<div className="about_content">
    			  	<div className="about_imgwrap">
				  		<img src={aboutImg} alt="about"/>
				 	</div>
      				<div className="about_paragraph" >
      				This is a project of a class: <i>Software Structures for User Interfaces.</i>
      				<br />This website is created to introduce a meaningful location for myself.
      				The site introduces six different sculptures or art museums of Naoshima Island. 
      				The site is made of React. Feel free to leave feedback.<br />
       				 <b><span>Thank you!</span></b>
        				<div className="btn">Leave Feedback</div>
      				</div>
   				 </div>
  			</div>
				<div className="about btn reverse" onClick = {(ev) => {this.props.onClose(); this.props.getagain()}}> 
				ABOUT
   				<div className="dashline" />
  			</div>
  			</div>
				</div>
			);
	}
}
export default About