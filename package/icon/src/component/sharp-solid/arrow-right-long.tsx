
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=sharp-solid arrow-right-long}
 * @preview ![arrow-right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-right-long.svg)
 */
const ArrowRightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
    </Icon>
);

export default ArrowRightLong;