
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-right?s=sharp-thin square-arrow-right}
 * @preview ![square-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-arrow-right.svg)
 */
const SquareArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48L16 48l0 416 416 0 0-416zm16-16l0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0zM349.7 261.7l-104 104-5.7 5.7L228.7 360l5.7-5.7L324.7 264 104 264l-8 0 0-16 8 0 220.7 0-90.3-90.3-5.7-5.7L240 140.7l5.7 5.7 104 104 5.7 5.7-5.7 5.7z" />
    </Icon>
);

export default SquareArrowRight;