
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=solid arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-turn-down-right.svg)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 224c0 53 43 96 96 96l306.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 96 256c-17.7 0-32-14.3-32-32L64 64z" />
    </Icon>
);

export default ArrowTurnDownRight;