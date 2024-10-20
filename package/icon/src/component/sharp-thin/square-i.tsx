
import { Icon } from "../../index";

/**
 * A component that renders the `square-i` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-i?s=sharp-thin square-i}
 * @preview ![square-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-i.svg)
 */
const SquareI: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm136 96l88 0 88 0 8 0 0 16-8 0-80 0 0 224 80 0 8 0 0 16-8 0-80 0-16 0-80 0-8 0 0-16 8 0 80 0 0-224-80 0-8 0 0-16 8 0z" />
    </Icon>
);

export default SquareI;