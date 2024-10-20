
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-weak` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-weak?s=sharp-regular wifi-weak}
 * @preview ![wifi-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wifi-weak.svg)
 */
const WifiWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M264 424a56 56 0 1 1 112 0 56 56 0 1 1 -112 0z" />
    </Icon>
);

export default WifiWeak;