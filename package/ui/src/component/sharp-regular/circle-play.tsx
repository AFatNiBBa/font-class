
import { Icon } from "../../index";

/**
 * A component that renders the `circle-play` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-play?s=sharp-regular circle-play}
 * @preview ![circle-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-play.svg)
 */
const CirclePlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm384 0L176 384l0-256L384 256z" />
    </Icon>
);

export default CirclePlay;