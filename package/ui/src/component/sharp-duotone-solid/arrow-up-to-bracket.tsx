
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-bracket?s=sharp-duotone-solid arrow-up-to-bracket}
 * @preview ![arrow-up-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-to-bracket.svg)
 */
const ArrowUpToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 160l0 32 64 0 0-32 0-96 320 0 0 96 0 32 64 0 0-32 0-128 0-32L416 0 32 0 0 0z" />
        <path d="M224 146.7l-22.6 22.6-128 128L50.7 320 96 365.3l22.6-22.6L192 269.3 192 480l0 32 64 0 0-32 0-210.7 73.4 73.4L352 365.3 397.3 320l-22.6-22.6-128-128L224 146.7z" />
    </Icon>
);

export default ArrowUpToBracket;