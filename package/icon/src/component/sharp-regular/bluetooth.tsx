
import { Icon } from "../../index";

/**
 * A component that renders the `bluetooth` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bluetooth?s=sharp-regular bluetooth}
 * @preview ![bluetooth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bluetooth.svg)
 */
const Bluetooth: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M168 0l38.4 28.8 128 96 23.7 17.8-22.3 19.5L228.4 256l107.4 93.9 22.3 19.5-23.7 17.8-128 96L168 512l0-48 0-155.1L79.8 386.1 61.7 401.9 30.1 365.7l18.1-15.8L155.6 256 48.2 162.1 30.1 146.3l31.6-36.1 18.1 15.8L168 203.1 168 48l0-48zm48 308.9L216 416l65.9-49.4L216 308.9zm0-105.8l65.9-57.7L216 96l0 107.1z" />
    </Icon>
);

export default Bluetooth;