
import { Icon } from "../../index";

/**
 * A component that renders the `circle-h` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-h?s=regular circle-h}
 * @preview ![circle-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-h.svg)
 */
const CircleH: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM368 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80-128 0 0-80c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 208c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80 128 0 0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 0-104z" />
    </Icon>
);

export default CircleH;