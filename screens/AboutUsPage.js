import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const AboutUsPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About Us</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Company</Text>
        <Text style={styles.sectionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          gravida tellus ac tellus imperdiet, nec ultrices libero
          suscipit. Integer non bibendum justo. Nulla facilisi.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Team</Text>
        <View style={styles.teamMember}>
          <Text style={styles.memberName}>John Doe</Text>
          <Text style={styles.memberPosition}>CEO</Text>
        </View>
        <View style={styles.teamMember}>
          <Text style={styles.memberName}>Jane Smith</Text>
          <Text style={styles.memberPosition}>CTO</Text>
        </View>
        {/* Add more team members as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
  },
  teamMember: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  memberPosition: {
    fontSize: 16,
    color: '#555',
  },
});

export default AboutUsPage;
