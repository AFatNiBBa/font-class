
import { Icon } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=sharp-thin caret-right}
 * @preview ![caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/caret-right.svg)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M104.9 112L234.5 256 104.9 400 80 400l0-288 24.9 0zM256 256L112 96 80 96 64 96l0 16 0 288 0 16 16 0 32 0L256 256z" />
    </Icon>
);

export default CaretRight;