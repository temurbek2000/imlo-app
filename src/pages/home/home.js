import React from 'react';
import NavbarComponent from "../../commonComponents/navbar/navbar";
import {
    Container
} from "react-bootstrap";
import FooterComponent from "../../commonComponents/footer/footer";

class HomePage extends React.Component{
    render() {
        return (
            <div>
                <NavbarComponent/>
                <Container>
                    <div className="d-flex justify-content-center mb-5">
                        <p className="text-center fw-normal mt-5" style={{fontSize:'22px',color:'rgba(0,0,0,0.7)',fontWeight:500}}>
                            Ushbu manba o'zbek tilida yuzaga kelayotgan kamchiliklarni bartaraf etish , o'zbek tilining
                            mavqeini oshirish va sizning sheriyat olamidagi faoliyatingizda ishonchli yordamchidir. So'z qidiruv va o'z bilimni sinash imkoniyatlari esa manbaning eng foydali qismidir. <br/><br/>
                            Foydalanuvchilar soni: 11 884 <br/>
                            So'zlar soni: 562
                        </p>
                    </div>
                </Container>
                <FooterComponent/>
            </div>
        );
    }
}
export default HomePage;