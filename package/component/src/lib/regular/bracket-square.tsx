
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=regular bracket-square}
 * @preview ![bracket-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bracket-square.svg)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M0 88C0 57.1 25.1 32 56 32l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 80c-4.4 0-8 3.6-8 8l0 336c0 4.4 3.6 8 8 8l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-30.9 0-56-25.1-56-56L0 88z" />
    </Icon>
);

export default BracketSquare;