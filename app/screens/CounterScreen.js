import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

class CounterScreen extends Component {

    handleIncrement() {
        alert('increment clicked')
        this.props.dispatch({ type: 'INC' })
    }

    handleDecrement() {
        alert('decrement clicked')
        this.props.dispatch({ type: 'DEC' })
    }

    render() {
        return (
            <View>
                <Text> CounterScreen </Text>
                <Button title="INC" color="blue" onPress={() => this.handleIncrement()} />
                <Button title="DEC" color="red" onPress={() => this.handleDecrement()} />
                <Button title="Home" onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        )
    }
}

mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(CounterScreen)
