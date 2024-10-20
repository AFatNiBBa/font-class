
import { Icon } from "../../index";

/**
 * A component that renders the `circle-i` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-i?s=regular circle-i}
 * @preview ![circle-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-i.svg)
 */
const CircleI: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 160-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-160 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0-72 0z" />
    </Icon>
);

export default CircleI;