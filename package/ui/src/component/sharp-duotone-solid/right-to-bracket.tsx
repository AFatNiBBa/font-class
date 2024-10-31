
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-bracket?s=sharp-duotone-solid right-to-bracket}
 * @preview ![right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/right-to-bracket.svg)
 */
const RightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 32l0 64 32 0 96 0 0 320-96 0-32 0 0 64 32 0 128 0 32 0 0-32 0-384 0-32-32 0L352 32l-32 0z" />
        <path d="M352 256L192 96l-32 0 0 96L0 192 0 320l160 0 0 96 32 0L352 256z" />
    </Icon>
);

export default RightToBracket;