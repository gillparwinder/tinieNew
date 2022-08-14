import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
export class Loader extends Component {
    constructor() {
        super();
        this.state = { CancelAction: false };
    }

    render() {
        let { loading } = this.props;
        return loading ? (
            <View
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    zIndex: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, .4)',
                }}>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: 7,
                        shadowColor: 'gray',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.7,
                        elevation: 5,
                        width: 100,
                        height: 80,
                    }}>
                    {/* <FastImage
                        style={{ height: 80, width: 100 }}
                        source={require('../assets/bookLoader.gif')}
                        resizeMode={FastImage.resizeMode.contain}
                    /> */}
                    <ActivityIndicator />
                    <Text style={{ marginTop: 10 }}>Loading...</Text>

                </View>

            </View>
        ) : null;
    }
}
