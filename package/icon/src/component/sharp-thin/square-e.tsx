
import { Icon } from "../../index";

/**
 * A component that renders the `square-e` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-e?s=sharp-thin square-e}
 * @preview ![square-e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-e.svg)
 */
const SquareE: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm136 96l176 0 8 0 0 16-8 0-168 0 0 104 128 0 8 0 0 16-8 0-128 0 0 104 168 0 8 0 0 16-8 0-176 0-8 0 0-8 0-120 0-120 0-8 8 0z" />
    </Icon>
);

export default SquareE;