
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-to-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-bracket?s=duotone arrow-up-to-bracket}
 * @preview ![arrow-up-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-to-bracket.svg)
 */
const ArrowUpToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-53-43-96-96-96L96 0C43 0 0 43 0 96z" />
        <path d="M246.6 169.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 269.3 192 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
    </Icon>
);

export default ArrowUpToBracket;