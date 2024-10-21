
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=duotone bracket-square}
 * @preview ![bracket-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bracket-square.svg)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 96l0 320 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default BracketSquare;