import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const kpopData = [
  {
    title: 'Seventeen',
    data: [
      { name: 'Hoshi', imageUrl: 'https://cdn.k-ennews.com/news/photo/202404/855_2167_2012.jpg' },
      { name: 'Woozi', imageUrl: 'https://magazine.weverse.io/upload/img/202204/2022042656Vx_8p.jpg' },
    ],
    bgcolor: '#92a8d1',
    icon: 'splotch', // Cute icon for Seventeen
  },
  {
    title: 'NCT',
    data: [
      { name: 'Mark', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/241025_Mark_Lee.jpg' },
      { name: 'Taeyong', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/20231006_Taeyong_%28NCT%29.jpg/640px-20231006_Taeyong_%28NCT%29.jpg' },
    ],
    bgcolor: '#9FD4A3', // Softer green for NCT
    icon: 'seedling', // Fun icon for NCT
  },
  {
    title: 'TXT',
    data: [
      { name: 'Yeonjun', imageUrl: 'https://magazine.weverse.io/upload/img/202306/20230616JxvErzf.jpg' },
      { name: 'Soobin', imageUrl: 'https://static.wikia.nocookie.net/txt/images/3/37/Soobin_CHIKAI_to_U_Concept_Photo_%281%29.jpeg/revision/latest/scale-to-width/360?cb=20240520090440' },
    ],
    bgcolor: '#66B2FF', // Softer blue for TXT
    icon: 'rainbow', // Playful icon for TXT
  },
];

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.memberName}>{item.name}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.memberImage} />
    </TouchableOpacity>
);

const App = () => (
    <View style={styles.container}>
      <StatusBar Hidden={true} />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Member</Text>
      </TouchableOpacity>

      <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          sections={kpopData}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title, bgcolor, icon } }) => (
              <View style={[styles.sectionHeader, { backgroundColor: bgcolor }]}>
                <Icon name={icon} size={24} color="#fff" style={styles.sectionIcon} />
                <Text style={styles.sectionTitle}>{title}</Text>
              </View>
          )}
      />
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#c5b9cd',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFFFF',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDDFF',
  },
  memberName: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
  },
  memberImage: {
    width: 100,
    height: 140,
  },
});

export default App;
