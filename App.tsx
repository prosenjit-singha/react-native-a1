import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  ImageSourcePropType,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, gap: 20 }}>
          {/* Header */}
          <View style={styles.header}>
            <Image
              style={styles.headerImage}
              source={require("./assets/oval.png")}
              height={400}
              width={400}
            />
            <View>
              <Text style={{ fontWeight: "800", fontSize: 24 }}>
                The Octocat
              </Text>
              <Text style={{ fontWeight: "500", color: "#17688d" }}>
                @octocat
              </Text>
              <Text style={{ fontSize: 18, color: "#78868b" }}>
                Joined 25 Jan 2011
              </Text>
            </View>
          </View>

          {/* Body Content */}
          <Text style={{ fontSize: 16 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            nesciunt eaque neque quibusdam repellat molestias recusandae
            explicabo. Esse, tempora sit modi temporibus animi molestias ipsa
            sapiente adipisci, cupiditate voluptatem odio ullam nobis? Quasi
            officia id, esse rerum dolores quia. Fuga voluptatibus sed,
            voluptatum officia dicta unde, iste debitis ad quae dolorum suscipit
            rem nulla maxime?
          </Text>

          <View style={styles.stats}>
            <StatsBlock title="Repos" text={8} />
            <StatsBlock title="Followers" text={3932} />
            <StatsBlock title="Following" text={9} />
          </View>

          {/* Footer Content */}
          <View style={{ flex: 1, gap: 10 }}>
            <IconLabel
              source={require("./assets/pin.png")}
              label="San Francisco"
            />
            <IconLabel
              source={require("./assets/url.png")}
              label="https://github.blog"
            />
            <IconLabel
              source={require("./assets/twitter.png")}
              label="Not available"
              disableLabel
            />
            <IconLabel
              source={require("./assets/office-building.png")}
              label="@github"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

type StatsBlockProps = {
  title: string;
  text: string | number;
};
function StatsBlock({ title, text }: StatsBlockProps) {
  return (
    <View style={styles.statsBlock}>
      <Text style={styles.statsTitle}>{title}</Text>
      <Text style={styles.statsText}>{text}</Text>
    </View>
  );
}

type IconLabelProps = {
  source: ImageSourcePropType;
  label: string;
  disableLabel?: boolean;
};

function IconLabel({ source, label, disableLabel }: IconLabelProps) {
  return (
    <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={source} />
      </View>
      <Text style={{ flex: 8, color: disableLabel ? "#999999" : undefined }}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
  headerImage: {
    // flex: 5,
    // marginLeft: 100,
    backgroundColor: "white",
    height: 100,
    width: 100,
  },
  headerContent: {
    // flex: 1,
  },
  stats: {
    backgroundColor: "#e9f2f5",
    borderRadius: 10,
    // margin: 10,
    padding: 15,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  statsBlock: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#578aa8",
  },
  statsText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#5a6b75",
  },
});
