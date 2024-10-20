
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=sharp-thin arrow-down-right}
 * @preview ![arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-down-right.svg)
 */
const ArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M344 416l8 0 0-8 0-240 0-8-16 0 0 8 0 220.7L53.7 106.3 48 100.7 36.7 112l5.7 5.7L324.7 400 104 400l-8 0 0 16 8 0 240 0z" />
    </Icon>
);

export default ArrowDownRight;