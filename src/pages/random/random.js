import React from 'react';
import {
    Container,
    Button
} from "react-bootstrap";
import '../../styles/random.css'
import NavbarComponent from "../../commonComponents/navbar/navbar";
import FooterComponent from "../../commonComponents/footer/footer";
import {words} from "../../constants/words";
import {Link} from "react-router-dom";


class RandomWord extends React.Component{
    state={
       know:true,
       word:{},
       word_id:0,
        text:'Bilaman',
    }


    componentDidMount() {
        this.setState({
            word:words[Math.floor(Math.random()*words.length)]
        })

    }

    render() {
        const {know,word}=this.state;
        const dontKnow=()=>{
            this.setState({
                know:false,
                text:'Keyingi'
            })
        }
        const nextWord=()=>{
            this.setState({
                know:true,
                word:words[Math.floor(Math.random()*words.length)],
                text:'Bilaman',
            })
        }


        return (
            <div>
                <NavbarComponent/>

                <div className="word-res-area">
                    <p className="title random-title">
                        {word.title}
                    </p>
                    {
                        know?"": <p className="word-mean random-word-mean">
                            {
                                word.meaning?word.meaning.map(item=>{
                                    return <>
                                        {item.meanid}. {item.text}
                                    </>
                                }):""
                            }
                        </p>
                    }
                    <div className="random-buttons">
                        <Button  variant="primary" style={{fontWeight:'normal',fontSize:'20px'}} onClick={dontKnow}>Bilmayman</Button>
                        <Button onClick={nextWord} className="know-button" variant="">{this.state.text}</Button>

                    </div>

                </div>
                <div className="d-flex justify-content-center mt-5 mb-3">
                  <Link to={'/statistics'}>
                      <Button  variant="danger" style={{fontWeight:'normal',fontSize:'18px'}}>Yakunlash</Button>

                  </Link>
                </div>
                <FooterComponent/>

            </div>
        );
    }
}
export default RandomWord;