
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-bracket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-bracket?s=sharp-light arrow-right-from-bracket}
 * @preview ![arrow-right-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-right-from-bracket.svg)
 */
const ArrowRightFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M499.3 267.3L510.6 256l-11.3-11.3-128-128L360 105.4 337.4 128l11.3 11.3L449.4 240 176 240l-16 0 0 32 16 0 273.4 0L348.7 372.7 337.4 384 360 406.6l11.3-11.3 128-128zM176 64l16 0 0-32-16 0L16 32 0 32 0 48 0 464l0 16 16 0 160 0 16 0 0-32-16 0L32 448 32 64l144 0z" />
    </Icon>
);

export default ArrowRightFromBracket;