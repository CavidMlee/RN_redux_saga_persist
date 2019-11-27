import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        color: 'white',
        fontSize: 30
    },
    renderView: {
        marginVertical: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        paddingRight: 10,

    },
    renderImg: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginLeft: 15
    },
    renderTxt: {
        color: 'white',
        fontSize: 18,
        marginHorizontal: 10
    }
});

export default styles