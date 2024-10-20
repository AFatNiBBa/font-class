
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-down-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-left?s=duotone arrow-turn-down-left}
 * @preview ![arrow-turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-turn-down-left.svg)
 */
const ArrowTurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M77.3 288l32 32L416 320c53 0 96-43 96-96l0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160c0 17.7-14.3 32-32 32l-306.7 0-32 32z" />
        <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 288 182.6 182.6c12.5-12.5 12.5-32.8 0-45.3z" />
    </Icon>
);

export default ArrowTurnDownLeft;