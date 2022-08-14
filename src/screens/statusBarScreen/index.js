import React from 'react';
import { StatusBar, View } from 'react-native';

const AppStatusBar = ({ backgroundColor, ...props }) => {
    return (
        <View style={[backgroundColor]}>
            <StatusBar backgroundColor={backgroundColor} {...props} />
        </View>
    );
};



export default AppStatusBar;