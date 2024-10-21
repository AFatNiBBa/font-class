
import { Icon } from "../../index";

/**
 * A component that renders the `circle-play` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-play?s=sharp-solid circle-play}
 * @preview ![circle-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-play.svg)
 */
const CirclePlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM384 256L176 384l0-256L384 256z" />
    </Icon>
);

export default CirclePlay;