
import { Icon } from "../../index";

/**
 * A component that renders the `square-o` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-o?s=sharp-thin square-o}
 * @preview ![square-o](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-o.svg)
 */
const SquareO: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM112 256a112 112 0 1 0 224 0 112 112 0 1 0 -224 0zM224 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256z" />
    </Icon>
);

export default SquareO;