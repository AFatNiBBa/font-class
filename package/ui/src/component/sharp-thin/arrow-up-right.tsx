
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=sharp-thin arrow-up-right}
 * @preview ![arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-up-right.svg)
 */
const ArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M344 96l8 0 0 8 0 240 0 8-16 0 0-8 0-220.7L53.7 405.7 48 411.3 36.7 400l5.7-5.7L324.7 112 104 112l-8 0 0-16 8 0 240 0z" />
    </Icon>
);

export default ArrowUpRight;