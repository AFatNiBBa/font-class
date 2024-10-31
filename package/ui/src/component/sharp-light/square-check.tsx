
import { Icon } from "../../index";

/**
 * A component that renders the `square-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-check?s=sharp-light square-check}
 * @preview ![square-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-check.svg)
 */
const SquareCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM331.3 203.3l-128 128L192 342.6l-11.3-11.3-64-64L105.4 256 128 233.4l11.3 11.3L192 297.4 308.7 180.7 320 169.4 342.6 192l-11.3 11.3z" />
    </Icon>
);

export default SquareCheck;