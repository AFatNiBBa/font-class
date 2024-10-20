
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-weak` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-weak?s=light wifi-weak}
 * @preview ![wifi-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wifi-weak.svg)
 */
const WifiWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 384a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default WifiWeak;