import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyButton from '../components/MyButton';
import { WelcomeStyles } from '../styles/WelcomeStyles';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={WelcomeStyles.container}>
      <Text style={WelcomeStyles.title}>¡Bienvenido a EldarElias!</Text>
      <Text style={WelcomeStyles.instructions}>
        Esta es una aplicación donde los usuarios tienen dos roles: user y admin.
      </Text>
      <Text style={WelcomeStyles.instructions}>
        El rol "user" sólo puede ver los datos de una API, ya sea los que estén previamente cargados o los editados o creados por el rol "admin".
      </Text>
      <Text style={WelcomeStyles.instructions}>
        Al principio parecerá que no puede hacer mucho, pero no olvide que la cantidad de datos que trae la API es la suficiente para que pase una linda tarde leyendo los mismos, además que cada ítem está bien encapsulado en tarjetas para una lectura cómoda.
      </Text>
      <Text style={WelcomeStyles.instructions}>
        El rol "admin" puede ver, agregar o modificar los datos de la API, por lo que su rol es más completo pero a su conlleva mayor responsabilidad
      </Text>
      <Text style={WelcomeStyles.instructions}>
        Recuerde que esta es una app en evolución, por lo que cualquier sugerencia de corrección o de nuevas funcionalidades es más que agradecida y bienvenida
      </Text>
      <Text style={WelcomeStyles.instructions}>
        Para empezar, presiona el botón de abajo para iniciar sesión y seleccionar tu rol.
      </Text>
      <Text style={WelcomeStyles.title}>
        ¡Enjoy!
      </Text>
      <MyButton 
        title="¡Empecemos!"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default WelcomeScreen;
