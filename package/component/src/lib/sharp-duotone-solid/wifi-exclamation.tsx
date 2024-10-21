
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wifi-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-exclamation?s=sharp-duotone-solid wifi-exclamation}
 * @preview ![wifi-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wifi-exclamation.svg)
 */
const WifiExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M9.8 156.7l44.3 46.2c52-49.9 118.1-85.4 191.7-99.7L240.5 39C151.8 54.9 72.2 96.9 9.8 156.7zM129.5 264l42.4 48c24.9-21.9 54.6-38.4 87.4-47.7l-5.4-64.7c-46.9 11-89.4 33.5-124.4 64.4zm251.3 .3c32.8 9.2 62.5 25.7 87.4 47.7l42.4-48c-34.9-30.8-77.4-53.3-124.4-64.4l-5.4 64.7zm13.4-161.2c73.6 14.4 139.6 49.8 191.7 99.7l44.3-46.2C567.8 96.9 488.2 54.9 399.5 39l-5.3 64.1z" />
        <path d="M296 320L272 32l96 0L344 320l-48 0zm24 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default WifiExclamation;