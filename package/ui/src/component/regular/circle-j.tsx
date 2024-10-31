
import { Icon } from "../../index";

/**
 * A component that renders the `circle-j` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-j?s=regular circle-j}
 * @preview ![circle-j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-j.svg)
 */
const CircleJ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-360c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 136c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8c0 53 43 96 96 96s96-43 96-96l0-136z" />
    </Icon>
);

export default CircleJ;