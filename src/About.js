import React, { Component } from 'react';
import kabochaImg from './images/kabocha.png';
class About extends Component {
	constructor(props) {
    super(props);
  }
	
	render(){
		return(
			<div>
			<div className="about reverse"> 
				ABOUT
   				<div className="dashline" />
  			</div>
  			<div className="about-roll" >
   				 <div className="about_title">Artwork of Naoshima</div>
   			 	<div className="about_content">
    			  	<div className="about_imgwrap">
				  		<img src={kabochaImg} alt="Kabocha"/>
				 	</div>
      				<div className="about_paragraph" >
      				This is a project of a class: <i>Software Structures for User Interfaces.</i>
      				<br />This website is created to introduce a meaningful location for myself.
      				The site introduces six different sculptures or art museums of Naoshima Island. 
      				The site is made of React. Feel free to leave feedback.<br />
       				 <b><span style="font-size:18px; line-height:2.4">Thank you!</span></b>
        				<div className="btn">Leave Feedback</div>
      				</div>
   				 </div>
  			</div>
  			</div>
			);
	}
}
export default About