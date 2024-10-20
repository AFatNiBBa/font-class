
import { Icon } from "../../index";

/**
 * A component that renders the `square-j` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-j?s=sharp-thin square-j}
 * @preview ![square-j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-j.svg)
 */
const SquareJ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM304 136l0 160c0 48.6-39.4 88-88 88s-88-39.4-88-88l0-16 0-8 16 0 0 8 0 16c0 39.8 32.2 72 72 72s72-32.2 72-72l0-160 0-8 16 0 0 8z" />
    </Icon>
);

export default SquareJ;