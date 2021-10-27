import React from 'react';
import {
    Container,
    Button
} from "react-bootstrap";
import '../../styles/wordsearch.css'
import NavbarComponent from "../../commonComponents/navbar/navbar";
import FooterComponent from "../../commonComponents/footer/footer";
import {words} from "../../constants/words";

class WordSearch extends React.Component{
    state={
        word:{},
        start:false,
    }
    render() {
        const {
            word,
            start
        }=this.state;
        const Search=()=>{
            this.setState({
                start:true
            })
            var search_word=document.querySelector(".word-input").value
            var res=false
            words.map(item=>{
                if(item.title.toLowerCase()==search_word.toLowerCase()){
                    this.setState({
                        word: item,
                    })
                    res=true

                }
            })
            if(!res){
                this.setState({
                    word: {}
                })
            }

            document.querySelector(".word-input").value=''
        }
        return (
            <div>
                <NavbarComponent/>
                {/*<Container>*/}
                    <div className="p-5">
                        <p className="word">So'z kiriting: <input type="text" className="word-input"/></p>
                        <Button onClick={Search} variant="primary" style={{fontWeight:'normal',fontSize:'20px'}}>Qidirish</Button>
                    </div>


                {
                    start?
                        word.title?<div className="word-res-area">
                            <p className="title">
                                {word.title}
                            </p>
                            <p className="word-mean">
                                {
                                    word.meaning?word.meaning.map(item=>{
                                        return <>
                                            {item.meanid}. {item.text}
                                        </>
                                    }):""
                                }
                            </p>
                        </div>:<div className="word-res-area">
                            <p className="word-mean">Hech narsa topilmadi!!!</p>
                        </div>
                    :""

                }

                {/*</Container>*/}
                <FooterComponent/>

            </div>
        );
    }
}
export default WordSearch;