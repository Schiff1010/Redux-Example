import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// screen
import FoodForm from './src/foodForm';
import FoodList from './src/foodList';

const AppNavigator = createStackNavigator(
  {
    FoodForm: FoodForm,
    FoodList: FoodList,
  },
  {
    initialRouteName: 'FoodForm',
  },
);

export default createAppContainer(AppNavigator);
