
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=sharp-light arrow-turn-right}
 * @preview ![arrow-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-turn-right.svg)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M379.3 363.3L368 374.6 345.4 352l11.3-11.3L457.4 240 32 240l0 224 0 16L0 480l0-16L0 224l0-16 16 0 441.4 0L356.7 107.3 345.4 96 368 73.4l11.3 11.3 128 128L518.6 224l-11.3 11.3-128 128z" />
    </Icon>
);

export default ArrowTurnRight;