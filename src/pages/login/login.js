import React from 'react';
import {
    Container,
    Card,
    Button
} from "react-bootstrap";
import '../../styles/login.css'
import NavbarComponent from "../../commonComponents/navbar/navbar";
import FooterComponent from "../../commonComponents/footer/footer";

class LoginComponent extends React.Component{
    render() {
        return (
           <div>
               <NavbarComponent/>
               <Card style={{ width: '18rem' }}>

                   <Card.Body>
                       <Card.Title>Card Title</Card.Title>
                       <Card.Text>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                       </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
               </Card>
               <FooterComponent/>
            </div>
        );
    }
}
export default LoginComponent;