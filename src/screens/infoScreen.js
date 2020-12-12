// All imports here
import { BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  CELADON,
  deviceHeight,
  INSTA_ICON,
  GMAIL_ICON,
  TWITTER_ICON,
  deviceWidth,
  BACK_ICON,
  BANNER_ID,
} from '../common/constant';

// Main Class Component
export default class InfoScreen extends Component {
  // Constructor
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          que: 'What is QUOTER?',
          ans: 'QUOTER is a simple App which generate random quotes for you.',
        },
        {
          id: 2,
          que: 'Why some quotes repeat frequantly?',
          ans:
            'QUOTER generate random quote from REST API everytime. so maybe there is a chance you see same quote frequantly.',
        },
        // {
        //     id:3,
        //     que: 'How to connect with Developer?',
        //     ans: 'Here are someways to connect with Developer.',
        //     email: 'sami.sk868@gmail.com',
        //     insta: '@sami3898',
        //     twitter: '@sami3898'
        // }
      ],
    };
  }

  // Did Mount Function
  componentDidMount() {
    this.customHeader();
  }

  // Custom Header Function
  customHeader() {
    this.props.navigation.setOptions({
      title: 'Information',
      headerTitleAlign: 'center',
      headerTitleAllowFontScaling: false,
      headerTitleStyle: {
        textTransform: 'uppercase',
        letterSpacing: 4,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#363636',
        elevation: 0,
      },
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Image source={BACK_ICON} style={styles.backIcon} />
          </TouchableOpacity>
        );
      },
    });
  }

  // Render Item for Flatlist
  renderItem = ({item}) => {
    let insta = null;
    let twitter = undefined;
    let email = undefined;
    if (item.insta != undefined && item.insta != null) {
      insta = 'Insta: ' + item.insta;
    }
    if (item.twitter != undefined && item.twitter != null) {
      twitter = 'Twitter: ' + item.twitter;
    }
    if (item.email != undefined && item.email != null) {
      email = 'E-mail: ' + item.email;
    }
    return (
      <View>
        <View style={styles.questionStyle}>
          <Text allowFontScaling={false} style={styles.questionText}>
            {item.que}
          </Text>
        </View>
        <View style={styles.answerStyle}>
          <Text allowFontScaling={false} style={styles.answerText}>
            {item.ans}
          </Text>
        </View>
      </View>
    );
  };

  // Main Render
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 'auto'}}>
          <FlatList
            contentContainerStyle={{marginHorizontal: 10}}
            data={this.state.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this.renderItem}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text allowFontScaling={false} style={styles.infoTitle}>
            Connect with Developer
          </Text>
          <View style={styles.logoContainer}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/sami_3898/')
              }>
              <Image source={INSTA_ICON} style={styles.logoStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('mailto:sami.sk868@gmail.com')}>
              <Image source={GMAIL_ICON} style={styles.logoStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://twitter.com/sami3898')}>
              <Image source={TWITTER_ICON} style={styles.logoStyle} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 50,
            alignItems: 'center',
          }}>
          <BannerAd
            unitId={BANNER_ID}
            size={BannerAdSize.BANNER}
            onAdLoaded={() => {
              console.log('Ad Load');
            }}
            onAdFailedToLoad={(error) => {
              alert('Advert failed to load: ' + error);
            }}
          />
        </View>
      </View>
    );
  }
}

// Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
  },
  questionStyle: {
    //backgroundColor: '#B4614B',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'rgba(29,29,29,0.5)',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  answerStyle: {
    padding: 10,
    marginBottom: 20,
  },
  answerText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#fff',
  },
  infoContainer: {
    alignItems: 'center',
    padding: 10,
  },
  infoTitle: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: '#fff',
  },
  logoContainer: {
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  logoStyle: {
    resizeMode: 'contain',
    height: 0.13 * deviceWidth,
    width: 0.13 * deviceWidth,
    tintColor: '#fff',
  },
  backIcon: {
    height: 0.067 * deviceWidth,
    width: 0.067 * deviceWidth,
    resizeMode: 'contain',
    tintColor: 'white',
    marginLeft: 0.04 * deviceWidth,
  },
});
