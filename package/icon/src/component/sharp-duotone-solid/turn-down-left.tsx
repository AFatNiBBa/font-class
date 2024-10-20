
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-left?s=sharp-duotone-solid turn-down-left}
 * @preview ![turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turn-down-left.svg)
 */
const TurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 240l0 96 272 0 48 0 0-48 0-208 0-48-96 0 0 48 0 160-224 0z" />
        <path d="M160 448L0 288 160 128l32 0 0 320-32 0z" />
    </Icon>
);

export default TurnDownLeft;