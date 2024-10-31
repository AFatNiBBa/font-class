
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-bracket?s=sharp-solid arrow-left-to-bracket}
 * @preview ![arrow-left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-left-to-bracket.svg)
 */
const ArrowLeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 96L64 96l0 320 96 0 32 0 0 64-32 0L32 480 0 480l0-32L0 64 0 32l32 0 128 0 32 0 0 64-32 0zm9.4 182.6L146.7 256l22.6-22.6 128-128L320 82.7 365.3 128l-22.6 22.6L269.3 224 480 224l32 0 0 64-32 0-210.7 0 73.4 73.4L365.3 384 320 429.3l-22.6-22.6-128-128z" />
    </Icon>
);

export default ArrowLeftToBracket;