import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {Icon, Container, List, ListItem, Left, Right} from 'native-base';

import {connect} from 'react-redux';
import {deleteFood} from './actions/food';

class FoodList extends Component {
  static navigationOptions = {
    title: 'Food List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'green',
    },
  };

  render() {
    return (
      <Container>
        <View>
          <FlatList
            data={this.props.foods}
            keyExtractor={(item, index) => item.key.toString()}
            renderItem={(data) => (
              <List>
                <ListItem selected>
                  <Left>
                    <Text>{data.item.name}</Text>
                  </Left>
                  <Right>
                    <Icon
                      name="ios-trash"
                      onPress={() => this.props.delete(data.item.key)}
                    />
                  </Right>
                </ListItem>
              </List>
            )}
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    foods: state.food.foodList, //from store
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deleteFood(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
