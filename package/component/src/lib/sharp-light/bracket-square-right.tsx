
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square-right?s=sharp-light bracket-square-right}
 * @preview ![bracket-square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bracket-square-right.svg)
 */
const BracketSquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M192 32l-16 0L48 32 32 32l0 32 16 0 112 0 0 384L48 448l-16 0 0 32 16 0 128 0 16 0 0-16 0-416 0-16z" />
    </Icon>
);

export default BracketSquareRight;