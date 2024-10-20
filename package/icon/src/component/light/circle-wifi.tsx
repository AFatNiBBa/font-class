
import { Icon } from "../../index";

/**
 * A component that renders the `circle-wifi` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-wifi?s=light circle-wifi}
 * @preview ![circle-wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-wifi.svg)
 */
const CircleWifi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm122.2-28.7c-6.6 5.9-16.7 5.4-22.6-1.2s-5.4-16.7 1.2-22.6c41.1-37 95.6-59.6 155.2-59.6s114.1 22.6 155.2 59.6c6.6 5.9 7.1 16 1.2 22.6s-16 7.1-22.6 1.2C354.4 195.4 307.5 176 256 176s-98.4 19.4-133.8 51.4zM256 344a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0-72c-24.8 0-47.3 9.4-64.4 24.8c-6.6 5.9-16.7 5.4-22.6-1.1s-5.4-16.7 1.1-22.6c22.7-20.5 52.8-33 85.8-33s63.1 12.5 85.8 33c6.6 5.9 7.1 16 1.1 22.6s-16 7.1-22.6 1.1c-17-15.4-39.6-24.8-64.4-24.8z" />
    </Icon>
);

export default CircleWifi;