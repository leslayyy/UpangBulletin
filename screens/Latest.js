import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const upcomingEvents = [
  {
    id: '1',
    title: 'Event 1',
    date: 'October 15, 2023',
    image: require('../assets/event1.jpg'),
  },
  {
    id: '2',
    title: 'Event 2',
    date: 'November 5, 2023',
    image: require('../assets/event2.jpg'),
  },
  {
    id: '3',
    title: 'Event 3',
    date: 'December 20, 2023',
    image: require('../assets/event3.jpg'),
  },
];

const Latest = () => {
  const renderEventItem = ({ item }) => (
    <TouchableOpacity style={styles.eventItem}>
      <Image source={item.image} style={styles.eventImage} />
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>
      <FlatList
        data={upcomingEvents}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 20
  },
  eventItem: {
    marginRight: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  eventImage: {
    width: 200,
    height: 120,
    borderRadius: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  eventDate: {
    fontSize: 12,
    color: '#888',
    marginHorizontal: 8,
    marginBottom: 16,
  },
});

export default Latest;
