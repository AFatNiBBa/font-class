
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-bracket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-bracket?s=sharp-light arrow-right-to-bracket}
 * @preview ![arrow-right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-right-to-bracket.svg)
 */
const ArrowRightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M347.3 267.3L358.6 256l-11.3-11.3-128-128L208 105.4 185.4 128l11.3 11.3L297.4 240 16 240 0 240l0 32 16 0 281.4 0L196.7 372.7 185.4 384 208 406.6l11.3-11.3 128-128zM336 448l-16 0 0 32 16 0 160 0 16 0 0-16 0-416 0-16-16 0L336 32l-16 0 0 32 16 0 144 0 0 384-144 0z" />
    </Icon>
);

export default ArrowRightToBracket;