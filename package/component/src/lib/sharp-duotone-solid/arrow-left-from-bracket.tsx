
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-bracket?s=sharp-duotone-solid arrow-left-from-bracket}
 * @preview ![arrow-left-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-left-from-bracket.svg)
 */
const ArrowLeftFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 32l0 64 32 0 96 0 0 320-96 0-32 0 0 64 32 0 128 0 32 0 0-32 0-384 0-32-32 0L352 32l-32 0z" />
        <path d="M0 256l22.6-22.6 128-128 22.6-22.6L218.5 128l-22.6 22.6L122.5 224 320 224l32 0 0 64-32 0-197.5 0 73.4 73.4L218.5 384l-45.3 45.3-22.6-22.6-128-128L0 256z" />
    </Icon>
);

export default ArrowLeftFromBracket;