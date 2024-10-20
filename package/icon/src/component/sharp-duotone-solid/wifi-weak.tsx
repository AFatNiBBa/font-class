
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wifi-weak` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-weak?s=sharp-duotone-solid wifi-weak}
 * @preview ![wifi-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wifi-weak.svg)
 */
const WifiWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M9.8 156.7l44.3 46.2C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9l44.3-46.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7zM129.5 264l42.4 48c39.5-34.9 91.3-56 148.2-56s108.6 21.1 148.2 56l42.4-48C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72z" />
        <path d="M256 416a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default WifiWeak;