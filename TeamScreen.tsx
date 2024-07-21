import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// Define the interface for team member object
interface TeamMember {
  id: string;
  name: string;
  role: string;
  aboutMe: string;
  imageUri: string; // Update to accept image URLs
}

// Example team members data
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Blessing Mkhavele',
    role: 'Full Stack Developer',
    aboutMe: 'About me: i hold National Diploma In Surveying and Bcon Information systems, i am Passionate about creating robust and scalable applications.',
    imageUri: 'https://media.licdn.com/dms/image/D4D35AQEgCqqJE0tOwQ/profile-framedphoto-shrink_200_200/0/1713705477655?e=1721498400&v=beta&t=hdP4ba5LWWNDAr1244AdmG8gTJT1La0_SIiehVwHPOA',
  },
  {
    id: '2',
    name: 'Mamokone Magomane',
    role: 'UX/UI Designer',
    aboutMe: 'Specializes in creating intuitive and user-friendly interfaces.',
    imageUri: 'https://media.licdn.com/dms/image/D5603AQFrREjefuGtKg/profile-displayphoto-shrink_200_200/0/1715888142165?e=1726099200&v=beta&t=FwbnFRSJkPtzTxKe-1A2XYCrvS3j39asmxlU5k9sbww',
  },
  {
    id: '3',
    name: 'Charit Mahlakanya',
    role: 'Network Engineer',
    aboutMe: 'Specializes in designing and maintaining network infrastructure.',
    imageUri: 'https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/312449765_1279633796202881_5268415119430064220_n.jpg?stp=cp0_dst-jpg_s74x74&_nc_cat=110&ccb=1-7&_nc_sid=6738e8&_nc_ohc=zY83v8psfzYQ7kNvgHu8Ktd&_nc_ht=scontent-jnb2-1.xx&oh=00_AYA55pQHd0Xj47q8_lF90TReKnuNFz5SOTIMQz6tFwulSg&oe=6698A4DF',
  },
  {
    id: '4',
    name: 'Siyabonga Hlathswayo',
    role: 'Database Administrator',
    aboutMe: 'Expert in managing and optimizing database systems.',
    imageUri: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '5',
    name: 'Philisile Dlamini',
    role: 'Software Engineer',
    aboutMe: 'Experienced in designing and implementing software solutions.',
    imageUri: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  
  {
    id: '6',
    name: 'Zemfundo Shabangu',
    role: 'Cybersecurity Analyst',
    aboutMe: 'Dedicated to ensuring the security and integrity of IT systems.',
    imageUri: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const TeamsScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {teamMembers.map((member) => (
        <View key={member.id} style={styles.memberContainer}>
          <Image source={{ uri: member.imageUri }} style={styles.image} />
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.role}>{member.role}</Text>
          <Text style={styles.aboutMe}>{member.aboutMe}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#4b5320',
    padding: 20,
  },
  memberContainer: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  aboutMe: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default TeamsScreen;
