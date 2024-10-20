
import { Icon } from "../../index";

/**
 * A component that renders the `square-f` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-f?s=sharp-thin square-f}
 * @preview ![square-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-f.svg)
 */
const SquareF: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm136 96l176 0 8 0 0 16-8 0-168 0 0 96 136 0 8 0 0 16-8 0-136 0 0 120 0 8-16 0 0-8 0-128 0-112 0-8 8 0z" />
    </Icon>
);

export default SquareF;