
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=sharp-thin arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-turn-down-right.svg)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40l0-8L0 32l0 8L0 288l0 8 8 0 476.7 0L354.3 426.3l-5.7 5.7L360 443.3l5.7-5.7 144-144 5.7-5.7-5.7-5.7-144-144-5.7-5.7L348.7 144l5.7 5.7L484.7 280 16 280 16 40z" />
    </Icon>
);

export default ArrowTurnDownRight;