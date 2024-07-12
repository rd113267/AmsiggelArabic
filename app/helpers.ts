import {Alert, Platform, Linking} from 'react-native';
import {Language} from './types';
import constants from './constants';
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import {request, PERMISSIONS} from 'react-native-permissions';

export const getVideoURLs = (language: string) => {
  switch (language) {
    case Language.ENGLISH:
      return constants.ENGLISH_VIMEO_URLS;
    case Language.FRENCH:
      return constants.FRENCH_VIMEO_URLS;
    default:
      return constants.BERBER_VIMEO_URLS;
  }
};

export const getAudioLinks = (language?: string): {full: string} => {
  switch (language) {
    case Language.ENGLISH:
      return {full: '335'};
    case Language.FRENCH: {
      return {full: '777'};
    }
    default:
      return {full: '585'};
  }
};

export const getAudioLinkText = (language?: string): {fullText: string} => {
  switch (language) {
    case Language.ENGLISH:
      return {
        fullText: 'The Quest of Amsiggel (audio)',
      };
    case Language.FRENCH: {
      return {
        fullText: "Le Voyage d'Amsiggel (audio)",
      };
    }
    default:
      return {
        fullText: 'امودّو ن-ومسيگّل',
      };
  }
};

export const getDurationString = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);

  const hours = h < 10 ? `0${h}` : h;
  const minutes = m < 10 ? `0${m}` : m;
  const secs = s < 10 ? `0${s}` : s;

  if (h > 0) {
    return `${hours}:${minutes}:${secs}`;
  }
  return `${minutes}:${secs}`;
};

export const downloadLink = async (
  link: string,
  filename: string,
  pdf?: boolean,
) => {
  const fileType = pdf ? '.pdf' : '.mp3';
  try {
    if (Platform.OS === 'ios') {
      await Share.open({
        url: link,
        saveToFiles: true,
        failOnCancel: false,
        filename: `${filename}${fileType}`,
      });
    } else {
      await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      await RNFetchBlob.config({
        addAndroidDownloads: {
          notification: true,
          useDownloadManager: true,
          path: `${RNFetchBlob.fs.dirs.DownloadDir}/${filename}${fileType}`,
        },
      }).fetch('GET', link);
    }
  } catch (e) {
    if (Platform.OS === 'ios') {
      Linking.openURL(link);
    } else {
      Alert.alert('Error', e.message);
    }
  }
};
