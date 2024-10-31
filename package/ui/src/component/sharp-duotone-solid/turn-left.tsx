
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=sharp-duotone-solid turn-left}
 * @preview ![turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turn-left.svg)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 176l0 96 224 0 0 208 96 0 0-304-320 0z" />
        <path d="M160 64L0 224 160 384l32 0 0-320-32 0z" />
    </Icon>
);

export default TurnLeft;