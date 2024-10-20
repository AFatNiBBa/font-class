
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=sharp-regular bracket-square}
 * @preview ![bracket-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bracket-square.svg)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M0 32l24 0 96 0 24 0 0 48-24 0L48 80l0 352 72 0 24 0 0 48-24 0-96 0L0 480l0-24L0 56 0 32z" />
    </Icon>
);

export default BracketSquare;