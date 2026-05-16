import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

const events = [

  {
    id: "1",
    title: "Python Seminar",
    description: "Learn Python Basics",
    location: "USTP Library"
  },

  {
    id: "2",
    title: "React Workshop",
    description: "Frontend Development",
    location: "Room 301"
  },

];

export default function HomeScreen() {

  const checkIn = (title: string) => {

    alert(`Checked in to ${title}`);

  };

  return (

    <SafeAreaView style={styles.container}>

      {/* NAVBAR */}

      <View style={styles.navbar}>

        <Text style={styles.logo}>
          Smart Library
        </Text>

        <TouchableOpacity style={styles.logoutBtn}>

          <Text style={styles.logoutText}>
            Logout
          </Text>

        </TouchableOpacity>

      </View>

      {/* HEADER */}

      <View style={styles.header}>

        <Text style={styles.heading}>
          Upcoming Events
        </Text>

      </View>

      {/* EVENT LIST */}

      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: 20
        }}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.description}>
              {item.description}
            </Text>

            <Text style={styles.location}>
              Location: {item.location}
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => checkIn(item.title)}
            >

              <Text style={styles.buttonText}>
                Check In
              </Text>

            </TouchableOpacity>

          </View>

        )}
      />

      {/* BOTTOM NAVIGATION */}

      <View style={styles.bottomNav}>

        <TouchableOpacity>

          <Text style={styles.activeTab}>
            Home
          </Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Text style={styles.tab}>
            Explore
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },

  navbar: {
    backgroundColor: "#0F172A",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  logoutBtn: {
    backgroundColor: "#DC2626",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },

  logoutText: {
    color: "white",
    fontWeight: "bold",
  },

  header: {
    padding: 20,
  },

  heading: {
    fontSize: 34,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    color: "#475569",
    marginBottom: 10,
  },

  location: {
    fontWeight: "bold",
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#000",
    paddingVertical: 15,
  },

  activeTab: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  tab: {
    color: "#94A3B8",
    fontSize: 16,
  },

});