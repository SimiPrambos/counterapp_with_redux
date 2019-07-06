import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

class HomeScreen extends Component {

    render() {
        return (
            <View>
                <Text style={{ fontSize: 50 }}> Number : {this.props.number} </Text>
                <Button title="Counter" onPress={() => this.props.navigation.navigate('Counter')} />
            </View>
        )
    }
}

const mapStateToProps = (state) => (
    { number: state.number }
)

export default connect(mapStateToProps)(HomeScreen)
