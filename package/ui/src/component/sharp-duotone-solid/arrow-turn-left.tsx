
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left?s=sharp-duotone-solid arrow-turn-left}
 * @preview ![arrow-turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-turn-left.svg)
 */
const ArrowTurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M90.5 224l32-32 354.7 0 32 0 0 32 0 224 0 32-64 0 0-32 0-192-322.7 0c-10.7-10.7-21.3-21.3-32-32z" />
        <path d="M173.3 397.3l-22.6-22.6-128-128L0 224l22.6-22.6 128-128 22.6-22.6L218.5 96l-22.6 22.6L90.5 224 195.9 329.4 218.5 352l-45.3 45.3z" />
    </Icon>
);

export default ArrowTurnLeft;