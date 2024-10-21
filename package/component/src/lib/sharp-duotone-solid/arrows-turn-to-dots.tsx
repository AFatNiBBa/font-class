
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-turn-to-dots` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-turn-to-dots?s=sharp-duotone-solid arrows-turn-to-dots}
 * @preview ![arrows-turn-to-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-turn-to-dots.svg)
 */
const ArrowsTurnToDots: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352l0 32 0 96 0 32 64 0 0-32 0-64 162.7 0-25.4 25.4L178.7 464 224 509.3l22.6-22.6 80-80L349.3 384l-22.6-22.6-80-80L224 258.7 178.7 304l22.6 22.6L226.7 352 32 352 0 352zm384 32a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M265.4 25.4L288 2.7 333.3 48 310.6 70.6 285.3 96 480 96l32 0 0 32 0 96 0 32-64 0 0-32 0-64-162.7 0 25.4 25.4L333.3 208 288 253.3l-22.6-22.6-80-80L162.7 128l22.6-22.6 80-80zM64 192A64 64 0 1 1 64 64a64 64 0 1 1 0 128z" />
    </Icon>
);

export default ArrowsTurnToDots;