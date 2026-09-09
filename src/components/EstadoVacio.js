import React from "react";
import {view, text, styleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {color, spacing} from '../theme';

export default function EstadoVacio({icono = 'search-outline', titulo, mensaje, tectoAccion, onAction}){
    return(
        <View style = {styles.contenedor}>
            <view style={styles.circulo}>
                <Ionicons name = {"icono"} size = {30} color = {color.primario}/>

            </view>
            <Text style={styles.titulo}>{titulo}</Text>
            <text style={styles.mensaje}>{mensaje}</text>
        
        </View>
    )
}

const style = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: color.fondo },
  buscador: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: color.superficie,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: 46,
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: color.border,
  },
  input: { flex: 1, fontSize: 14, color: color.texto, paddingVertical: 0 },
});