
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-bracket?s=sharp-solid arrow-right-to-bracket}
 * @preview ![arrow-right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-right-to-bracket.svg)
 */
const ArrowRightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 96l96 0 0 320-96 0-32 0 0 64 32 0 128 0 32 0 0-32 0-384 0-32-32 0L352 32l-32 0 0 64 32 0zm-9.4 182.6L365.3 256l-22.6-22.6-128-128L192 82.7 146.7 128l22.6 22.6L242.7 224 32 224 0 224l0 64 32 0 210.7 0-73.4 73.4L146.7 384 192 429.3l22.6-22.6 128-128z" />
    </Icon>
);

export default ArrowRightToBracket;