import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Headline: {
        backgroundColor: '#F9C5FF',
        flex: 3,
        // ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        // android
        elevation: 5,
    },
    Stories: {
        backgroundColor: '#eee',
        flex: 7,
    },
    MainImage: {
        height: '100%',
    },
    MainText: {
        bottom: 40,
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: '#919191a9',
        marginHorizontal: 20,
    },
    MainTextTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
});

export default styles;