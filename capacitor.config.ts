// eslint-disable-next-line import/no-extraneous-dependencies
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.restaurant.angular',
	appName: 'restaurant',
	webDir: 'dist/restaurant',
	bundledWebRuntime: false,
	server: {
		url: 'http://192.168.1.171:4200',
		cleartext: true,
	},
};

// eslint-disable-next-line import/no-default-export
export default config;
