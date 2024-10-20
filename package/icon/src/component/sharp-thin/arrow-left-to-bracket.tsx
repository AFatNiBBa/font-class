
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-bracket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-bracket?s=sharp-thin arrow-left-to-bracket}
 * @preview ![arrow-left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-left-to-bracket.svg)
 */
const ArrowLeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M162.3 250.3l-5.7 5.7 5.7 5.7 136 136 5.7 5.7L315.3 392l-5.7-5.7L187.3 264 504 264l8 0 0-16-8 0-316.7 0L309.7 125.7l5.7-5.7L304 108.7l-5.7 5.7-136 136zM184 464L16 464 16 48l168 0 8 0 0-16-8 0L8 32 0 32l0 8L0 472l0 8 8 0 176 0 8 0 0-16-8 0z" />
    </Icon>
);

export default ArrowLeftToBracket;