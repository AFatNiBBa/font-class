
import { Icon } from "../../index";

/**
 * A component that renders the `square-j` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-j?s=sharp-light square-j}
 * @preview ![square-j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-j.svg)
 */
const SquareJ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM304 144l0 144c0 53-43 96-96 96s-96-43-96-96l0-16 0-16 32 0 0 16 0 16c0 35.3 28.7 64 64 64s64-28.7 64-64l0-144 0-16 32 0 0 16z" />
    </Icon>
);

export default SquareJ;