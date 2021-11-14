import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import {
    Row,Col
} from 'antd'
import {routes} from "./routes/routes";
import HomePage from "./pages/home/home";
import Loader from "./commonComponents/loader/loader";
class App extends React.Component{
    state = {
        loading: true
    };

    demoAsyncCall() {
        return new Promise((resolve) => setTimeout(() => resolve(), 1000));
    }
    componentDidMount() {
        document.title="ImloManbai";
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    render() {

    return (
        <div>


            <Router>
                <Switch>
                    {
                        this.state.loading? <Loader/>:

                    <Row>
                        {
                            routes.map((item) => (
                                <Col span={24}>
                                    <Route exact path={item.path} component={item.component}/>
                                </Col>

                            ))
                        }

                    </Row>
                    }

                    <Redirect from="/" to="/home" />
                </Switch>

            </Router>
        </div>
    );
  }
}
export default App;