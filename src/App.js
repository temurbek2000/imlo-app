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
class App extends React.Component{
    componentDidMount() {
        document.title="ImloManbai"
    }

    render() {

    return (
        <div>


            <Router>
                <Switch>

                    <Row>
                        {
                            routes.map((item) => (
                                <Col span={24}>
                                    <Route exact path={item.path} component={item.component}/>
                                </Col>

                            ))
                        }

                    </Row>

                    <Redirect from="/" to="/home" />
                </Switch>

            </Router>
        </div>
    );
  }
}
export default App;