import { Image, StyleSheet, Platform, Text, View, } from 'react-native';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton  from '@/components/CategoryButton';

const Home = () => {
  return (
    <View >
        <Link style={styles.linkContainer} href="/categories"> Go to category page </Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  linkContainer: {
    color: 'white',
  }
})
