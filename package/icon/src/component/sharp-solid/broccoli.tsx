
import { Icon } from "../../index";

/**
 * A component that renders the `broccoli` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broccoli?s=sharp-solid broccoli}
 * @preview ![broccoli](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/broccoli.svg)
 */
const Broccoli: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 352l96 0 320 0 96 0 0-96c0-45.5-31.6-83.6-74.1-93.5c6.4-10 10.1-21.8 10.1-34.5c0-35.3-28.7-64-64-64c-12.7 0-24.6 3.7-34.5 10.1C339.6 31.6 301.5 0 256 0s-83.6 31.6-93.5 74.1C152.6 67.7 140.7 64 128 64c-35.3 0-64 28.7-64 64c0 12.7 3.7 24.6 10.1 34.5C31.6 172.4 0 210.5 0 256l0 96zM200 512l112 0c18.4-55.3 44.9-100.1 63.9-128L280 384l-24 48-24-48-95.9 0c19.1 27.9 45.5 72.7 63.9 128z" />
    </Icon>
);

export default Broccoli;