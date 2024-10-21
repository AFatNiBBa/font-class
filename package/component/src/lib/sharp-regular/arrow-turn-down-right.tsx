
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=sharp-regular arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-turn-down-right.svg)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 56l0-24L0 32 0 56 0 288l0 24 24 0 394.9 0-79 79-17 17 33.9 33.9 17-17 120-120 17-17-17-17-120-120-17-17L322.9 168l17 17 79 79L48 264 48 56z" />
    </Icon>
);

export default ArrowTurnDownRight;