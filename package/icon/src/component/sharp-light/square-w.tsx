
import { Icon } from "../../index";

/**
 * A component that renders the `square-w` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-w?s=sharp-light square-w}
 * @preview ![square-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-w.svg)
 */
const SquareW: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM72.6 144l33.6 0 54 171.2 48.7-152 6.1-19.1 18.2 0 6.1 19.1 48.7 152 54-171.2 33.6 0L303.3 372.8 299.7 384l-23.4 0-3.6-11.1L224 220.5 175.2 372.9 171.7 384l-23.4 0-3.5-11.2L72.6 144z" />
    </Icon>
);

export default SquareW;