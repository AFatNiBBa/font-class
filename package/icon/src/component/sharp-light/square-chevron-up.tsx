
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-up?s=sharp-light square-chevron-up}
 * @preview ![square-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-chevron-up.svg)
 */
const SquareChevronUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM235.3 164.7l112 112L358.6 288 336 310.6l-11.3-11.3L224 198.6 123.3 299.3 112 310.6 89.4 288l11.3-11.3 112-112L224 153.4l11.3 11.3z" />
    </Icon>
);

export default SquareChevronUp;