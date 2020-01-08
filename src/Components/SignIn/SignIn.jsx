import React, { Component } from 'react';
import { Container, Row  } from 'react-bootstrap';
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import './SignIn.scss'; 

class SignIn extends Component {
	render() {
		return (
			<Container className="signin">
				<Row>
					<SignInComponent/>
					<SignUpComponent/>
				</Row>
			</Container>
		);
	}
}

export default SignIn;
