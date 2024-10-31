
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-bracket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-bracket?s=sharp-light arrow-left-to-bracket}
 * @preview ![arrow-left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-left-to-bracket.svg)
 */
const ArrowLeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M164.7 267.3L153.4 256l11.3-11.3 128-128L304 105.4 326.6 128l-11.3 11.3L214.6 240 496 240l16 0 0 32-16 0-281.4 0L315.3 372.7 326.6 384 304 406.6l-11.3-11.3-128-128zM176 448l16 0 0 32-16 0L16 480 0 480l0-16L0 48 0 32l16 0 160 0 16 0 0 32-16 0L32 64l0 384 144 0z" />
    </Icon>
);

export default ArrowLeftToBracket;