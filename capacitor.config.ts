import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.irokagames.blockbuster3D',
  appName: '3D Master Jingo',
  webDir: 'dist',
  ios: {
    buildOptions: {
      signingStyle: 'manual',
    },
  },
  plugins: {
    StatusBar: {
      style: 'DARK',
      overlaysWebView: true,
      backgroundColor: '#00000000',
    },
  },
  server: {
    androidScheme: 'https',
  },
};

export default config;
