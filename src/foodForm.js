import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Content, Form, Item, Input, Button} from 'native-base';
import {connect} from 'react-redux';
import {addFood} from './actions/food';

class FoodForm extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'blue',
    },
  };

  state = {
    food: null,
  };

  render() {
    return (
      <Container>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{alignItems: 'center', marginVertical: '2%'}}>
            <Text>Redux Example Test</Text>
          </View>

          <Form style={{margin: '2%'}}>
            <Item rounded>
              <Input
                value={this.state.food}
                placeholder="Name"
                onChangeText={(food) => this.setState({food})}
              />
            </Item>
          </Form>
          <Button
            onPress={() => this.props.add(this.state.food)}
            style={{justifyContent: 'center', margin: '2%'}}>
            <Text>Submit</Text>
          </Button>

          <Button
            style={{justifyContent: 'center', margin: '2%'}}
            onPress={() => this.props.navigation.navigate('FoodList')}>
            <Text>Go to FoodList!</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    foods: state.food.foodList, //store
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (food) => dispatch(addFood(food)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);
