import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from '../styles'

export default () => {

    const theme = useSelector((state) => state.theme.selectedTheme)

    const {AppStyles} = useStyles(['AppStyles'], theme)

    return <SafeAreaView style={AppStyles.container}>
        <Text>HISTORY</Text>
    </SafeAreaView>
}