
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left?s=sharp-thin arrow-turn-left}
 * @preview ![arrow-turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-turn-left.svg)
 */
const ArrowTurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 472l0 8 16 0 0-8 0-248 0-8-8 0L27.3 216 157.7 85.7l5.7-5.7L152 68.7l-5.7 5.7-144 144L-3.3 224l5.7 5.7 144 144 5.7 5.7L163.3 368l-5.7-5.7L27.3 232 496 232l0 240z" />
    </Icon>
);

export default ArrowTurnLeft;