
import { Icon } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=sharp-regular caret-right}
 * @preview ![caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/caret-right.svg)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M64 144l0-48 48 0L256 256 112 416l-48 0 0-48 0-224zm48 200.2L191.4 256 112 167.8l0 176.5z" />
    </Icon>
);

export default CaretRight;