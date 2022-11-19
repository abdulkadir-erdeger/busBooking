import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: { height: 2, backgroundColor: "lightgrey", marginVertical: 10 },
  divider2: { marginHorizontal: 3, width: 1, backgroundColor: "lightgrey" },
  body: { flexDirection: "row", alignItems: "center" },
  footer: { flexDirection: "row", paddingVertical: 5 },
  buttonContainer: {
    backgroundColor: "#1C3879",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 16,
  },
  buttonText: { color: "white", fontSize: 18 },
  leftSpace: { marginLeft: 5 },
});
