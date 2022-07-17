import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../views/home'
import History from '../views/history'
import useStyles from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator()

export default () => {

    const theme = useSelector((state) => state.theme.selectedTheme)
    const {AppStyles, colors} = useStyles(['AppStyles', 'colors'], theme)

    return <>
        <Tab.Navigator
            initialRouteName="Home"
            inactiveColor={colors.inactive}
            activeColor={colors.highlight}
            shifting={true}
            labeled={true}
            backBehavior='initialRoute'
            barStyle={{
                backgroundColor: colors.primary,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Analize',
                    tabBarIcon: ({ color, size }) => {

                        return <Icon name='brain' color={color} size={20}/>
                    }
                }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color }) => <Icon name='history' size={20} color={color} />
                }}
            />
        </Tab.Navigator>
    </>
}