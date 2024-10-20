
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=sharp-solid arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-turn-down-right.svg)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l0-32L0 32 0 64 0 288l0 32 32 0 354.7 0-73.4 73.4L290.7 416 336 461.3l22.6-22.6 128-128L509.3 288l-22.6-22.6-128-128L336 114.7 290.7 160l22.6 22.6L386.7 256 64 256 64 64z" />
    </Icon>
);

export default ArrowTurnDownRight;