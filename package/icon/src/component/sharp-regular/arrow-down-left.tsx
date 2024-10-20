
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=sharp-regular arrow-down-left}
 * @preview ![arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-down-left.svg)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M56 416l-24 0 0-24 0-240 0-24 48 0 0 24 0 182.1L303 111l17-17L353.9 128l-17 17-223 223L296 368l24 0 0 48-24 0L56 416z" />
    </Icon>
);

export default ArrowDownLeft;