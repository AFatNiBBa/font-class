
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=sharp-light arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-turn-down-right.svg)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48l0-16L0 32 0 48 0 288l0 16 16 0 441.4 0L356.7 404.7 345.4 416 368 438.6l11.3-11.3 128-128L518.6 288l-11.3-11.3-128-128L368 137.4 345.4 160l11.3 11.3L457.4 272 32 272 32 48z" />
    </Icon>
);

export default ArrowTurnDownRight;