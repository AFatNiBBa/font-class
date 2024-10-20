
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-down-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-left?s=sharp-duotone-solid arrow-turn-down-left}
 * @preview ![arrow-turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-turn-down-left.svg)
 */
const ArrowTurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M90.5 288c10.7 10.7 21.3 21.3 32 32l354.7 0 32 0 0-32 0-224 0-32-64 0 0 32 0 192-322.7 0-32 32z" />
        <path d="M173.3 114.7l-22.6 22.6-128 128L0 288l22.6 22.6 128 128 22.6 22.6L218.5 416l-22.6-22.6L90.5 288 195.9 182.6 218.5 160l-45.3-45.3z" />
    </Icon>
);

export default ArrowTurnDownLeft;