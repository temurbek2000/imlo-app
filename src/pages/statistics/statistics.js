import React from 'react';
import '../../styles/statistics.css'
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavbarComponent from "../../commonComponents/navbar/navbar";
import FooterComponent from "../../commonComponents/footer/footer";
class StatisticComponent extends React.Component{
    state={
        word_count:10,
    }
    render() {
        const {word_count}=this.state;
        const Delete_Statistics=()=>{
            this.setState({
                word_count:0,
            })
        }
        return (
            <div>
                <NavbarComponent/>
                <div className="d-flex justify-content-center mt-3">
                    <Link to={'/random'}>
                        <Button  className="know-button" variant="">O'zgartirish</Button>
                    </Link>

                </div>
                <div className='d-flex justify-content-center fw-bold fs-3 font-monospace' style={{color:"#545454"}}>
                    Statistika
                </div>
                <div className='d-flex justify-content-center text-center font-monospace fw-bold fs-5 p-4'>
                    "Bilaman" deb belgilagan so'zlaringiz soni - {word_count}
                </div>
                <div className="d-flex justify-content-center mt-3 mb-3">
                        <Button  variant="danger" onClick={Delete_Statistics}>O'chirib yuborish</Button>
                </div>
                <FooterComponent/>

            </div>
        );
    }
}
export default StatisticComponent