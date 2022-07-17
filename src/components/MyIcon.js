import React from 'react'
import MyIcon from 'react-native-custom-icon'
import SGPConfig from '../assets/fonts/icomoon/selection.json'

export default props => (<MyIcon name={props.name} color={props.color} size={props.size} config={SGPConfig} />)