
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=sharp-solid arrow-turn-right}
 * @preview ![arrow-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-turn-right.svg)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M358.6 374.6L336 397.3 290.7 352l22.6-22.6L386.7 256 64 256l0 192 0 32L0 480l0-32L0 224l0-32 32 0 354.7 0-73.4-73.4L290.7 96 336 50.7l22.6 22.6 128 128L509.3 224l-22.6 22.6-128 128z" />
    </Icon>
);

export default ArrowTurnRight;