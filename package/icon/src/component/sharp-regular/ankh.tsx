
import { Icon } from "../../index";

/**
 * A component that renders the `ankh` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ankh?s=sharp-regular ankh}
 * @preview ![ankh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ankh.svg)
 */
const Ankh: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 128c0 42.7 23 81.6 51.4 112.6c9.9 10.8 19.9 20.1 28.6 27.4c8.7-7.4 18.7-16.6 28.6-27.4C217 209.6 240 170.7 240 128c0-44.2-35.8-80-80-80s-80 35.8-80 80zM95.1 272C63.4 237.1 32 187.4 32 128C32 57.3 89.3 0 160 0s128 57.3 128 128c0 59.4-31.4 109.1-63.1 144l71.1 0 24 0 0 48-24 0-112 0 0 168 0 24-48 0 0-24 0-168L24 320 0 320l0-48 24 0 71.1 0z" />
    </Icon>
);

export default Ankh;