import {
    View,
    Text,
    StyleSheet,
}
from "react-native";

export default function AirtimeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.airtimeText}> This is the airtime page</Text>
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

    airtimeText: {
        color: "#fff",
    },
})