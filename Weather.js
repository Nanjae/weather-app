import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradColors: ["#061161", "#780206"],
    title: "Thunderstorm",
    subtitle: "A chance to be a sparkling hero!!!"
  },
  // 이슬비
  Drizzle: {
    iconName: "weather-hail",
    gradColors: ["#74ebd5", "#acb6e5"],
    title: "Drizzle",
    subtitle: "Plants look like so happy."
  },
  Rain: {
    iconName: "weather-rainy",
    gradColors: ["#78ffd6", "#007991"],
    title: "Rain",
    subtitle: "Take your umbrella, or will be bald."
  },
  Snow: {
    iconName: "weather-snowy",
    gradColors: ["#b2fefa", "#0ed2f7"],
    title: "Snow",
    subtitle: "Do you wanna build a snowman?"
  },
  Mist: {
    iconName: "weather-fog",
    gradColors: ["#34e89e", "#0f3443"],
    title: "Mist",
    subtitle: "Is it fog? I can't be certain."
  },
  Smoke: {
    iconName: "weather-fog",
    gradColors: ["#34e89e", "#0f3443"],
    title: "Smoke",
    subtitle: "Is it fog? I can't be certain."
  },
  Haze: {
    iconName: "weather-fog",
    gradColors: ["#34e89e", "#0f3443"],
    title: "Haze",
    subtitle: "Is it fog? I can't be certain."
  },
  Dust: {
    iconName: "weather-fog",
    gradColors: ["#34e89e", "#0f3443"],
    title: "Dust",
    subtitle: "Is it fog? I can't be certain."
  },
  Fog: {
    iconName: "weather-fog",
    gradColors: ["#34e89e", "#0f3443"],
    title: "Fog",
    subtitle: "Is it fog? I can't be certain."
  },
  Sand: {
    iconName: "weather-fog",
    gradColors: ["#34e89e", "#0f3443"],
    title: "Sand",
    subtitle: "Is it fog? I can't be certain."
  },
  Ash: {
    iconName: "weather-fog",
    gradColors: ["#34e89e", "#0f3443"],
    title: "Ash",
    subtitle: "Is it fog? I can't be certain."
  },
  // 바람과 강한 소나기
  Squall: {
    iconName: "weather-pouring",
    gradColors: ["#cbb4d4", "#20002c"],
    title: "Squall",
    subtitle: "Say goodbye to your umbrella."
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradColors: ["#434343", "#000000"],
    title: "Tornado",
    subtitle: "Do not go out, or will meet OZ."
  },
  Clear: {
    iconName: "weather-sunny",
    gradColors: ["#fceabb", "#f8b500"],
    title: "Clear",
    subtitle: "Let's do your laundry"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradColors: ["#bdc3c7", "#2c3e50"],
    title: "Clouds",
    subtitle: "Feel whole gray world through the window"
  }
};

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradColors}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={128}
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
        <Text style={styles.cityName}>{name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 32,
    color: "white"
  },
  cityName: {
    fontSize: 16,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "normal",
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "left"
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: 30
  }
});
