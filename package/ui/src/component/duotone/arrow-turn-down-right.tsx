
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=duotone arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-turn-down-right.svg)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 224c0 53 43 96 96 96l306.7 0 32-32-32-32L96 256c-17.7 0-32-14.3-32-32L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
        <path d="M329.4 137.4c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288 329.4 182.6c-12.5-12.5-12.5-32.8 0-45.3z" />
    </Icon>
);

export default ArrowTurnDownRight;