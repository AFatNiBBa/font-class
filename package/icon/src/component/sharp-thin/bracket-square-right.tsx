
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square-right?s=sharp-thin bracket-square-right}
 * @preview ![bracket-square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bracket-square-right.svg)
 */
const BracketSquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M192 32l-8 0L40 32l-8 0 0 16 8 0 136 0 0 416L40 464l-8 0 0 16 8 0 144 0 8 0 0-8 0-432 0-8z" />
    </Icon>
);

export default BracketSquareRight;