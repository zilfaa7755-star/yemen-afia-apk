import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yemenafia.app',
  appName: 'يمن عافية',
  webDir: 'dist',
  android: {
    backgroundColor: '#0EA5E9',
    allowMixedContent: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0EA5E9',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DEFAULT',
      backgroundColor: '#0EA5E9',
    },
  },
};

export default config;
