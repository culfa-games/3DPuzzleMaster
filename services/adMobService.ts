
import { Capacitor } from '@capacitor/core';
import type { AdOptions } from '@capacitor-community/admob';

export class AdMobService {
    // REAL PRODUCTION IDs
    private readonly APP_ID = 'ca-app-pub-1365772215119360~6970052548';
    private readonly AD_UNIT_ID = 'ca-app-pub-1365772215119360/5465399182';

    private isInitialized = false;

    async initialize() {
        if (this.isInitialized) return;

        // Skip logic if we are running on Web (localhost)
        if (!Capacitor.isNativePlatform()) {
            console.log('[AdMob] Running on Web - Ads are mocked.');
            this.isInitialized = true;
            return;
        }

        try {
            // Dynamic import to avoid web build errors
            const { AdMob } = await import('@capacitor-community/admob');

            await AdMob.initialize({
                requestTrackingAuthorization: true,
                // testingDevices: ['YOUR_TEST_DEVICE_ID'], 
                initializeForTesting: true,
            });
            this.isInitialized = true;
            console.log('[AdMob] Initialized on Native Device');

            this.prepareInterstitial();

        } catch (e) {
            console.error('[AdMob] Init Error:', e);
        }
    }

    async prepareInterstitial() {
        if (!Capacitor.isNativePlatform()) return;

        try {
            const { AdMob } = await import('@capacitor-community/admob');
            const options: AdOptions = {
                adId: this.AD_UNIT_ID,
                // isTesting: true 
            };
            await AdMob.prepareInterstitial(options);
            console.log('[AdMob] Interstitial Ad Prepared');
        } catch (e) {
            console.error('[AdMob] Interstitial Prepare Error:', e);
        }
    }

    async showInterstitial(): Promise<boolean> {
        return new Promise(async (resolve) => {
            if (!Capacitor.isNativePlatform()) {
                console.log('[AdMob] Mock Interstitial Shown (Web)');
                // Show a fake ad overlay for verification purposes on localhost
                const fakeAd = document.createElement('div');
                fakeAd.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:black;z-index:9999;display:flex;align-items:center;justify-content:center;color:white;font-size:24px;flex-direction:column;';
                fakeAd.innerHTML = '<h1>ADS GO HERE</h1><p>Interstitial Ad Placeholder</p><button style="margin-top:20px;padding:10px 20px;background:white;color:black;border:none;border-radius:5px;cursor:pointer;" id="close-ad-btn">Close Ad</button>';
                document.body.appendChild(fakeAd);

                const btn = document.getElementById('close-ad-btn');
                if (btn) btn.onclick = () => {
                    document.body.removeChild(fakeAd);
                    resolve(true);
                };
                return;
            }

            try {
                const { AdMob } = await import('@capacitor-community/admob');

                // Show Ad
                await AdMob.showInterstitial();
                console.log('[AdMob] Interstitial Ad Shown');

                // Prepare next
                this.prepareInterstitial();
                resolve(true);
            } catch (e) {
                console.error('[AdMob] Interstitial Show Failed:', e);
                // Try to prepare again
                this.prepareInterstitial();
                resolve(false);
            }
        });
    }
}

export const adMobService = new AdMobService();
