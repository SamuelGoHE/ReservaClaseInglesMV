import React, { useState } from 'react';
import {View,Text,TextInput,FlatList, ScrollView,StyleSheet,} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import { spacing, color, typography } from '../theme';
import { clases } from '../data/clases';
import NivelFiltro from '../components/NivelFiltro';

export default function ClasesScreen({ navigation }) {
  const { columns, paddingHorizontal } = useResponsive();
  const [nivel, setNivel] = useState('Todos');

  return (
    <View>
      <View>
        <Text>Aplicación de clases de inglés</Text>

        <View>
          <Ionicons name="search" size={20} />

          <TextInput
            placeholder="Buscar por nivel o profesor"
            value={nivel}
            onChangeText={setBusqueda}
            autoCorrect={false}
            autoComplete="off"
          />

          {busqueda.length > 0 && (
            <Ionicons
              name="close-circle"
              size={18}
              onPress={() => setbusqueda('')}
            />
          )}
        </View>
        <scrollview
           style={{flexgrow: 0}}
        >
          //repasar el metodo .map de js
          {
            NIVELES.map((item)  => (
              <NivelFiltro>
                 etiqueta={item}
                 activo={item === nivel}
                 onPress={() => setNivel(item)}
                
              </NivelFiltro>
              
            ))
          }
          

        </scrollview>
      </View>
    </View>
  );
}