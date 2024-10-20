
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=thin arrow-down-long}
 * @preview ![arrow-down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-down-long.svg)
 */
const ArrowDownLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M186.3 509.7c3.1 3.1 8.2 3.1 11.3 0l152-152c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L200 484.7 200 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 476.7L45.7 346.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l152 152z" />
    </Icon>
);

export default ArrowDownLong;