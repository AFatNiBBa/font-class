
import { Icon } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=regular circle-t}
 * @preview ![circle-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-t.svg)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM152 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0 0 168c0 13.3 10.7 24 24 24s24-10.7 24-24l0-168 80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-104 0-104 0z" />
    </Icon>
);

export default CircleT;