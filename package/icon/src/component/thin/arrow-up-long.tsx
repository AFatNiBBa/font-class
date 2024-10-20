
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=thin arrow-up-long}
 * @preview ![arrow-up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-up-long.svg)
 */
const ArrowUpLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M197.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L184 27.3 184 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-476.7L338.3 165.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-152-152z" />
    </Icon>
);

export default ArrowUpLong;