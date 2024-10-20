
import { Icon } from "../../index";

/**
 * A component that renders the `square-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-right?s=sharp-thin square-right}
 * @preview ![square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-right.svg)
 */
const SquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48L16 48l0 416 416 0 0-416zm16-16l0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0zM224 224l-112 0 0 64 112 0 16 0 0 16 0 64 1.4 0 112-112-112-112-1.4 0 0 64 0 16-16 0zm140.7 20.7L376 256l-11.3 11.3L248 384l-8 0-16 0 0-16 0-48 0-16-16 0-96 0-16 0 0-16 0-64 0-16 16 0 96 0 16 0 0-16 0-48 0-16 16 0 8 0L364.7 244.7z" />
    </Icon>
);

export default SquareRight;