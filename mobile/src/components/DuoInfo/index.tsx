import { View, Text, ColorValue } from "react-native";
import { THEME } from "../../theme";

import { s } from "./styles";

interface Props {
  label: string;
  value: string;
  colorValue?: ColorValue;
}

export function DuoInfo({
  label,
  value,
  colorValue = THEME.COLORS.TEXT,
}: Props) {
  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <Text style={[s.value, { color: colorValue }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}
