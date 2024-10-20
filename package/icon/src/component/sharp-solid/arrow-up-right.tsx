
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=sharp-solid arrow-up-right}
 * @preview ![arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-right.svg)
 */
const ArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 96l32 0 0 32 0 224 0 32-64 0 0-32 0-146.7L86.6 406.6 64 429.3 18.7 384l22.6-22.6L242.7 160 96 160l-32 0 0-64 32 0 224 0z" />
    </Icon>
);

export default ArrowUpRight;