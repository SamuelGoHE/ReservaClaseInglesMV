import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

import EtiquetaNivel from './EtiquetaNivel';
import { spacing, color, radius } from '../theme';
import { formatearPrecio } from '../data/clases';

export default function Card({ clase, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.contenedor}>
      <Image
        source={{ uri: clase.imagen }}
        style={styles.imagen}
        resizeMode="cover"
      />

      <View style={styles.contenido}>
        <EtiquetaNivel nivel={clase.nivel} />

        <Text style={styles.titulo} numberOfLines={1}>
          {clase.titulo}
        </Text>

        <View style={styles.profesorFila}>
          <Image source={{ uri: clase.profesor.foto }} style={styles.avatar} />
          <Text style={styles.profesor}>{clase.profesor.nombre}</Text>
        </View>

        <View style={styles.pieFila}>
          <Text style={styles.meta}>
            {clase.duracion}' · {clase.modalidad} · {clase.cupos} cupos
          </Text>

          <Text style={styles.precio}>{formatearPrecio(clase.precio)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: color.superficie,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
  },

  imagen: {
    width: '100%',
    height: 160,
    backgroundColor: color.primarioSuave,
  },

  contenido: {
    padding: spacing.md,
  },

  titulo: {
    fontSize: 18,
    fontWeight: '800',
    color: color.texto,
    marginTop: spacing.sm,
  },

  profesorFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },

  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: color.borde,
  },

  profesor: {
    fontSize: 14,
    color: color.textoSuave,
  },

  pieFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.md,
  },

  meta: {
    fontSize: 13,
    color: color.textoSuave,
  },

  precio: {
    fontSize: 16,
    fontWeight: '800',
    color: color.primario,
  },
});