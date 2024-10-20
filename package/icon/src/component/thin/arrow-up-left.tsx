
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=thin arrow-up-left}
 * @preview ![arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-up-left.svg)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M40 96c-4.4 0-8 3.6-8 8l0 240c0 4.4 3.6 8 8 8s8-3.6 8-8l0-220.7L338.3 413.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L59.3 112 280 112c4.4 0 8-3.6 8-8s-3.6-8-8-8L40 96z" />
    </Icon>
);

export default ArrowUpLeft;