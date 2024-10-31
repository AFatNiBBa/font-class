
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=thin arrow-up-right}
 * @preview ![arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-up-right.svg)
 */
const ArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M344 96c4.4 0 8 3.6 8 8l0 240c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-220.7L45.7 413.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L324.7 112 104 112c-4.4 0-8-3.6-8-8s3.6-8 8-8l240 0z" />
    </Icon>
);

export default ArrowUpRight;