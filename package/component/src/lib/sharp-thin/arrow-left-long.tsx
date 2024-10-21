
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=sharp-thin arrow-left-long}
 * @preview ![arrow-left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-left-long.svg)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M5.7 250.3L0 256l5.7 5.7 152 152 5.7 5.7L174.6 408l-5.7-5.7L30.6 264 504 264l8 0 0-16-8 0L30.6 248 169 109.7l5.7-5.7L163.3 92.7l-5.7 5.7-152 152z" />
    </Icon>
);

export default ArrowLeftLong;