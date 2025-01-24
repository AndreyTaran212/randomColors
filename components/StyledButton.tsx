import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export type StyledButtonProps = TouchableOpacityProps & {
  selectedColorType: 'hex' | 'rgb' | 'hsl';
  type: 'hex' | 'rgb' | 'hsl';
};

export function StyledButton({
  selectedColorType,
  onPress,
  style,
  type,
  children,
}: StyledButtonProps) {
  return (
    <TouchableOpacity
      style={[
        style,
        {backgroundColor: selectedColorType === type ? '#5e5e5e' : '#f5f5f5'},
      ]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
