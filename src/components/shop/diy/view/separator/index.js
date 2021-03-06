//@flow
import React, { Component } from "react";
import { View } from "react-web-dom";
import styles from "./index.css";

type Props = {
        options: {
            color: string,
            style: string
        }
}
type State = {}

export default class Index extends Component<Props, State> {
    render() {
        const { options } = this.props
        const { color, style } = options
        return (
            <View className={styles.separatorPhoneWarp}>
                <p style={{
                    borderBottomStyle: `${style}`,
                    borderBottomColor: `${color}`
                }}
                />
            </View>
        )
    }
}
