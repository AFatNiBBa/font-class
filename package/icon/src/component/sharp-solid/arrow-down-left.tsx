
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=sharp-solid arrow-down-left}
 * @preview ![arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down-left.svg)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 416l-32 0 0-32 0-224 0-32 64 0 0 32 0 146.7L297.4 105.4 320 82.7 365.3 128l-22.6 22.6L141.3 352 288 352l32 0 0 64-32 0L64 416z" />
    </Icon>
);

export default ArrowDownLeft;