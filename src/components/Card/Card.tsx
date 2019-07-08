import * as React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './Card.styles';

export interface Props {
    children?: React.ReactNode;
    stylesProp?: any;
    onPress: () => void;
};

const Card: React.FC<Props> = ({
    children,
    stylesProp,
    onPress,
}): React.ReactElement => {
    return (
        <TouchableHighlight onPress={onPress} style={[stylesProp, styles.Container]} underlayColor="transparent">
            {children}
        </TouchableHighlight>
    );
};

export default Card;