
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=sharp-thin arrow-right-long}
 * @preview ![arrow-right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-right-long.svg)
 */
const ArrowRightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M506.3 261.7L512 256l-5.7-5.7-152-152-5.7-5.7L337.4 104l5.7 5.7L481.4 248 8 248l-8 0 0 16 8 0 473.4 0L343 402.3l-5.7 5.7 11.3 11.3 5.7-5.7 152-152z" />
    </Icon>
);

export default ArrowRightLong;