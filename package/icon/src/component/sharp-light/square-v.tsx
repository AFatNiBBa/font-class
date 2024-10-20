
import { Icon } from "../../index";

/**
 * A component that renders the `square-v` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-v?s=sharp-light square-v}
 * @preview ![square-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-v.svg)
 */
const SquareV: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM209.5 390.8L93.2 144l35.4 0L224 346.5 319.5 144l35.4 0L238.5 390.8l-4.3 9.2-20.3 0-4.3-9.2z" />
    </Icon>
);

export default SquareV;