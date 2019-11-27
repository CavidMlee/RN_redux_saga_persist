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
        width: '90%',
        padding: 15,
        height: 60,
        backgroundColor: 'transparent', //#8a4fb6
        borderColor: 'white',
        borderBottomWidth: 1.5,
        fontSize: 18,
        color: 'white'
    },
    buttonContainer: {
        marginTop:40,
        borderWidth:1.5,
        borderColor:'white',
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 50,
        backgroundColor: 'transparent'
    },
    btnView:{
        width:'100%',
        height:'auto',
        alignItems:'center',
        marginTop:60
    },
    textContainer:{
        color:'white',
        fontSize:18
    }
});

export default styles