
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=sharp-thin arrow-down-long}
 * @preview ![arrow-down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-down-long.svg)
 */
const ArrowDownLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M186.3 506.3L192 512l5.7-5.7 152-152 5.7-5.7L344 337.4l-5.7 5.7L200 481.4 200 8l0-8L184 0l0 8 0 473.4L45.7 343 40 337.4 28.7 348.7l5.7 5.7 152 152z" />
    </Icon>
);

export default ArrowDownLong;