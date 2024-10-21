
import { Icon } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=sharp-light battery-bolt}
 * @preview ![battery-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/battery-bolt.svg)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 96l228.1 0-32 32L32 128l0 256 127.5 0-4.6 32L32 416 0 416l0-32L0 128 0 96l32 0zM480 384l0-256-127.5 0 4.6-32L480 96l32 0 0 32 0 256 0 32-32 0-228.1 0 32-32L480 384zm64-192l32 0 0 32 0 64 0 32-32 0 0-32 0-64 0-32zM296 112l8 0 18.4 0-2.6 18.3L306.4 224l45.6 0 16 0 0 16 0 8 0 6.6-4.7 4.7-136 136-4.7 4.7-6.6 0-8 0-18.4 0 2.6-18.3L205.6 288 160 288l-16 0 0-16 0-8 0-6.6 4.7-4.7 136-136 4.7-4.7 6.6 0zM190.6 256l33.4 0 18.4 0-2.6 18.3-10.5 73.8L321.4 256 288 256l-18.4 0 2.6-18.3 10.5-73.8L190.6 256z" />
    </Icon>
);

export default BatteryBolt;