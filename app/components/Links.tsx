import React, {FunctionComponent} from 'react';
import {
  SafeAreaView,
  Platform,
  Linking,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabProps from '../types/TabProps';
import {Title, Paragraph} from 'react-native-paper';
import {Language} from '../types';
import globalStyles from '../styles/globalStyles';

const Links: FunctionComponent<TabProps> = ({language, navigation}) => {
  const getDescription = () => {
    if (language === Language.ENGLISH) {
      return 'Each day we will send you a word of hope and assurance from the Tashelhayt Bible.';
    }
    if (language === Language.FRENCH) {
      return "Chaque jour, nous vous enverrons une parole d'espoir et d'assurance tirée de la Bible en tachelhit.";
    }
    return 'اسّ ف-واسّ راد-اك-نتازن اوال ءيميمن غ-وارّاتن ن-سيدي ربّي. سفلد-اس ار-تّزاعمت س-رّجا ءيصحان';
  };

  const getDescription2 = () => {
    if (language === Language.ENGLISH) {
      return 'Enjoy our storehouse of spiritual treasures – videos, audios, downloads – the word of God with helpful teaching in Tashelhayt.';
    }
    if (language === Language.FRENCH) {
      return 'Entrez dans notre maison de trésors spirituels - vidéos, audios, téléchargements – la parole de Dieu avec des enseignements encourageants en tachelhit.';
    }
    return `كشم س-تگمّي-نغ تسونفوت،
    ار-تسفليدت ءي-لخبار ءيسّفراحن،
    ار-تاقرات ءيواليون ميمنين،
    ار-تسّموقولت لفيديوات فولكينين.`;
  };

  const openAwalIwass = async () => {
    try {
      if (Platform.OS === 'ios') {
        await Linking.openURL(
          'itms-apps://apps.apple.com/gb/app/awal-i-wass/id1511054521',
        );
      } else {
        await Linking.openURL(
          `https://play.google.com/store/apps/details?id=com.wordofgodforeachday${
            language === Language.BERBER ? '.arabic' : ''
          }`,
        );
      }
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const getTitle = () => {
    if (language === Language.ENGLISH) {
      return 'More apps';
    }
    if (language === Language.FRENCH) {
      return 'liens';
    }
    return 'ءيزداين';
  };

  const getSubtitle1 = () => {
    if (language === Language.ENGLISH) {
      return 'awal i-wass';
    }
    if (language === Language.FRENCH) {
      return 'awal i-wass';
    }
    return 'اوال ءي-واسّ';
  };

  const getSubtitle2 = () => {
    if (language === Language.ENGLISH) {
      return 'tachelhit info';
    }
    if (language === Language.FRENCH) {
      return 'tachelhit info';
    }
    return 'تاشلحيت ءينفو';
  };

  const openTachelhitApp = async () => {
    try {
      if (Platform.OS === 'ios') {
        await Linking.openURL(
          'https://apps.apple.com/us/app/tachelhit-info/id1530749221',
        );
      } else {
        await Linking.openURL(
          `https://play.google.com/store/apps/details?id=com.tachelhitinfo${
            language === Language.BERBER ? '.arabic' : ''
          }`,
        );
      }
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const openTachelhitWebsite = () => {
    Linking.openURL('https://tachelhit.info');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Title
        style={{
          textAlign: 'center',
          fontSize: language === Language.BERBER ? 40 : 30,
          marginTop: 20,
          fontFamily:
            language === Language.BERBER
              ? globalStyles.arabic.fontFamily
              : undefined,
          paddingTop: language === Language.BERBER ? 10 : 0,
        }}>
        {getTitle()}
      </Title>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
        }}>
        <Title
          style={{
            textAlign: 'center',
            fontFamily:
              language === Language.BERBER
                ? globalStyles.arabic.fontFamily
                : undefined,
            fontSize: language === Language.BERBER ? 32 : 20,
          }}>
          {getSubtitle1()}
        </Title>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Icon name="cellphone" size={75} />
          <TouchableOpacity onPress={openAwalIwass}>
            <Image
              source={require('../images/logo.png')}
              style={{height: 75, width: 75}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Paragraph
          style={{
            textAlign: 'center',
            marginBottom: 10,
            fontFamily:
              language === Language.BERBER
                ? globalStyles.arabic.fontFamily
                : undefined,
            fontSize: language === Language.BERBER ? 24 : undefined,
            paddingTop: language === Language.BERBER ? 10 : 0,
          }}>
          {getDescription()}
        </Paragraph>
        <Title
          style={{
            textAlign: 'center',
            marginTop: 20,
            fontFamily:
              language === Language.BERBER
                ? globalStyles.arabic.fontFamily
                : undefined,
            fontSize: language === Language.BERBER ? 32 : 20,
          }}>
          {getSubtitle2()}
        </Title>

        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Icon name="cellphone" size={75} />
          <TouchableOpacity onPress={openTachelhitApp}>
            <Image
              source={require('../images/tachelhitinfo.png')}
              style={{height: 75, width: 75}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Icon name="monitor" size={75} />
          <TouchableOpacity onPress={openTachelhitWebsite}>
            <Image
              source={require('../images/tachelhitinfo.png')}
              style={{height: 75, width: 75}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Paragraph
          style={{
            textAlign: 'center',
            fontFamily:
              language === Language.BERBER
                ? globalStyles.arabic.fontFamily
                : undefined,
            fontSize: language === Language.BERBER ? 24 : undefined,
            paddingTop: language === Language.BERBER ? 10 : 0,
          }}>
          {getDescription2()}
        </Paragraph>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Links;
