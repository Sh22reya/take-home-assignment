import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Video } from 'expo-av';
import { Feather } from '@expo/vector-icons';

const TABS = [
  { label: 'COLLECTIONS', icon: 'sidebar' },
  { label: 'MANAGE TAGS', icon: 'target' },
];

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('COLLECTIONS');

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Video */}
      <Video
        source={require('../assets/images/bgvideo.mp4')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />

      {/* Black Overlay */}
      <View style={styles.overlay} />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <Image
              source={require('../assets/images/profile.jpg')}
              style={styles.profilePic}
            />
            <View style={styles.iconRow}>
              <Feather name="share-2" size={22} color="white" style={styles.icon} />
              <Feather name="settings" size={22} color="white" style={styles.icon} />
            </View>
          </View>
          <Text style={styles.name}>@theo_from_hsr</Text>
          <Text style={styles.branch}>India</Text>
          <Text style={styles.bio}>
            Enthusiastic about building apps. Loves React Native & Figma.
          </Text>
          <Text style={styles.num}>👤 2</Text>
          <Text style={styles.foll}>FOLLOWING</Text>
        </View>

        {/* Tab Bar */}
        <View style={styles.tabBar}>
          {TABS.map(tab => (
            <TouchableOpacity
              key={tab.label}
              onPress={() => setActiveTab(tab.label)}
              style={styles.tabWrapper}
            >
              <View
                style={[styles.tab, activeTab === tab.label && styles.activeTab]}
              >
                <Feather
                  name={tab.icon}
                  size={16}
                  color={activeTab === tab.label ? 'green' : 'gray'}
                  style={styles.tabIcon}
                />
                <Text
                  style={[styles.tabText, activeTab === tab.label ? styles.activeTabText : styles.inactiveTabText]}
                >
                  {tab.label}
                </Text>
              </View>
              {activeTab === tab.label && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        <View style={styles.tabContent}>
          {activeTab === 'COLLECTIONS' ? (
            <View style={styles.boxContainer}>
              <View style={styles.box}>
                <Image source={require('../assets/images/likes.jpg')} style={styles.boxImage} />
                <Text style={styles.boxLabel}>LIKED (10)</Text>
              </View>
              <View style={styles.box}>
                <Image source={require('../assets/images/saved.jpg')} style={styles.boxImage} />
                <Text style={styles.boxLabel}>SAVED (5)</Text>
              </View>
              <View style={styles.box}>
                <Image source={require('../assets/images/comment.jpg')} style={styles.boxImage} />
                <Text style={styles.boxLabel}>FILES (12)</Text>
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.recommendText}>
                Our recommendations work best when you let us know these things:
              </Text>

              <TouchableOpacity style={styles.manageItem}>
                <Text style={styles.manageTitle}>LEVEL ✨</Text>
                <Text style={styles.manageDesc}>Tell us your experience level so we can tailor content just for you.</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.manageItem}>
                <Text style={styles.manageTitle}>INTERESTS YOU LIKE ✨</Text>
                <Text style={styles.manageDesc}>We'll use these to show you cool builds.</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.manageItem}>
                <Text style={styles.manageTitle}>TOOLS USED 🛠️</Text>
                <Text style={styles.manageDesc}>We'll suggest better using these picks.</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  scrollContent: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  profileSection: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    marginLeft: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: 'yellow',
    borderBottomWidth:5.5,
    borderRightWidth:5.5,
    borderLeftColor:'white',
    borderTopColor:'white',
    marginBottom:10
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  branch: {
    fontSize: 14,
    color: 'white',
  },
  bio: {
    marginTop: 10,
    color: 'gray',
  },
  num: {
    marginTop: 30,
    color: 'white',
  },
  foll: {
    marginTop: 0,
    color: 'gray',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
    backgroundColor:'black'
  },
  tabWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  tab: {
    paddingVertical: 10,
    borderRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  activeTab: {
    backgroundColor: 'black',
  },
  tabIcon: {
    marginRight: 4,
  },
  activeTabText: {
    color: 'green',
  },
  inactiveTabText: {
    color: 'gray',
  },
  tabIndicator: {
    width: '100%',
    height: 3,
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 4,
  },
  tabText: {
    fontSize: 15,
    fontWeight: '500',
  },
  tabContent: {
    backgroundColor: 'rgba(15, 17, 25, 0.62)',
    padding: 20,
    borderRadius: 0,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  box: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 0,
    alignItems: 'center',
    padding: 10,
  },
  boxImage: {
    width: '100%',
    height: 250,
    marginBottom: 5,
  },
  boxLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },
  recommendText: {
    color: 'white',
    fontSize: 15,
    marginBottom: 15,
    fontWeight: '300',
  },
  manageItem: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 0,
    padding: 15,
    marginBottom: 10,
  },
  manageTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '200',
    marginBottom: 5,
  },
  manageDesc: {
    color: 'gray',
    fontSize: 14,
    lineHeight: 20,
  },
});
