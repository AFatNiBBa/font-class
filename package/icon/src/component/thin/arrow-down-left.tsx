
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=thin arrow-down-left}
 * @preview ![arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-down-left.svg)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M40 416c-4.4 0-8-3.6-8-8l0-240c0-4.4 3.6-8 8-8s8 3.6 8 8l0 220.7L338.3 98.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L59.3 400 280 400c4.4 0 8 3.6 8 8s-3.6 8-8 8L40 416z" />
    </Icon>
);

export default ArrowDownLeft;