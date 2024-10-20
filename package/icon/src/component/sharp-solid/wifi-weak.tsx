
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-weak` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-weak?s=sharp-solid wifi-weak}
 * @preview ![wifi-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wifi-weak.svg)
 */
const WifiWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 416a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default WifiWeak;