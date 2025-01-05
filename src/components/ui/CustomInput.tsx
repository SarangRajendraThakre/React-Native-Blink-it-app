import React from "react";
import { Colors, Fonts } from "@utils/Constants";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";

interface InputProps {
    left: React.ReactNode;
    onClear?: () => void;
    right?: boolean;
    value?: string; // Ensure compatibility with TextInput's `value`
}

const CustomInput: React.FC<InputProps & React.ComponentProps<typeof TextInput>> = ({
    onClear,
    left,
    right = true,
    value,
    ...props
}) => {
    return (
        <View style={styles.flexRow}>
           {left}
            <TextInput
                {...props}
                value={value}
                style={styles.inputContainer}
                placeholderTextColor="#ccc"
            />
            <View style={styles.icon}>
                {value?.length !== 0 && right && (
                    <TouchableOpacity onPress={onClear}>
                        <Icon name="close-circle-sharp" size={RFValue(16)} color="#ccc" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        borderWidth: 0.5,
        width: "100%",
        marginVertical: 10,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowColor: Colors.border,
        borderColor: Colors.border,
    },
    text: {
        flex: 0.1,
        marginLeft: 10,
    },
    inputContainer: {
        flex: 1,
        fontFamily: Fonts.SemiBold,
        fontSize: RFValue(12),
        paddingVertical: 14,
        paddingBottom: 15,
        height: "100%",
        color: Colors.text,
    },
    icon: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
});

export default CustomInput;
