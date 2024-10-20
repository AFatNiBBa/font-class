
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=sharp-duotone-solid arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-turn-down-right.svg)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 288l0 32 32 0 354.7 0 32-32c-10.7-10.7-21.3-21.3-32-32L64 256 64 64l0-32L0 32z" />
        <path d="M336 114.7l22.6 22.6 128 128L509.3 288l-22.6 22.6-128 128L336 461.3 290.7 416l22.6-22.6L418.7 288 313.4 182.6 290.7 160 336 114.7z" />
    </Icon>
);

export default ArrowTurnDownRight;