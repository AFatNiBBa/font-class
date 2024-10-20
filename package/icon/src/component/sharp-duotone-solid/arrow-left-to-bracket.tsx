
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-bracket?s=sharp-duotone-solid arrow-left-to-bracket}
 * @preview ![arrow-left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-left-to-bracket.svg)
 */
const ArrowLeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 128 0 32 0 0-64-32 0-96 0L64 96l96 0 32 0 0-64-32 0L32 32 0 32z" />
        <path d="M146.7 256l22.6-22.6 128-128L320 82.7 365.3 128l-22.6 22.6L269.3 224 480 224l32 0 0 64-32 0-210.7 0 73.4 73.4L365.3 384 320 429.3l-22.6-22.6-128-128L146.7 256z" />
    </Icon>
);

export default ArrowLeftToBracket;