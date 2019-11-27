import React from 'react';
import { connect } from 'react-redux'
import { View, Text, FlatList,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

const Main = ({ state }) => {
    console.log(state.default.allData)

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.renderView}>
                <Image
                style={styles.renderImg}
                source={{uri:item.url}}
                />
                <Text style={styles.renderTxt}>{item.title}</Text>
            </View>
        )
    }

    return (
        <LinearGradient colors={['#9e37a0', '#7d34a7', '#5232b1']} style={styles.container}>
            <FlatList
                data={state.default.allData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={
                    <Text style={styles.textContainer}>Main Page</Text>
                }
            />
        </LinearGradient>
    )
};

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, {})(Main);