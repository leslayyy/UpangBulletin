import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'


class Settings extends Component {

 
  constructor(props) {
    super(props);
    this.state = {
      notificationsEnabled: false,
    };
  }

  toggleNotifications = () => {
    this.setState((prevState) => ({
      notificationsEnabled: !prevState.notificationsEnabled,
    }));
  };

  handleChangePassword = () => {
    // Add your logic to navigate to the Change Password screen here
  };

  handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error while logging out: ", error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Settings</Text>

        <View style={styles.optionContainer}>
          <View style={styles.option}>
            <Text>Enable Notifications</Text>
            <Switch
              value={this.state.notificationsEnabled}
              onValueChange={this.toggleNotifications}
            />
          </View>

          <TouchableOpacity
            onPress={this.handleChangePassword}
            style={styles.option}
          >
            <Text>About Us</Text>
            <FontAwesome5 name="lock" size={24} color="#007AFF" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.handleLogout}
            style={styles.option}
          >
            <Text>Logout</Text>
            <FontAwesome5 name="sign-out-alt" size={24} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 30
  },
  optionContainer: {
    width: '100%',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2, // Add elevation for a shadow effect (Android)
    shadowColor: '#000', // Add shadow for a shadow effect (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default Settings;
