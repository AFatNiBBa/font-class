
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-bracket?s=sharp-duotone-solid up-to-bracket}
 * @preview ![up-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-to-bracket.svg)
 */
const UpToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 160l0 32 64 0 0-32 0-96 320 0 0 96 0 32 64 0 0-32 0-128 0-32L416 0 32 0 0 0z" />
        <path d="M224 160L64 320l0 32 96 0 0 160 128 0 0-160 96 0 0-32L224 160z" />
    </Icon>
);

export default UpToBracket;