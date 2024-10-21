
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-bracket?s=sharp-duotone-solid arrow-up-from-bracket}
 * @preview ![arrow-up-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-from-bracket.svg)
 */
const ArrowUpFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-128 0-32-64 0 0 32 0 96L64 448l0-96 0-32L0 320z" />
        <path d="M224 2.7l22.6 22.6 128 128L397.3 176 352 221.3l-22.6-22.6L256 125.3 256 320l0 32-64 0 0-32 0-194.7-73.4 73.4L96 221.3 50.7 176l22.6-22.6 128-128L224 2.7z" />
    </Icon>
);

export default ArrowUpFromBracket;