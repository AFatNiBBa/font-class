
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=sharp-light bracket-square}
 * @preview ![bracket-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bracket-square.svg)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M0 32l16 0 128 0 16 0 0 32-16 0L32 64l0 384 112 0 16 0 0 32-16 0L16 480 0 480l0-16L0 48 0 32z" />
    </Icon>
);

export default BracketSquare;