
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left?s=sharp-light arrow-turn-left}
 * @preview ![arrow-turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-turn-left.svg)
 */
const ArrowTurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 464l0 16 32 0 0-16 0-240 0-16-16 0L54.6 208 155.3 107.3 166.6 96 144 73.4 132.7 84.7l-128 128L-6.6 224 4.7 235.3l128 128L144 374.6 166.6 352l-11.3-11.3L54.6 240 480 240l0 224z" />
    </Icon>
);

export default ArrowTurnLeft;