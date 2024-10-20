
import { Icon } from "../../index";

/**
 * A component that renders the `circle-play` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-play?s=sharp-light circle-play}
 * @preview ![circle-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-play.svg)
 */
const CirclePlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM208 364.3L176 384l0-37.6 0-180.9 0-37.6 32 19.7 145.5 89.5L384 256l-30.5 18.8L208 364.3zM322.9 256L208 185.3l0 141.5L322.9 256z" />
    </Icon>
);

export default CirclePlay;