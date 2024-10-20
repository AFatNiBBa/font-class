
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=duotone arrow-turn-right}
 * @preview ![arrow-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-turn-right.svg)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7 14.3-32 32-32l306.7 0 32-32-32-32L96 192c-53 0-96 43-96 96z" />
        <path d="M329.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 329.4 329.4c-12.5 12.5-12.5 32.8 0 45.3z" />
    </Icon>
);

export default ArrowTurnRight;