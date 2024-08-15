import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#f44336",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
  },
});
