
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-left?s=solid arrow-turn-down-left}
 * @preview ![arrow-turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-turn-down-left.svg)
 */
const ArrowTurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 160c0 53-43 96-96 96l-306.7 0 73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 256 416 256c17.7 0 32-14.3 32-32l0-160z" />
    </Icon>
);

export default ArrowTurnDownLeft;