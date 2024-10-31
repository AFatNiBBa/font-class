
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-right?s=sharp-duotone-solid turn-right}
 * @preview ![turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turn-right.svg)
 */
const TurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 176l320 0 0 96L96 272l0 208L0 480 0 176z" />
        <path d="M352 64L512 224 352 384l-32 0 0-320 32 0z" />
    </Icon>
);

export default TurnRight;