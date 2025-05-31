import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import NovoAlerta from '../screens/NovoAlerta';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NovoAlerta" component={NovoAlerta} />
    </Stack.Navigator>
  );
}

