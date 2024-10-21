
import { Icon } from "../../index";

/**
 * A component that renders the `wifi` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi?s=sharp-regular wifi}
 * @preview ![wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wifi.svg)
 */
const Wifi: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M33.7 191.3C109.1 122.2 209.6 80 320 80s210.9 42.2 286.3 111.3l32.4-35.4C554.8 79 442.9 32 320 32S85.2 79 1.2 155.9l32.4 35.4zM320 256c64.9 0 123.9 24.9 168.1 65.6l32.5-35.3C467.9 237.7 397.4 208 320 208s-147.9 29.7-200.6 78.4l32.5 35.3C196.1 280.9 255.1 256 320 256zm56 168a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z" />
    </Icon>
);

export default Wifi;