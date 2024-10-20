
import { Icon } from "../../index";

/**
 * A component that renders the `bluetooth` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bluetooth?s=sharp-solid bluetooth}
 * @preview ![bluetooth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bluetooth.svg)
 */
const Bluetooth: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M160 0l51.2 38.4 128 96L373.3 160l-34.1 25.6L245.3 256l93.9 70.4L373.3 352l-34.1 25.6-128 96L160 512l0-64 0-128L83.2 377.6 57.6 396.8 19.2 345.6l25.6-19.2L138.7 256 44.8 185.6 19.2 166.4l38.4-51.2 25.6 19.2L160 192l0-128 0-64zm64 320l0 64 42.7-32L224 320zm0-128l42.7-32L224 128l0 64z" />
    </Icon>
);

export default Bluetooth;