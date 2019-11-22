import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        marginTop: 20,
        alignItems: "center",
        width: '90%'
    },

    inputStyle: {
        borderRadius: 30,
        width: '90%',
        padding: 15,
        height: 60,
        backgroundColor: 'transparent', //#8a4fb6
        borderColor: 'white',
        borderWidth: 1.5,
        fontSize: 18,
        color: 'white'
    },
    buttonContainer: {
        marginTop:40,
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '35%',
        height: 50,
        backgroundColor: 'yellow'
    },
    textContainer:{
        color:'black',
        fontSize:18
    }
});

export default styles