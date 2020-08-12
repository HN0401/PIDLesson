import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "../components/Home"
import FormOne from "../components/FormOne"
import FormTwo from "../components/FormTwo"
import Header from "../components/Header"
import FormThree from "../components/FormThree"
import FormFour from "../components/FormFour"
import FormFive from "../components/FormFive"
import FormSix from "../components/FormSix"
import FormSeven from "../components/FormSeven"
import FinalPage from "../components/FinalPage"
import LogIn from "../components/LogIn"

class AppRouter extends React.Component {
    // componentDidMount(){
    // }
    // componentDidUpdate(prevProps){
    // }
    render(){
        return (
            <BrowserRouter>
            <div>
            <Header />
            </div>
            <div>
           
                <div className="">
                
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/LogIn" component={LogIn} exact={true} />
                        <Route path="/FormOne" component={FormOne} exact={true} />
                        <Route path="/FormTwo" component={FormTwo} exact={true} />
                        <Route path="/FormThree" component={FormThree} exact={true} />
                        <Route path="/FormFour" component={FormFour} exact={true} />
                        <Route path="/FormFive" component={FormFive} exact={true} />
                        <Route path="/FormSix" component={FormSix} exact={true} />
                        <Route path="/FormSeven" component={FormSeven} exact={true} />
                        <Route path="/FinalPage" component={FinalPage} exact={true} />
                    </Switch>
                </div>
            </div>
            </BrowserRouter>

        )
    }
}

const mapStateToProps = (state) => ({
})

export default AppRouter