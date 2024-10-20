
import { Icon } from "../../index";

/**
 * A component that renders the `square-exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-exclamation?s=sharp-thin square-exclamation}
 * @preview ![square-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-exclamation.svg)
 */
const SquareExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm232 96l0 8 0 160 0 8-16 0 0-8 0-160 0-8 16 0zM208 336l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default SquareExclamation;