import React from 'react';
import {
    Container
} from "react-bootstrap";
import FooterComponent from "../../commonComponents/footer/footer";
import NavModeratorMenu from "./navMenu/navMenu";

class ModeratorHome extends React.Component{
    render() {
        return (
            <div>
                <NavModeratorMenu/>
                <Container>
                    <div className="word-res-area">
                    <div className="d-flex justify-content-center mb-1">
                        <p className="text-center fw-bold mt-1 random-word-mean" style={{fontSize:'22px',color:'limegreen',fontWeight:500}}>
                           Assalom alaykum! Moderator paneliga xush kelibsiz! Sizga kerakli menyuni sahifani yuqorisidagi menyudan tanlang, iltimos.
                        </p>
                    </div>
                    </div>
                </Container>
                <FooterComponent/>
            </div>
        );
    }
}
export default ModeratorHome;