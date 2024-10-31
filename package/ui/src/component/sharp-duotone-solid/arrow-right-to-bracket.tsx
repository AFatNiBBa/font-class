
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-bracket?s=sharp-duotone-solid arrow-right-to-bracket}
 * @preview ![arrow-right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right-to-bracket.svg)
 */
const ArrowRightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 32l0 64 32 0 96 0 0 320-96 0-32 0 0 64 32 0 128 0 32 0 0-32 0-384 0-32-32 0L352 32l-32 0z" />
        <path d="M365.3 256l-22.6 22.6-128 128L192 429.3 146.7 384l22.6-22.6L242.7 288 32 288 0 288l0-64 32 0 210.7 0-73.4-73.4L146.7 128 192 82.7l22.6 22.6 128 128L365.3 256z" />
    </Icon>
);

export default ArrowRightToBracket;