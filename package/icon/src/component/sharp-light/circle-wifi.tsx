
import { Icon } from "../../index";

/**
 * A component that renders the `circle-wifi` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-wifi?s=sharp-light circle-wifi}
 * @preview ![circle-wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-wifi.svg)
 */
const CircleWifi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm405.2-13.2C368.6 201.8 315.3 176 256 176s-112.6 25.8-149.2 66.8L84.1 220.1C126.6 173.4 187.9 144 256 144s129.4 29.4 171.9 76.1l-22.7 22.7zm-47.5 47.5l-22.9 22.9C317.5 288.3 288.6 272 256 272s-61.5 16.3-78.8 41.2l-22.9-22.9C177.7 259.7 214.5 240 256 240s78.3 19.7 101.7 50.3zM232 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default CircleWifi;