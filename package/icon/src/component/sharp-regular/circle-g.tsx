
import { Icon } from "../../index";

/**
 * A component that renders the `circle-g` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-g?s=sharp-regular circle-g}
 * @preview ![circle-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-g.svg)
 */
const CircleG: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 256c0-44.2 35.8-80 80-80c20.5 0 39.2 7.7 53.3 20.4l32-35.8C318.7 140.3 288.8 128 256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128l0-24-24 0-80 0-24 0 0 48 24 0 52.3 0c-10.2 32.5-40.5 56-76.3 56c-44.2 0-80-35.8-80-80z" />
    </Icon>
);

export default CircleG;