
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-left?s=sharp-thin arrow-turn-down-left}
 * @preview ![arrow-turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-turn-down-left.svg)
 */
const ArrowTurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 40l0-8 16 0 0 8 0 248 0 8-8 0L27.3 296 157.7 426.3l5.7 5.7L152 443.3l-5.7-5.7-144-144L-3.3 288l5.7-5.7 144-144 5.7-5.7L163.3 144l-5.7 5.7L27.3 280 496 280l0-240z" />
    </Icon>
);

export default ArrowTurnDownLeft;