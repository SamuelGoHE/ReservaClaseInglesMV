import { Platform } from 'react-native';



export const color = {
    fondo: "#F5F5F5",
    superficie: "#FFFFFF",
    primario: "#080707",
    texto: "#333333",
    border: "#CCCCCC",

};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 16,
    xl: 20,
}

export const radius = {
    sm: 6,
    md: 10,
    lg: 20,
}

export const typography = {
    titulo: {fontSize: 28, fontWeight: "800", color: color.texto},
    subtitulo: {fontSize: 20, fontWeight: "600", color: color.texto},
}

export default {color, spacing, radius, typography};
