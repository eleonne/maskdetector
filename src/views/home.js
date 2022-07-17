import React, { useEffect, useState, useRef } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from '../styles'
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { Camera, CameraType } from 'expo-camera';
// import * as posedetection from '@tensorflow-models/pose-detection';

const TensorCamera = cameraWithTensors(Camera);

export default () => {

    const theme = useSelector((state) => state.theme.selectedTheme)
    const [state, setState] = useState({
        tfIsReady: false, 
        modelIsReady: false,
        hasPermission: null,
        cameraType: CameraType.front,
        model: null,
        mask: 'NO',
        image: null,
        count: 0,
        updating: false
    })
    var camera = null
    const rafId = useRef(null);

    const {AppStyles} = useStyles(['AppStyles'], theme)



    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setState({
                ...state,
                hasPermission: status === 'granted'
            });
        })();

        tf.ready().then(() => {
            setState({
                ...state,
                'tfIsReady': true
            })
        })

    }, [])

    useEffect(() => {
        // Called when the app is unmounted.
        return () => {
            if (rafId.current != null && rafId.current !== 0) {
                cancelAnimationFrame(rafId.current);
                rafId.current = 0;
            }
        };
    }, []);

    useEffect(() => {
        if (state.tfIsReady === true) {
            const path = '../../trained_models/facemask-tfjs/'
            const modelJson = require(path + 'model.json');
            const modelWeights = []
            modelWeights.push(require(path + 'group1-shard1of7.bin'));
            modelWeights.push(require(path + 'group1-shard2of7.bin'));
            modelWeights.push(require(path + 'group1-shard3of7.bin'));
            modelWeights.push(require(path + 'group1-shard4of7.bin'));
            modelWeights.push(require(path + 'group1-shard5of7.bin'));
            modelWeights.push(require(path + 'group1-shard6of7.bin'));
            modelWeights.push(require(path + 'group1-shard7of7.bin'));
            // modelWeights.push(require(path + 'group1-shard8of49.bin'));
            // modelWeights.push(require(path + 'group1-shard9of49.bin'));
            // modelWeights.push(require(path + 'group1-shard10of49.bin'));
            // modelWeights.push(require(path + 'group1-shard11of49.bin'));
            // modelWeights.push(require(path + 'group1-shard12of49.bin'));
            // modelWeights.push(require(path + 'group1-shard13of49.bin'));
            // modelWeights.push(require(path + 'group1-shard14of49.bin'));
            // modelWeights.push(require(path + 'group1-shard15of49.bin'));
            // modelWeights.push(require(path + 'group1-shard16of49.bin'));
            // modelWeights.push(require(path + 'group1-shard17of49.bin'));
            // modelWeights.push(require(path + 'group1-shard18of49.bin'));
            // modelWeights.push(require(path + 'group1-shard19of49.bin'));
            // modelWeights.push(require(path + 'group1-shard20of49.bin'));
            // modelWeights.push(require(path + 'group1-shard21of49.bin'));
            // modelWeights.push(require(path + 'group1-shard22of49.bin'));
            // modelWeights.push(require(path + 'group1-shard23of49.bin'));
            // modelWeights.push(require(path + 'group1-shard24of49.bin'));
            // modelWeights.push(require(path + 'group1-shard25of49.bin'));
            // modelWeights.push(require(path + 'group1-shard26of49.bin'));
            // modelWeights.push(require(path + 'group1-shard27of49.bin'));
            // modelWeights.push(require(path + 'group1-shard28of49.bin'));
            // modelWeights.push(require(path + 'group1-shard29of49.bin'));
            // modelWeights.push(require(path + 'group1-shard30of49.bin'));
            // modelWeights.push(require(path + 'group1-shard31of49.bin'));
            // modelWeights.push(require(path + 'group1-shard32of49.bin'));
            // modelWeights.push(require(path + 'group1-shard33of49.bin'));
            // modelWeights.push(require(path + 'group1-shard34of49.bin'));
            // modelWeights.push(require(path + 'group1-shard35of49.bin'));
            // modelWeights.push(require(path + 'group1-shard36of49.bin'));
            // modelWeights.push(require(path + 'group1-shard37of49.bin'));
            // modelWeights.push(require(path + 'group1-shard38of49.bin'));
            // modelWeights.push(require(path + 'group1-shard39of49.bin'));
            // modelWeights.push(require(path + 'group1-shard40of49.bin'));
            // modelWeights.push(require(path + 'group1-shard41of49.bin'));
            // modelWeights.push(require(path + 'group1-shard42of49.bin'));
            // modelWeights.push(require(path + 'group1-shard43of49.bin'));
            // modelWeights.push(require(path + 'group1-shard44of49.bin'));
            // modelWeights.push(require(path + 'group1-shard45of49.bin'));
            // modelWeights.push(require(path + 'group1-shard46of49.bin'));
            // modelWeights.push(require(path + 'group1-shard47of49.bin'));
            // modelWeights.push(require(path + 'group1-shard48of49.bin'));
            // modelWeights.push(require(path + 'group1-shard49of49.bin'));
            tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights)).then((model) => {
                setState({
                    ...state,
                    modelIsReady: true,
                    model: model
                })
            });
        }
    }, [state.tfIsReady])

    const handleCameraStream = async (images, updatePreview, gl) => {
        const loop = async () => {
            const nextImageTensor = images.next().value
            if (nextImageTensor && state.modelIsReady === true) {
                const pred = state.model.predict(tf.reshape(nextImageTensor, [1, 64, 64, 3]))
                data = await pred.data()
                console.log(data)
                setState(prevState => {
                    const obj = {
                        ...prevState,
                        mask: data[0] <= 0.5 ? 'NO' : 'YES'
                    }
                    tf.dispose([pred])
                    return obj
                })
            }

            tf.dispose([nextImageTensor])

            if (rafId.current === 0) {
                return;
            }

            updatePreview();
            gl.endFrameEXP();

            rafId.current = requestAnimationFrame(loop);
        }
        loop();
    }

    const extraStyle = state.mask === 'YES' ? AppStyles.maskDetectionYes : AppStyles.maskDetectionNo

    return <SafeAreaView style={AppStyles.container}>
        <Text style={[AppStyles.title, extraStyle]}>{state.mask}</Text>

        {
            state.modelIsReady === true && state.tfIsReady === true ?
                <TensorCamera
                // Standard Camera props
                    style={AppStyles.container}
                    type={state.cameraType}
                    ref = {ref => {
                        camera = ref
                    }}
                    // Tensor related props
                    resizeHeight={64}
                    resizeWidth={64}
                    resizeDepth={3}
                    onReady={handleCameraStream}
                    autorender={false}
                />
                :
                <ActivityIndicator size="large" />
        }

    </SafeAreaView>
}