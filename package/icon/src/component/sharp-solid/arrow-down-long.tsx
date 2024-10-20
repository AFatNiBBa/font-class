
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=sharp-solid arrow-down-long}
 * @preview ![arrow-down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down-long.svg)
 */
const ArrowDownLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M214.6 489.4L192 512l-22.6-22.6-128-128L18.7 338.7 64 293.5l22.6 22.6L160 389.5 160 32l0-32 64 0 0 32 0 357.5 73.4-73.4L320 293.5l45.3 45.3-22.6 22.6-128 128z" />
    </Icon>
);

export default ArrowDownLong;