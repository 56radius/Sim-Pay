import {
    View,
    Text,
    StyleSheet,
}
from "react-native";

export default function DataScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.dataText}> This is the Data page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#29292e",
        justifyContent: "center",
        alignItems: "center",
    },

    dataText: {
        color: "#fff",
    },
})