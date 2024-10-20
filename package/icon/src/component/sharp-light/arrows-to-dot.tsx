
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-dot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-dot?s=sharp-light arrows-to-dot}
 * @preview ![arrows-to-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrows-to-dot.svg)
 */
const ArrowsToDot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16l0-16L240 0l0 16 0 121.4L187.3 84.7 176 73.4 153.4 96l11.3 11.3 80 80L256 198.6l11.3-11.3 80-80L358.6 96 336 73.4 324.7 84.7 272 137.4 272 16zm16 240a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm70.6 160l-11.3-11.3-80-80L256 313.4l-11.3 11.3-80 80L153.4 416 176 438.6l11.3-11.3L240 374.6 240 496l0 16 32 0 0-16 0-121.4 52.7 52.7L336 438.6 358.6 416zM96 153.4L73.4 176l11.3 11.3L137.4 240 16 240 0 240l0 32 16 0 121.4 0L84.7 324.7 73.4 336 96 358.6l11.3-11.3 80-80L198.6 256l-11.3-11.3-80-80L96 153.4zm320 0l-11.3 11.3-80 80L313.4 256l11.3 11.3 80 80L416 358.6 438.6 336l-11.3-11.3L374.6 272 496 272l16 0 0-32-16 0-121.4 0 52.7-52.7L438.6 176 416 153.4z" />
    </Icon>
);

export default ArrowsToDot;