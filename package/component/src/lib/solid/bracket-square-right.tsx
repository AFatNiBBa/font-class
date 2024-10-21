
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square-right?s=solid bracket-square-right}
 * @preview ![bracket-square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bracket-square-right.svg)
 */
const BracketSquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M192 96c0-35.3-28.7-64-64-64L64 32C46.3 32 32 46.3 32 64s14.3 32 32 32l64 0 0 320-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c35.3 0 64-28.7 64-64l0-320z" />
    </Icon>
);

export default BracketSquareRight;