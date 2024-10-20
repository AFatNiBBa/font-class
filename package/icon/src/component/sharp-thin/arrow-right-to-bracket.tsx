
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-bracket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-bracket?s=sharp-thin arrow-right-to-bracket}
 * @preview ![arrow-right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-right-to-bracket.svg)
 */
const ArrowRightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M349.7 250.3l5.7 5.7-5.7 5.7-136 136-5.7 5.7L196.7 392l5.7-5.7L324.7 264 8 264l-8 0 0-16 8 0 316.7 0L202.3 125.7l-5.7-5.7L208 108.7l5.7 5.7 136 136zM328 464l168 0 0-416L328 48l-8 0 0-16 8 0 176 0 8 0 0 8 0 432 0 8-8 0-176 0-8 0 0-16 8 0z" />
    </Icon>
);

export default ArrowRightToBracket;