import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login } from '../../pages';

const AccountNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            headerShown: false,
        }),
    }
});

const AccountContainer = createAppContainer(AccountNavigator);

export default AccountContainer;
