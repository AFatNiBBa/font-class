
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=thin arrow-left-long}
 * @preview ![arrow-left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-left-long.svg)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M2.3 250.3c-3.1 3.1-3.1 8.2 0 11.3l152 152c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 264 504 264c4.4 0 8-3.6 8-8s-3.6-8-8-8L27.3 248 165.7 109.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-152 152z" />
    </Icon>
);

export default ArrowLeftLong;