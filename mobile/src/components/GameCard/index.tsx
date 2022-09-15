import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { s } from "./styles";
import { THEME } from "../../theme";

export interface GameCardProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: { ads: number };
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <ImageBackground style={s.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={s.footer}>
          <Text style={s.name}>{data.title}</Text>
          <Text style={s.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
