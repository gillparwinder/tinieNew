import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Styles = () => {
    const insets = useSafeAreaInsets();
    return StyleSheet.create(
        {
            container: {
                paddingTop: insets.top,
                flex: 1,
                backgroundColor: 'white',
                //paddingHorizontal: 5,
            },
        }
    );
};

export default Styles;