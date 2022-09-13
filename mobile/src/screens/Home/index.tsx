import { View, Image, FlatList } from "react-native";
import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { GAMES } from "../../utils/games";

import { s } from "./styles";

export function Home() {
  return (
    <View style={s.container}>
      <Image source={logoImg} style={s.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        contentContainerStyle={s.contentList}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
