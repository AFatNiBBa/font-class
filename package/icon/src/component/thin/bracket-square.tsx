
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=thin bracket-square}
 * @preview ![bracket-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bracket-square.svg)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M0 72C0 49.9 17.9 32 40 32l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L40 48C26.7 48 16 58.7 16 72l0 368c0 13.3 10.7 24 24 24l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L40 480c-22.1 0-40-17.9-40-40L0 72z" />
    </Icon>
);

export default BracketSquare;