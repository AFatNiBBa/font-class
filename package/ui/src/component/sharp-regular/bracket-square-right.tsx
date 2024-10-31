
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square-right?s=sharp-regular bracket-square-right}
 * @preview ![bracket-square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bracket-square-right.svg)
 */
const BracketSquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M192 32l-24 0L72 32 48 32l0 48 24 0 72 0 0 352-72 0-24 0 0 48 24 0 96 0 24 0 0-24 0-400 0-24z" />
    </Icon>
);

export default BracketSquareRight;