
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square-right?s=sharp-solid bracket-square-right}
 * @preview ![bracket-square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bracket-square-right.svg)
 */
const BracketSquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M192 32l-32 0L64 32 32 32l0 64 32 0 64 0 0 320-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-384 0-32z" />
    </Icon>
);

export default BracketSquareRight;