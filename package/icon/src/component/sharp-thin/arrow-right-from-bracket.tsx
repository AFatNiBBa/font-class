
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-bracket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-bracket?s=sharp-thin arrow-right-from-bracket}
 * @preview ![arrow-right-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-right-from-bracket.svg)
 */
const ArrowRightFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M501.7 261.7l5.7-5.7-5.7-5.7-136-136-5.7-5.7L348.7 120l5.7 5.7L476.7 248 168 248l-8 0 0 16 8 0 308.7 0L354.3 386.3l-5.7 5.7L360 403.3l5.7-5.7 136-136zM184 48l8 0 0-16-8 0L8 32 0 32l0 8L0 472l0 8 8 0 176 0 8 0 0-16-8 0L16 464 16 48l168 0z" />
    </Icon>
);

export default ArrowRightFromBracket;