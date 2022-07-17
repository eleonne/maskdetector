import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import appConfig from './app.config';

const window = Dimensions.get('window')
const screenWidth = window.width;
const screenHeight = window.height
var theme = null

const _styles = {
    'colors': () => theme.colors,
    'AppStyles': () => StyleSheet.create({
        container: {
            flex: 1,
            marginTop: Platform.OS === 'ios' ? 0 : 0,
            backgroundColor: theme.colors.background
        },
        title: {
            color: theme.colors.text,
            fontSize: 15
        },
        mask: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: theme.colors.backgroundTransparent
        },
        button: {
            backgroundColor: theme.colors.button,
            width: '100%',
            height: 50,
            justifyContent: 'center',
            borderRadius: 10
        },
        maskDetectionYes: {
            textAlign: 'center',
            width: screenWidth,
            paddingTop: 15,
            height: 50,
            backgroundColor: theme.colors.success
        },
        maskDetectionNo: {
            textAlign: 'center',
            paddingTop: 15,
            width: screenWidth,
            height: 50,
            backgroundColor: theme.colors.warning
        },
    }),
}

const useStyles = (styles, _theme) => {
    theme = appConfig.themes[_theme]
    response = {}
    for (i in styles)
        response[styles[i]] = _styles[styles[i]]()
    return response
}

export default useStyles