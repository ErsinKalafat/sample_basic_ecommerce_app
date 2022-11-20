import 'react-native-gesture-handler'
import React from 'react';
import { View } from 'react-native';
import { Spinner } from './src/components';
import { Provider } from "react-redux";
import store from "./src/store";
import AccountContainer from './src/routingFlow/non_session/accountContainer';
import ScreensContainer from "./src/routingFlow/session_available/screensContainer";


class App extends React.Component {

    state = {
        email: store.getState().user.email
    }
    unsubscribeStore = {}

    updateStateFromStore = () => {
        const currentState = { email: store.getState().user.email }
        if (this.state !== currentState) {
            this.setState(currentState);
        }
    }

    componentDidMount() {
        this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    }


    render() {
        let userInfo = store.getState().user

        switch (!!userInfo.email && !!userInfo.password) {
            case true:
                return <Provider store={store}><ScreensContainer /></Provider>
            case false:
                return <Provider store={store}><AccountContainer /></Provider>
            default:
                return (
                    <View>
                        <Spinner />
                    </View>
                )
        }
    }
}




export default App