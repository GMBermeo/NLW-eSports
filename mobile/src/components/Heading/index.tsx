import { View, Text, ViewProps } from "react-native";
import { s } from "./styles";

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export function Heading({ title, subtitle, ...rest }: Props) {
  return (
    <View style={s.container} {...rest}>
      <Text style={s.title}>{title}</Text>
      <Text style={s.subtitle}>{subtitle}</Text>
    </View>
  );
}
