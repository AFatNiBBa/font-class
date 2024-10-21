
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-left?s=sharp-light arrow-turn-down-left}
 * @preview ![arrow-turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-turn-down-left.svg)
 */
const ArrowTurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 48l0-16 32 0 0 16 0 240 0 16-16 0L54.6 304 155.3 404.7 166.6 416 144 438.6l-11.3-11.3-128-128L-6.6 288 4.7 276.7l128-128L144 137.4 166.6 160l-11.3 11.3L54.6 272 480 272l0-224z" />
    </Icon>
);

export default ArrowTurnDownLeft;