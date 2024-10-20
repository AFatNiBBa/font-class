
import { Icon } from "../../index";

/**
 * A component that renders the `square-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-minus?s=sharp-thin square-minus}
 * @preview ![square-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-minus.svg)
 */
const SquareMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM120 264l0-16 208 0 0 16-208 0z" />
    </Icon>
);

export default SquareMinus;