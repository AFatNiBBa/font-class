
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left?s=sharp-solid arrow-turn-left}
 * @preview ![arrow-turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-turn-left.svg)
 */
const ArrowTurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M150.6 374.6l22.6 22.6L218.5 352l-22.6-22.6L122.5 256l322.7 0 0 192 0 32 64 0 0-32 0-224 0-32-32 0-354.7 0 73.4-73.4L218.5 96 173.2 50.7 150.6 73.4l-128 128L0 224l22.6 22.6 128 128z" />
    </Icon>
);

export default ArrowTurnLeft;