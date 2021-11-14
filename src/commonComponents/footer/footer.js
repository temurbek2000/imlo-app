import React from 'react';
import {
    Container
} from "react-bootstrap";

class FooterComponent extends React.Component{
    render() {
        return (
            <div className="p-3 " style={{width:'100%',borderRadius:'5px',minHeight:'150px',backgroundColor:'black'}}>
              <Container>
                  <div className="d-flex p-4">
                      <p style={{color:'white',fontSize:'22px',fontWeight:'bold'}}>
                          Copyright © 2021 . Imlo Manbai
                         <div className="d-flex text-center">
                             <p className={'text-center'} style={{color:'white',fontSize:'18px',fontWeight:600,textAlign:'center'}}>
                                 Designed by <a href="http://t.me/IBRAGIMOV_ULUGBEK_2">Ibragimova Shakhnoza</a> and <br/>
                                  <a href="http://t.me/temurbek1401">Temurbek Ismoilov</a>
                             </p>
                         </div>
                      </p>

                  </div>
              </Container>
            </div>
        );
    }
}
export default FooterComponent;