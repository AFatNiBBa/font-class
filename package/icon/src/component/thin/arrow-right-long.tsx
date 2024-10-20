
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=thin arrow-right-long}
 * @preview ![arrow-right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-right-long.svg)
 */
const ArrowRightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M509.7 261.7c3.1-3.1 3.1-8.2 0-11.3l-152-152c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 248 8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l476.7 0L346.3 402.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l152-152z" />
    </Icon>
);

export default ArrowRightLong;