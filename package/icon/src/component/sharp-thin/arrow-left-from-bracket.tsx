
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-from-bracket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-bracket?s=sharp-thin arrow-left-from-bracket}
 * @preview ![arrow-left-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-left-from-bracket.svg)
 */
const ArrowLeftFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M5.7 250.3L0 256l5.7 5.7 136 136 5.7 5.7L158.6 392l-5.7-5.7L30.6 264l308.7 0 8 0 0-16-8 0L30.6 248 153 125.7l5.7-5.7-11.3-11.3-5.7 5.7-136 136zM328 464l-8 0 0 16 8 0 176 0 8 0 0-8 0-432 0-8-8 0L328 32l-8 0 0 16 8 0 168 0 0 416-168 0z" />
    </Icon>
);

export default ArrowLeftFromBracket;