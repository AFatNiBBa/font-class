
import { Icon } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=sharp-solid caret-right}
 * @preview ![caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/caret-right.svg)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M112 96L256 256 112 416l-48 0L64 96l48 0z" />
    </Icon>
);

export default CaretRight;