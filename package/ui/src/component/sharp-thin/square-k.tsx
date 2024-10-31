
import { Icon } from "../../index";

/**
 * A component that renders the `square-k` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-k?s=sharp-thin square-k}
 * @preview ![square-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-k.svg)
 */
const SquareK: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm128 96l16 0 0 8 0 143.8L302.4 128l23.1 0L214.1 234.8l.4 .6L321.2 384l-19.7 0L202.4 245.9l-58.4 56 0 74.1 0 8-16 0 0-8 0-77.5L128 136l0-8z" />
    </Icon>
);

export default SquareK;