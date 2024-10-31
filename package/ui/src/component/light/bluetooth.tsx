
import { Icon } from "../../index";

/**
 * A component that renders the `bluetooth` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bluetooth?s=light bluetooth}
 * @preview ![bluetooth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bluetooth.svg)
 */
const Bluetooth: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M185.4 1.4c5.7-2.6 12.5-1.5 17.2 2.6l144 128c3.6 3.2 5.5 7.7 5.4 12.5s-2.4 9.2-6.2 12.1L218.1 256l127.8 99.4c3.8 2.9 6 7.4 6.2 12.1s-1.8 9.3-5.4 12.5l-144 128c-4.7 4.2-11.4 5.2-17.2 2.6s-9.4-8.3-9.4-14.6l0-207.3L57.8 380.6c-7 5.4-17 4.2-22.5-2.8s-4.2-17 2.8-22.5L165.9 256 38.2 156.6c-7-5.4-8.2-15.5-2.8-22.5s15.5-8.2 22.5-2.8L176 223.3 176 16c0-6.3 3.7-12 9.4-14.6zM208 288.7l0 171.7 103-91.6L208 288.7zm0-65.4l103-80.1L208 51.6l0 171.7z" />
    </Icon>
);

export default Bluetooth;