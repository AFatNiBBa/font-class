
import { Icon } from "../../index";

/**
 * A component that renders the `circle-7` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-7?s=sharp-regular circle-7}
 * @preview ![circle-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-7.svg)
 */
const Circle_7: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72-384l-144 0-24 0 0 48 24 0 106.2 0L196.3 375.8l-3.9 8.2 53 0L349.7 162.2l2.3-4.9 0-29.4-24 0z" />
    </Icon>
);

export default Circle_7;