import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Styles = () => {
    const insets = useSafeAreaInsets();
    return StyleSheet.create(
        {
            // container: {
            //     paddingTop: insets.top,
            //     flex: 1,
            //     backgroundColor: 'white',
            //     paddingHorizontal: 5,
            // },
            preloader: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center'
            },
            container: {
                flex: 1,
                backgroundColor: '#ffffff',
                // justifyContent: 'flex-start',
                paddingTop: insets.top,
            },
            scrollContainer: {
                flex: 1,
                marginHorizontal:5,
            },
            flex: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginTop: 20,
                marginBottom:15
            },
            header: {
                fontSize: 16,
                color:"#222222",
                fontSize: 16,
                textDecorationLine:'underline',
                fontWeight:'700',

            },
        

        }
    );
};

export default Styles;