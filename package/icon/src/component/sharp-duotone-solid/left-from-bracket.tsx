
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-from-bracket?s=sharp-duotone-solid left-from-bracket}
 * @preview ![left-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/left-from-bracket.svg)
 */
const LeftFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 32l0 64 32 0 96 0 0 320-96 0-32 0 0 64 32 0 128 0 32 0 0-32 0-384 0-32-32 0L352 32l-32 0z" />
        <path d="M0 256L160 416l32 0 0-96 160 0 0-128-160 0 0-96-32 0L0 256z" />
    </Icon>
);

export default LeftFromBracket;