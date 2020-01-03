import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import "./Cart.scss";

class Cart extends Component {
   
    render() {
        return (
            <div className="cartWrap">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="cartHeader">
                                Cart
                            </h1>
                            <hr/>
                            <h1>
                            {this.props.products.title}
                            </h1>
                            <hr/>
                            <Button className="buttonCart">Checkout</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Cart;