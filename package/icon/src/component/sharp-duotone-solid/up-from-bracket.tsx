
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-bracket?s=sharp-duotone-solid up-from-bracket}
 * @preview ![up-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-from-bracket.svg)
 */
const UpFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-128 0-32-64 0 0 32 0 96L64 448l0-96 0-32L0 320z" />
        <path d="M224 0L64 160l0 32 96 0 0 160 128 0 0-160 96 0 0-32L224 0z" />
    </Icon>
);

export default UpFromBracket;