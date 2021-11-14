import React from 'react';
import {
    Container,
} from "react-bootstrap";
import {FaPlus} from "react-icons/all";
import NavModeratorMenu from "../navMenu/navMenu";
import FooterComponent from "../../../commonComponents/footer/footer";
import '../../../styles/wordAdd.css'
import {Collapse, Modal, Form, Input, Button, Select} from "antd";
import 'antd/dist/antd.css';
import {letters} from "../../../constants/letters";

const { Panel } = Collapse;

class WordAdd extends React.Component{
    state={
        isModalVisible:false,
    }
    render() {
        const {isModalVisible}=this.state;
        const showModal=()=>{
            this.setState({
                isModalVisible:true,
            })
        }
        const handleCancel=()=>{
            this.setState({
                isModalVisible:false,
            })
        }
        const handleOk=()=>{

        }
        const onFinish=()=>{

        }
        return (
            <div>
                <NavModeratorMenu/>
                <Container>
                    <div className="add-area">
                        <div className="d-flex justify-content-between">
                            <p className="plus" onClick={showModal}>
                                <FaPlus/>
                            </p>
                            <p className="text-center fw-bold" style={{fontSize:'22px',color:'limegreen',fontWeight:500}}>
                                Yangi so'z qo'shish
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <h3>Harf tanlang: </h3>
                        <Select defaultValue='A'>
                            {
                                letters.map(item=>{
                                    return <Select.Option value={item.id}>{item.title}</Select.Option>
                                })
                            }
                        </Select>
                    </div>
                    <Collapse defaultActiveKey={['1']} onChange={''} expandIconPosition={'right'}>
                        <Panel header={<p className="words-title">Abad</p>} key="1">
                           <p className="word-mean-add">
                               Abad so'zining ma'nosi
                           </p>
                        </Panel>
                        <Panel header={<p className="words-title">Sabot</p>} key="2">
                            <p className="word-mean-add">
                            Sabot so'zining ma'nosi
                            </p>
                        </Panel>

                    </Collapse>

                </Container>
                <Modal
                    footer={false}
                    title="So'z qo'shish"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="So'z nomi"
                            name="title"
                            rules={[{ required: true, message: 'So\'zni kiriting!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Ma'nosi"
                            name="mean"
                            rules={[{ required: true, message: 'So\'zning ma\'nosini kiriting!' }]}
                        >
                            <Input.TextArea />
                        </Form.Item>



                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Yuborish
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
                <FooterComponent/>
            </div>
        );
    }
}
export default WordAdd;