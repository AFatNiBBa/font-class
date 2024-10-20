
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=sharp-thin arrow-up-long}
 * @preview ![arrow-up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-up-long.svg)
 */
const ArrowUpLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M197.7 5.7L192 0l-5.7 5.7-152 152-5.7 5.7L40 174.6l5.7-5.7L184 30.6 184 504l0 8 16 0 0-8 0-473.4L338.3 169l5.7 5.7 11.3-11.3-5.7-5.7-152-152z" />
    </Icon>
);

export default ArrowUpLong;