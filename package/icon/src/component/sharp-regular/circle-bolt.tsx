
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bolt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bolt?s=sharp-regular circle-bolt}
 * @preview ![circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-bolt.svg)
 */
const CircleBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm232 16l-88 0 0-24L320 112 280 240l88 0 0 24L192 400l40-128z" />
    </Icon>
);

export default CircleBolt;