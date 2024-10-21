
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=sharp-duotone-solid arrow-turn-right}
 * @preview ![arrow-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-turn-right.svg)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192l0 32L0 448l0 32 64 0 0-32 0-192 322.7 0 32-32-32-32L32 192 0 192z" />
        <path d="M336 397.3l22.6-22.6 128-128L509.3 224l-22.6-22.6-128-128L336 50.7 290.7 96l22.6 22.6L418.7 224 313.4 329.4 290.7 352 336 397.3z" />
    </Icon>
);

export default ArrowTurnRight;