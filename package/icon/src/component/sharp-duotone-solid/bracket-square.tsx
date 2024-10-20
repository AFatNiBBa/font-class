
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=sharp-duotone-solid bracket-square}
 * @preview ![bracket-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bracket-square.svg)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 96 0 32 0 0 64-32 0L64 96l0 320 64 0 32 0 0 64-32 0-96 0L0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default BracketSquare;