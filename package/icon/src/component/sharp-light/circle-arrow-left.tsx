
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=sharp-light circle-arrow-left}
 * @preview ![circle-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-arrow-left.svg)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM132.7 244.7L121.4 256l11.3 11.3 96 96L240 374.6 262.6 352l-11.3-11.3L182.6 272 368 272l16 0 0-32-16 0-185.4 0 68.7-68.7L262.6 160 240 137.4l-11.3 11.3-96 96z" />
    </Icon>
);

export default CircleArrowLeft;