
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-exclamation` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-exclamation?s=solid wifi-exclamation}
 * @preview ![wifi-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/wifi-exclamation.svg)
 */
const WifiExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 32c-27.2 0-48.7 23.1-46.8 50.2l14.9 208C289.3 307 303.2 320 320 320s30.7-13 31.9-29.7l14.9-208C368.7 55.1 347.2 32 320 32zM241.3 84.5c-1.2-17.4 3.3-33.9 11.9-47.6C159.4 51 75.1 94.1 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9c51.3-49.2 116.2-84.3 188.5-99.1l-1.4-19.3zm157.4 0l-1.4 19.3c72.3 14.8 137.2 49.9 188.5 99.1c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C564.9 94.1 480.6 51 386.8 37c8.6 13.7 13.1 30.1 11.9 47.6zM129.5 264c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c23.6-20.8 51.6-36.7 82.4-46.2l-4.7-65.1C204.4 212 163.4 234.1 129.5 264zm260.9-63.3l-4.6 65.1c30.8 9.4 58.8 25.4 82.4 46.2c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2c-33.9-29.9-74.9-52-120.1-63.3zM384 416a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default WifiExclamation;