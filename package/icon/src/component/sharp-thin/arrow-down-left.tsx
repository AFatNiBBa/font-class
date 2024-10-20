
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=sharp-thin arrow-down-left}
 * @preview ![arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-down-left.svg)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M40 416l-8 0 0-8 0-240 0-8 16 0 0 8 0 220.7L330.3 106.3l5.7-5.7L347.3 112l-5.7 5.7L59.3 400 280 400l8 0 0 16-8 0L40 416z" />
    </Icon>
);

export default ArrowDownLeft;