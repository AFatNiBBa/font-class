
import { Icon } from "../../index";

/**
 * A component that renders the `square-envelope` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-envelope?s=sharp-light square-envelope}
 * @preview ![square-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-envelope.svg)
 */
const SquareEnvelope: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zM352 160l0 28.9L224 255.5 96 188.9 96 160l256 0zm0 65l0 127L96 352l0-127 120.6 62.7 7.4 3.8 7.4-3.8L352 225zM96 128l-32 0 0 32 0 192 0 32 32 0 256 0 32 0 0-32 0-192 0-32-32 0L96 128z" />
    </Icon>
);

export default SquareEnvelope;