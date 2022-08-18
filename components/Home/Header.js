import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/post.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/heart.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.unreadBadge}>
                <Text style={styles.unreadBadgeText}>11</Text>
            </View>
          <Image
            style={styles.icon}
            source={require("../../assets/messenger.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  iconsContainer: {
    flexDirection: "row",
  },

  icon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    resizeMode:"contain",
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

    unreadBadge: {
        backgroundColor: "#FF3250",
        position:"absolute",
        left: 20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        zIndex:100,
    },

    unreadBadgeText:{
        color:"white",
        fontWeight:"600"
    },
});

export default Header;
