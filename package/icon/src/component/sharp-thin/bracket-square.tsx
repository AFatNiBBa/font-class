
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=sharp-thin bracket-square}
 * @preview ![bracket-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bracket-square.svg)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M0 32l8 0 144 0 8 0 0 16-8 0L16 48l0 416 136 0 8 0 0 16-8 0L8 480l-8 0 0-8L0 40l0-8z" />
    </Icon>
);

export default BracketSquare;