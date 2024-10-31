
import { Icon } from "../../index";

/**
 * A component that renders the `square-x` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-x?s=sharp-light square-x}
 * @preview ![square-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-x.svg)
 */
const SquareX: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm109 96l39.9 0L224 229.2 299.2 128l39.9 0L243.9 256 339 384l-39.9 0L224 282.8 148.8 384 109 384l95.1-128L109 128z" />
    </Icon>
);

export default SquareX;