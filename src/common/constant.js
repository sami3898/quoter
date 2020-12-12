import { TestIds } from '@react-native-firebase/admob';
import { Dimensions } from 'react-native';

// Height and Width Dimension
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

// Icons
const COPY_ICON = require('../../res/copy/copy.png');
const INFO_ICON = require('../../res/info/info.png');
const INSTA_ICON = require('../../res/insta/insta.png');
const TWITTER_ICON  = require('../../res/twitter/twitter.png');
const GMAIL_ICON    = require('../../res/gmail/gmail.png');
const FAVBOX_ICON   = require('../../res/favBox/favBox.png');
const BACK_ICON     = require('../../res/backIcon/back.png');

// Add Unit Ids
const debug = true;

const BANNER_ID = debug == true ? TestIds.BANNER : 'ca-app-pub-5475538885064140/2669190550'
const INTERSTITIAL_ID = debug == true ? TestIds.INTERSTITIAL : 'ca-app-pub-5475538885064140/1036351160'
// Export Everything

export {
    COPY_ICON,
    INFO_ICON,
    INSTA_ICON,
    TWITTER_ICON,
    GMAIL_ICON,
    FAVBOX_ICON,
    BACK_ICON,
    deviceHeight,
    deviceWidth,
    BANNER_ID,
    INTERSTITIAL_ID
}