
import { Icon } from "../../index";

/**
 * A component that renders the `square-y` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-y?s=sharp-light square-y}
 * @preview ![square-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-y.svg)
 */
const SquareY: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM208 293.5L92.2 144l40.5 0L224 261.9 315.4 144l40.5 0L240 293.5l0 90.5 0 16-32 0 0-16 0-90.5z" />
    </Icon>
);

export default SquareY;