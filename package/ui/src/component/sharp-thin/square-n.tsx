
import { Icon } from "../../index";

/**
 * A component that renders the `square-n` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-n?s=sharp-thin square-n}
 * @preview ![square-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-n.svg)
 */
const SquareN: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm112 96l11.7 0 2.4 2.8L320 354.6 320 136l0-8 16 0 0 8 0 240 0 8-11.7 0-2.4-2.8L128 157.4 128 376l0 8-16 0 0-8 0-240 0-8z" />
    </Icon>
);

export default SquareN;