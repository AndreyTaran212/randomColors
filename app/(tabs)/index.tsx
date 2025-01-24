import {
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import useColorGenerator from '@/assets/hooks/useColorGenerator';
import {useState} from 'react';

export default function HomeScreen() {
  const {changeColor, changeColorType, bg} = useColorGenerator();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  return (
    <SafeAreaView style={{backgroundColor: bg}}>
      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: bg,
        }}
        onPress={changeColor}>
        <Text style={{fontSize: 34, color: '#fff'}}>Hello There!</Text>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.optionsItem}
                onPress={() => {
                  changeColorType('hex');
                  setShowAppOptions(false);
                }}>
                <Text>hex</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionsItem}
                onPress={() => {
                  changeColorType('rgb');
                  setShowAppOptions(false);
                }}>
                <Text>rgb</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionsItem}
                onPress={() => {
                  changeColorType('hsl');
                  setShowAppOptions(false);
                }}>
                <Text>hsl</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.footerContainer}
            onPress={() => setShowAppOptions(true)}>
            <View>
              <Text>Options</Text>
            </View>
          </TouchableOpacity>
        )}
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 120,
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 120,
  },
  optionsRow: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
  },
  optionsItem: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    paddingHorizontal: 40,
  },
});
