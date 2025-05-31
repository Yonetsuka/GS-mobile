import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { AlertaProvider } from './src/contexts/AlertaContext';

export default function App() {
  return (
    <NavigationContainer>
      <AlertaProvider>
        <AppNavigator />
      </AlertaProvider>
    </NavigationContainer>
  );
}
