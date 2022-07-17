import { 
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';

export const MyLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#fff',
        secondary: '#1673b4',
        background: '#d7d5d3',
        reverseBackground: '#000',
        border: '#000',
        active: '#000',
        inactive: '#000',
        text: '#000',
        reverseText: '#fff',
        subtitle: '#303030',
        error: '#bc4040',
        loading: '#965e22',
        link: '#b26a20',
        backgroundTransparent: 'rgba(255,255,255,0.7)',
        primaryTransparent: 'rgba(255,255,255,0.5)',
        
        button: '#ff8400',
        success: '#28a745',
        warning: '#ffc107',
        highlight: '#f7a72e',
        info: '#111d75',
        
        bones: '#fff',
        bonesHighlight: '#e5e5e5',
        
        card: '#000',
        notification: 'green',

        podcast: '#dc3545',
        article: '#867917',
        story: '#6842c4',
        serie: '#28a745',
        audiodrama: '#42b3c4',
        short: '#7a774d',
    }
}

export const MyDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#000',
        secondary: '#8e8e8e',
        background: '#1a1a1a',
        reverseBackground: 'white',
        border: '#fff',
        active: '#fff',
        inactive: '#9e9e9e',
        text: '#fff',
        reverseText: '#000',
        subtitle: '#cfcfcf',
        error: '#bc4040',
        loading: '#69a1dd',
        link: '#4d95df',
        backgroundTransparent: 'rgba(0,0,0,0.7)',
        primaryTransparent: 'rgba(0,0,0,0.5)',
        
        button: '#007bff',
        success: '#28a745',
        warning: '#ffc107',
        highlight: '#4fb5f9',
        info: '#4ff9da',
        
        bones: '#121212',
        bonesHighlight: '#333333',
        
        card: '#000',
        notification: 'green',

        podcast: '#dc3545',
        article: '#ffc107',
        story: '#6842c4',
        serie: '#28a745',
        audiodrama: '#42b3c4',
        short: '#7a774d',
    }
} 

export const BrazilTheme = {
    ...DarkTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#336942',
        secondary: '#7f7c3e',
        background: '#8fb994',
        reverseBackground: 'white',
        border: '#fff',
        active: '#fff',
        inactive: '#fff',
        text: '#fff',
        reverseText: '#000',
        subtitle: '#cfcfcf',
        error: '#bc4040',
        loading: '#69a1dd',
        link: '#4d95df',
        backgroundTransparent: 'rgba(143,145,185,0.7)',
        primaryTransparent: 'rgba(51,105,66,0.2)',
        
        button: '#007bff',
        success: '#28a745',
        warning: '#ffc107',
        highlight: '#9e9606',
        info: '#111d75',
        
        bones: '#336942',
        bonesHighlight: '#687d24',
        
        card: '#000',
        notification: 'green',

        podcast: '#fc0a42',
        article: '#ffc107',
        story: '#6842c4',
        serie: '#0afc3a',
        audiodrama: '#42b3c4',
        short: '#7a774d',
    }
} 