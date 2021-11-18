import React from 'react';
import './About.scss';

function About() {
	return (
		<div id='About'>
			<h1 style={{ textAlign: 'center' }}>About The Application</h1>
			<div className='row'>
				<div className='col-md-6'>
					<p>
						This is a school management system in which you can manage the school subjects, teachers,
						students and classes. 
					</p>
					<p>Start using the app, navigate from the navbar at the right side :)</p>
				</div>
			</div>
		</div>
	);
}

export default About;
