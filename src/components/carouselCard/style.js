import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CreateStyles = () => {
    return StyleSheet.create({
        imageContainer: {
            shadowColor: '#F7DDE1',
            borderRadius: 20,
            justifyContent: 'center',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
        },
        bodyContainer: {
            display: 'flex',
        },
        image: {
            // flexDirection: 'row',
            width: width - 15,
            height: 340,
            borderRadius: 6,
        },
        container: {
            justifyContent: 'center',
            borderRadius: 20,
        },
        dotstyle: {
            backgroundColor: '#F7DDE1',
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
        },
        paginationStyle: {
            backgroundColor: 'transparent',
            paddingHorizontal: 0,
            paddingVertical: 5,
        },
        pagination: {
            position: 'absolute',
            top: 320,
            bottom: 0,
            left: 0,
            right: 0,
        },
    });
};
export default CreateStyles;