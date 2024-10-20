
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=sharp-thin arrow-up-left}
 * @preview ![arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-up-left.svg)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M40 96l-8 0 0 8 0 240 0 8 16 0 0-8 0-220.7L330.3 405.7l5.7 5.7L347.3 400l-5.7-5.7L59.3 112 280 112l8 0 0-16-8 0L40 96z" />
    </Icon>
);

export default ArrowUpLeft;