
import { Icon } from "../../index";

/**
 * A component that renders the `square-ring` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ring?s=sharp-light square-ring}
 * @preview ![square-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-ring.svg)
 */
const SquareRing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zm192 96a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 288a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM160 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm160 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default SquareRing;