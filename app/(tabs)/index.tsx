import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const ScamReportPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <TouchableOpacity style={styles.sidebarButton}>
          <Ionicons name="home" size={24} color="black" />
          <Text style={styles.sidebarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <FontAwesome5 name="book" size={24} color="red" />
          <Text style={styles.sidebarText}>Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <MaterialIcons name="report" size={24} color="black" />
          <Text style={styles.sidebarText}>Scams</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <Ionicons name="people" size={24} color="black" />
          <Text style={styles.sidebarText}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <Ionicons name="information-circle" size={24} color="black" />
          <Text style={styles.sidebarText}>About</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <TextInput style={styles.searchBar} placeholder="search anything" />
          <View style={styles.headerIcons}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Image style={styles.profilePic} source={{ uri: 'https://via.placeholder.com/150' }} />
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity style={styles.reportButton}>
            <Text style={styles.reportButtonText}>Click here to report a scam</Text>
          </TouchableOpacity>
          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={styles.statsNumber}>200</Text>
              <Text style={styles.statsLabel}>Scams reported</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.statsNumber}>10</Text>
              <Text style={styles.statsLabel}>TOP scammers</Text>
            </View>
          </View>
          <View style={styles.warningContainer}>
            <Text style={styles.warningText}>Top scammer</Text>
            <Text style={styles.warningDetail}>
              Please note that the user with this number(0783335099) has been reported many times and this serves as a warning
            </Text>
            <TouchableOpacity style={styles.seeMoreButton}>
              <Text style={styles.seeMoreButtonText}>See more</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Scams</Text>
          <View style={styles.scamTypesContainer}>
            {['Robot scams', 'Broker scams', 'phishing scams', 'signal seller scams', 'trading system scams', 'ponzi schemes'].map((scamType, index) => (
              <TouchableOpacity key={index} style={styles.scamTypeButton}>
                <Text style={styles.scamTypeText}>{scamType}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.reportedScamsContainer}>
            <View style={styles.reportedScam}>
              <View style={styles.scamImage} />
              <View style={styles.scamInfo}>
                <Text style={styles.scamTitle}>Broker scam</Text>
                <Text style={styles.scamDetail}>by Lindi</Text>
                <Text style={styles.scamTime}>2h ago</Text>
                <Text style={styles.scamViews}>10 views</Text>
              </View>
            </View>
            <View style={styles.reportedScam}>
              <View style={styles.scamImage} />
              <View style={styles.scamInfo}>
                <Text style={styles.scamTitle}>Robot scam</Text>
                <Text style={styles.scamDetail}>by Ayanda</Text>
                <Text style={styles.scamTime}>just now</Text>
                <Text style={styles.scamViews}>3 views</Text>
              </View>
            </View>
          </View>
          <View style={styles.reminderContainer}>
            <Ionicons name="alert-circle-outline" size={24} color="black" />
            <Text style={styles.reminderText}>
              Scammers may use fake names, fake addresses, and fake pictures. They may even be impersonating genuine brands (and real people - I’ve been impersonated countless times by fraudulent social media scammers).
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#87CEEB',
  },
  sidebar: {
    width: '15%',
    backgroundColor: '#EFEFEF',
    paddingVertical: 20,
    alignItems: 'center',
  },
  sidebarButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sidebarText: {
    fontSize: 12,
    color: 'black',
  },
  content: {
    width: '85%',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 15,
  },
  reportButton: {
    backgroundColor: '#DAA520',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  reportButtonText: {
    color: 'black',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statsBox: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statsLabel: {
    fontSize: 12,
    color: 'gray',
  },
  warningContainer: {
    backgroundColor: '#EFEFEF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  warningText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  warningDetail: {
    fontSize: 12,
    color: 'gray',
    marginVertical: 10,
  },
  seeMoreButton: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  seeMoreButtonText: {
    color: 'black',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scamTypesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  scamTypeButton: {
    backgroundColor: '#add8e6',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  scamTypeText: {
    color: 'black',
  },
  reportedScamsContainer: {
    marginBottom: 20,
  },
  reportedScam: {
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  scamImage: {
    width: 50,
    height: 50,
    backgroundColor: '#C0C0C0',
    borderRadius: 10,
    marginRight: 15,
  },
  scamInfo: {
    flex: 1,
  },
  scamTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scamDetail: {
    fontSize: 12,
    color: 'gray',
  },
  scamTime: {
    fontSize: 12,
    color: 'gray',
  },
  scamViews: {
    fontSize: 12,
    color: 'gray',
  },
  reminderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    padding: 15,
    borderRadius: 10,
  },
  reminderText: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 10,
  },
});

export default ScamReportPage;
