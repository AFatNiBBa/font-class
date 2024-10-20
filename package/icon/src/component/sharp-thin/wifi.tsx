
import { Icon } from "../../index";

/**
 * A component that renders the `wifi` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi?s=sharp-thin wifi}
 * @preview ![wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wifi.svg)
 */
const Wifi: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 48C200.3 48 91.9 96.7 13.7 175.4L2.3 164.1C83.5 82.5 195.8 32 320 32s236.5 50.5 317.7 132.1l-11.3 11.3C548.1 96.7 439.7 48 320 48zm0 160c-72.2 0-137.8 28.1-186.5 74l-11-11.6C174.1 221.8 243.6 192 320 192s145.9 29.8 197.5 78.4l-11 11.6c-48.7-45.9-114.3-74-186.5-74zm48 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Wifi;