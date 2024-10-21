
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=sharp-light brackets-square}
 * @preview ![brackets-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/brackets-square.svg)
 */
const BracketsSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 32L0 32 0 48 0 464l0 16 16 0 128 0 16 0 0-32-16 0L32 448 32 64l112 0 16 0 0-32-16 0L16 32zm416 0L304 32l-16 0 0 32 16 0 112 0 0 384-112 0-16 0 0 32 16 0 128 0 16 0 0-16 0-416 0-16-16 0z" />
    </Icon>
);

export default BracketsSquare;