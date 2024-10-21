
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=sharp-thin arrow-turn-right}
 * @preview ![arrow-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-turn-right.svg)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M365.7 373.7l-5.7 5.7L348.7 368l5.7-5.7L484.7 232 16 232l0 240 0 8L0 480l0-8L0 224l0-8 8 0 476.7 0L354.3 85.7 348.7 80 360 68.7l5.7 5.7 144 144 5.7 5.7-5.7 5.7-144 144z" />
    </Icon>
);

export default ArrowTurnRight;