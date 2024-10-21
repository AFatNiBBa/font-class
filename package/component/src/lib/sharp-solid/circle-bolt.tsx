
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bolt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bolt?s=sharp-solid circle-bolt}
 * @preview ![circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-bolt.svg)
 */
const CircleBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 272l-88 0 0-24L320 112 280 240l88 0 0 24L192 400l40-128z" />
    </Icon>
);

export default CircleBolt;