
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-o` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-o?s=duotone square-o}
 * @preview ![square-o](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-o.svg)
 */
const SquareO: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM352 256A128 128 0 1 1 96 256a128 128 0 1 1 256 0zm-208 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M224 176a80 80 0 1 0 0 160 80 80 0 1 0 0-160zm128 80A128 128 0 1 1 96 256a128 128 0 1 1 256 0z" />
    </Icon>
);

export default SquareO;