import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/auth/AuthStack';


function App() {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer> 
  );
}

export default App;
