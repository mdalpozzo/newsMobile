import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginVertical: 5,
        height: 75,
    },
    Images: {
        height: '100%',
        flex: 1,
    },
    Details: {
        flex: 3,
        marginLeft: 8,
        marginTop: 5,
    },
    Title: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
    },
    SourceAgeContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    Source: {
        color: 'black',
        fontSize: 10,
    },
    Age: {
        fontSize: 10,
    },
});

export default styles;