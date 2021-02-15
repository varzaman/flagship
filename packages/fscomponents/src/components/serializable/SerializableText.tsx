import React from 'react';
import { Text, TextProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useNavigator } from '@brandingbrand/fsapp';

export interface SerializableTextProps
  extends Pick<
    TextProps,
    | 'selectable'
    | 'accessibilityHint'
    | 'accessibilityLabel'
    | 'accessible'
    | 'ellipsizeMode'
    | 'nativeID'
    | 'numberOfLines'
    | 'allowFontScaling'
    | 'maxFontSizeMultiplier'
    | 'testID'
    | 'selectionColor'
    | 'textBreakStrategy'
    | 'adjustsFontSizeToFit'
    | 'minimumFontScale'
    | 'suppressHighlighting'
  > {
  childText: string;
  style?: TextStyle;
  boxStyle?: ViewStyle;
  href?: string;
}

export const FSSerializableText = React.memo<SerializableTextProps>(
  ({ childText, boxStyle, href, ...textProps }) => {
    const navigator = useNavigator();

    const handlePress = (href?: string) => () => {
      if (href) {
        navigator.open(href);
      }
    };

    if (href) {
      return (
        <TouchableOpacity onPress={handlePress(href)}>
          <View style={boxStyle}>
            <Text {...textProps}>{childText}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <View style={boxStyle}>
        <Text {...textProps}>{childText}</Text>
      </View>
    );
  }
);
