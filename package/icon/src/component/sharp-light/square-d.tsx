
import { Icon } from "../../index";

/**
 * A component that renders the `square-d` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-d?s=sharp-light square-d}
 * @preview ![square-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-d.svg)
 */
const SquareD: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm144 96l80 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-80 0-16 0 0-16 0-224 0-16 16 0zm16 224l64 0c53 0 96-43 96-96s-43-96-96-96l-64 0 0 192z" />
    </Icon>
);

export default SquareD;