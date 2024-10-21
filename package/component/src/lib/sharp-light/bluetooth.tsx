
import { Icon } from "../../index";

/**
 * A component that renders the `bluetooth` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bluetooth?s=sharp-light bluetooth}
 * @preview ![bluetooth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bluetooth.svg)
 */
const Bluetooth: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176-1.9l26.2 21.6 136 112 15.2 12.5L338 156.5 213.6 256 338 355.5l15.4 12.3-15.2 12.5-136 112L176 513.9l0-33.9 0-193.9L58 380.5l-20-25L162.4 256 38 156.5l20-25 118 94.4L176 32l0-33.9zm32 294.4l0 153.6 94.6-77.9L208 292.5zm0-73l94.6-75.7L208 65.9l0 153.6z" />
    </Icon>
);

export default Bluetooth;