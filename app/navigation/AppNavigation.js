import { createAppContainer, createStackNavigator } from 'react-navigation'
import CounterScreen from '../screens/CounterScreen'
import HomeScreen from '../screens/HomeScreen'

const AppNavigation = createStackNavigator({
    Home: HomeScreen,
    Counter: CounterScreen
}, {
        initialRouteName: 'Home',
        headerMode: 'none'
    })

export default createAppContainer(AppNavigation)