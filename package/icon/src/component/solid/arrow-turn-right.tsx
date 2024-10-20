
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=solid arrow-turn-right}
 * @preview ![arrow-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-turn-right.svg)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M374.6 374.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 256 96 256c-17.7 0-32 14.3-32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 288c0-53 43-96 96-96l306.7 0-73.4-73.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3l-128 128z" />
    </Icon>
);

export default ArrowTurnRight;