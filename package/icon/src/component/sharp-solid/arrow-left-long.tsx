
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=sharp-solid arrow-left-long}
 * @preview ![arrow-left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-left-long.svg)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M22.6 278.6L0 256l22.6-22.6 128-128 22.6-22.6L218.5 128l-22.6 22.6L122.5 224 480 224l32 0 0 64-32 0-357.5 0 73.4 73.4L218.5 384l-45.3 45.3-22.6-22.6-128-128z" />
    </Icon>
);

export default ArrowLeftLong;